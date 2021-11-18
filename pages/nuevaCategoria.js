import React from 'react';
import Layout from '../componentes/layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {gql, useMutation} from '@apollo/client';
import { useRouter } from 'next/router';

const NUEVA_CATEGORIA = gql`
mutation nuevaCategoria($input: CategoriaInput) {
  nuevaCategoria(input: $input){
    id
    nombre
    descripcion
  }
}
`;
const OBTENER_CATEGORIAS = gql`
query obtenerCategorias{
  obtenerCategorias{
    id
    nombre
    descripcion
  }
}
`
const nuevaCategoria = () => {
    const router = useRouter();
    const [nuevaCategoria] = useMutation(NUEVA_CATEGORIA, {
        update(cache, {data: { nuevaCategoria}}) {
            const {obtenerCategorias} = cache.readQuery({
                query: OBTENER_CATEGORIAS
            });
            cache.writeQuery({
                query: OBTENER_CATEGORIAS,
                data: {
                    obtenerCategorias: [...obtenerCategorias, nuevaCategoria]
                }
            })
        }

    }); 
    const formik = useFormik({
        initialValues: {
            nombre: '',
            descripcion: ''
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                    .required('El nombre de la Categoria es obligatoria')
        }),
        onSubmit: async valores => {
            const {nombre, descripcion} = valores
            try {
                const {data} = await nuevaCategoria({
                    variables: {
                        input: {
                            nombre,
                            descripcion
                        }
                    }
                });
             
                router.push('/');
            } catch (error) {
                console.log(error)
            }
        }
    })  
    return ( 
        
        <Layout>
        <div className=" flex justify-center">
        <h1 className=" text-2xl text-red-800 text-light mt-10">Nueva categoria</h1>
        </div>
        <div className="flex  justify-center mt-10">
            <div className=" max-w-lg "></div>
                <form
                className="bg white shadow-md flex flex-col"
                onSubmit={formik.handleSubmit}
                >
                       {formik.touched.nombre && formik.errors.nombre ? (
                           <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                               <p className="font-bold">Error</p>
                               <p>{formik.errors.nombre}</p> 
                               </div> 
                       ) : null    }
                       
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre"
                        >
                            Nombre
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 text-center text-gray-800"
                        id="nombre"
                        type="nombre"
                        placeholder="Nombre de Categoria"
                        onChange={formik.handleChange}
                        value={formik.values.nombre}
                        />

                        <label className="block text-gray-700 text-sm font-bold mb-5 mt-5" htmlFor="descripcion"
                        >
                            Descripcion
                        </label>
                        <textarea
                        rows="5" cols="80"
                        className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-800"
                        id="descripcion"
                        type="descripcion"
                        placeholder="Describi esta Categoria de Meme"
                        onChange={formik.handleChange}
                        value={formik.values.descripcion}
                        
                        />

                    <input
                    type="submit"
                    className="  mt-8  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    value="Crear Categoria"
                    />

                </form>
        </div>
        </Layout>
     );
}
 
export default nuevaCategoria;
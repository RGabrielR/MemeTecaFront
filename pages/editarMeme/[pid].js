import React from "react";
import Layout from "../../componentes/layout";
import { Formik } from "formik";
import * as Yup from "yup";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const ACTUALIZAR_MEME = gql`
  mutation actualizarMeme($id: ID!, $input: MemeInput) {
    actualizarMeme(id: $id, input: $input) {
      id
      imagen
      nombre
      descripcion
      creado
    }
  }
`;
const OBTENER_MEME = gql`
  query obtenerMeme($id: ID!) {
    obtenerMeme(id: $id) {
      id
      imagen
      nombre
      descripcion
      categoria
      creado
    }
  }
`;
const editarMeme = () => {
  const router = useRouter();
  const {
    query: { pid },
  } = router;
  const { loading, data, refetch } = useQuery(OBTENER_MEME, {
    variables: {
      id: pid,
    },
  });
  const [actualizarMeme] = useMutation(ACTUALIZAR_MEME);

  if (loading || !data) return <div className="lds-hourglass"></div>;
  const { obtenerMeme } = data;
  const categoriaId = data.obtenerMeme.categoria;
  const schemaValidacion = Yup.object({
    nombre: Yup.string().required("El nombre del Meme es obligatorio"),
    imagen: Yup.string().required("El link de la imagen es obligatorio"),
  });
  const actualizarInfoMeme = async (valores) => {
    const { nombre, descripcion, imagen } = valores;
    try {
      const { data } = await actualizarMeme({
        variables: {
          id: pid,
          input: {
            imagen,
            nombre,
            descripcion,
            categoria: categoriaId,
          },
        },
      });
      Swal.fire(
        "Actualizado!",
        "La Meme se actualizo correctamente",
        "success"
      );
      refetch();
      await router.push(`/meme/${pid}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className=" flex justify-center">
        <h1 className=" text-2xl text-red-800 text-light mt-10">Nuevo Meme</h1>
      </div>
      <div className="flex  justify-center mt-10">
        <div className=" max-w-lg "></div>

        <Formik
          validationSchema={schemaValidacion}
          enableReinitialize
          initialValues={obtenerMeme}
          onSubmit={(valores) => {
            actualizarInfoMeme(valores);
          }}
        >
          {(props) => {
            console.log(props);
            return (
              <form
                className="bg white shadow-md flex flex-col"
                onSubmit={props.handleSubmit}
              >
                {props.touched.imagen && props.errors.imagen ? (
                  <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{props.errors.imagen}</p>
                  </div>
                ) : null}

                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="imagen"
                >
                  Imagen
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 text-center text-gray-800"
                  id="imagen"
                  type="imagen"
                  placeholder="imagen de Meme"
                  onChange={props.handleChange}
                  value={props.values.imagen}
                />
                {props.touched.nombre && props.errors.nombre ? (
                  <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{props.errors.nombre}</p>
                  </div>
                ) : null}
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="nombre"
                >
                  Nombre
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 text-center text-gray-800"
                  id="nombre"
                  type="nombre"
                  placeholder="Nombre de Meme"
                  onChange={props.handleChange}
                  value={props.values.nombre}
                />
                <label
                  className="block text-gray-700 text-sm font-bold mb-5 mt-5"
                  htmlFor="descripcion"
                >
                  Descripcion
                </label>
                <textarea
                  rows="5"
                  cols="80"
                  className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-800"
                  id="descripcion"
                  type="descripcion"
                  placeholder="Describi esta Meme de Meme"
                  onChange={props.handleChange}
                  value={props.values.descripcion}
                />
                <input
                  type="submit"
                  className="  mt-8  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  value="Modificar Meme"
                />
              </form>
            );
          }}
        </Formik>
      </div>
    </Layout>
  );
};

export default editarMeme;

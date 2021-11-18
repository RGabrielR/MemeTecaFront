import React from "react";
import Layout from "../../componentes/layout";
import { Formik } from "formik";
import * as Yup from "yup";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const ACTUALIZAR_CATEGORIA = gql`
  mutation actualizarCategoria($id: ID!, $input: CategoriaInput) {
    actualizarCategoria(id: $id, input: $input) {
      nombre
      descripcion
    }
  }
`;
const OBTENER_CATEGORIA = gql`
  query obtenerCategoria($id: ID!) {
    obtenerCategoria(id: $id) {
      nombre
      descripcion
    }
  }
`;
const editarCategoria = () => {
  const router = useRouter();
  const {
    query: { pid },
  } = router;
  const { loading, data, refetch } = useQuery(OBTENER_CATEGORIA, {
    variables: {
      id: pid,
    },
  });
  const [actualizarCategoria] = useMutation(ACTUALIZAR_CATEGORIA);
  if (loading || !data) return <div className="lds-hourglass"></div>;
  const { obtenerCategoria } = data;

  const schemaValidacion = Yup.object({
    nombre: Yup.string().required("El nombre de la Categoria es obligatoria"),
  });
  const actualizarInfoCategoria = async (valores) => {
    const { nombre, descripcion } = valores;
    try {
      const { data } = await actualizarCategoria({
        variables: {
          id: pid,
          input: {
            nombre,
            descripcion,
          },
        },
      });
      Swal.fire(
        "Actualizado!",
        "La categoria se actualizo correctamente",
        "success"
      );
      refetch();
      router.push(`/categoria/${pid}`);
    } catch (error) {}
  };
  return (
    <Layout>
      <div className=" flex justify-center">
        <h1 className=" text-2xl text-red-800 text-light mt-10">
          Nueva categoria
        </h1>
      </div>
      <div className="flex  justify-center mt-10">
        <div className=" max-w-lg "></div>
        <Formik
          validationSchema={schemaValidacion}
          enableReinitialize
          initialValues={obtenerCategoria}
          onSubmit={(valores) => {
            actualizarInfoCategoria(valores);
          }}
        >
          {(props) => {
            console.log(props);

            return (
              <form
                className="bg white shadow-md flex flex-col"
                onSubmit={props.handleSubmit}
              >
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
                  placeholder="Nombre de Categoria"
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
                  placeholder="Describi esta Categoria de Meme"
                  onChange={props.handleChange}
                  value={props.values.descripcion}
                />
                <input
                  type="submit"
                  className="  mt-8  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  value="Modificar Categoria"
                />
              </form>
            );
          }}
        </Formik>
      </div>
    </Layout>
  );
};

export default editarCategoria;

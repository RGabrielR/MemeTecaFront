import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Layout from "../../componentes/layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const NUEVO_MEME = gql`
  mutation nuevoMeme($input: MemeInput) {
    nuevoMeme(input: $input) {
      id
      imagen
      nombre
      descripcion
      categoria
      creado
    }
  }
`;
const nuevoMeme = () => {
  const router = useRouter();
  const {
    query: { pid },
  } = router;
  const [nuevoMeme] = useMutation(NUEVO_MEME);
  const idCategoria = pid;
  const formik = useFormik({
    initialValues: {
      imagen: "",
      nombre: "",
      descripcion: "",
      categoria: idCategoria,
    },
    validationSchema: Yup.object({
      imagen: Yup.string().required(
        "para subir un meme tenes que subir un meme, Einstein"
      ),
      nombre: Yup.string().required("El nombre del meme es obligatorio"),
    }),
    onSubmit: async (valores) => {
      const { imagen, nombre, descripcion } = valores;

      try {
        const { data } = await nuevoMeme({
          variables: {
            input: {
              imagen,
              nombre,
              descripcion,
              categoria: idCategoria,
            },
          },
        });
        Swal.fire(
          "Nuevo Meme!",
          "El nuevo meme se ha creado correctamente",
          "success"
        );
        router.push(`/categoria/${pid}`);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Layout>
      <div className=" flex justify-center">
        <h1 className=" text-2xl text-red-800 text-light mt-10">Nuevo Meme</h1>
      </div>
      <div className="flex  justify-center mt-10">
        <div className=" max-w-lg "></div>
        <form
          className="bg white shadow-md flex flex-col"
          onSubmit={formik.handleSubmit}
        >
          {formik.touched.imagen && formik.errors.imagen ? (
            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
              <p className="font-bold">Error</p>
              <p>{formik.errors.imagen}</p>
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
            placeholder="Link del meme"
            onChange={formik.handleChange}
            value={formik.values.imagen}
          />
          {formik.touched.nombre && formik.errors.nombre ? (
            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
              <p className="font-bold">Error</p>
              <p>{formik.errors.nombre}</p>
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
            placeholder="Nombre del meme"
            onChange={formik.handleChange}
            value={formik.values.nombre}
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
            onChange={formik.handleChange}
            value={formik.values.descripcion}
          />
          <input
            type="submit"
            className="  mt-8  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            value="Crear Meme"
          />
        </form>
      </div>
    </Layout>
  );
};

export default nuevoMeme;

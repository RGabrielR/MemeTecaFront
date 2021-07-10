import React from "react";
import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { gql, useQuery, useMutation } from "@apollo/client";

const AUTENTICAR_AUTORIZADO = gql`
  mutation autenticarAutorizado($input: AutorizacionInput) {
    autenticarAutorizado(input: $input) {
      token
    }
  }
`;

const autenticarse = () => {
  const router = useRouter();

  const [autenticarAutorizado] = useMutation(AUTENTICAR_AUTORIZADO);

  const formik = useFormik({
    initialValues: {
      codigoAutorizacion: "",
    },
    validationSchema: Yup.object({
      codigoAutorizacion: Yup.string().required(
        "Este codigo es esencial para ingresar"
      ),
    }),
    onSubmit: async (valores) => {
      const { codigoAutorizacion } = valores;

      try {
        const { data } = await autenticarAutorizado({
          variables: {
            input: {
              codigoAutorizacion,
            },
          },
        });
        Swal.fire(
          "Perfecto!",
          "en unos instantes seras redirigido a la pagina",
          "success"
        );
        const { token } = data.autenticarAutorizado;

        localStorage.setItem("token", token);
        router.push(`/`);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div>
      <Head>
        <title>Necesitas el Codigo</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
          integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Viaoda+Libre&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="flex flex-col items-center min-h-screen justify-center bg-yellow-700 h-full">
        <div className="border-white border-2 rounded-sm bg-yellow-100 px-12">
          <h1 className="text-center self-center p-10 bg-yellow-100">
            Autenticarse
          </h1>
          <form
            className="bg white shadow-md flex flex-col"
            onSubmit={formik.handleSubmit}
          >
            <label
              className=" text-gray-700 text-sm font-bold mb-5 mt-5"
              htmlFor="CodigoAutorizacion"
            >
              Descripcion
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 text-center text-gray-800"
              id="codigoAutorizacion"
              type="codigoAutorizacion"
              placeholder="Codigo para Ingresar"
              onChange={formik.handleChange}
              value={formik.values.codigoAutorizacion}
            />
            <input
              type="submit"
              className="  mt-8 mb-8  bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
              value="validar"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default autenticarse;

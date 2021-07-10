import React, { Component } from "react";
import { useRouter } from "next/router";
import Layout from "../../componentes/layout";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import EdiText from "react-editext";
import styled from "styled-components";

const COMENTARIOS_POR_MEME = gql`
  query obtenerComentariosPorMeme($input: MemeIdInput) {
    obtenerComentariosPorMeme(input: $input) {
      id
      texto
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

const NUEVO_COMENTARIO = gql`
  mutation nuevoComentario($input: ComentarioInput) {
    nuevoComentario(input: $input) {
      id
      texto
      meme
      creado
    }
  }
`;
const ELIMINAR_COMENTARIO = gql`
  mutation eliminarComentario($id: ID!) {
    eliminarComentario(id: $id)
  }
`;
const ACTUALIZAR_COMENTARIO = gql`
  mutation actualizarComentario($id: ID!, $input: ComentarioInput) {
    actualizarComentario(id: $id, input: $input) {
      texto
      meme
    }
  }
`;
const MemeYComentarios = () => {
  const router = useRouter();
  const {
    query: { pid },
  } = router;
  const { loading, error, data } = useQuery(OBTENER_MEME, {
    variables: {
      id: pid,
    },
  });
  const {
    loading: loadingC,
    error: errorC,
    data: dataC,
    refetch,
  } = useQuery(COMENTARIOS_POR_MEME, {
    variables: {
      input: {
        meme: pid,
      },
    },
  });

  const [nuevoComentario] = useMutation(NUEVO_COMENTARIO);

  const [eliminarComentario] = useMutation(ELIMINAR_COMENTARIO);

  const [actualizarComentario] = useMutation(ACTUALIZAR_COMENTARIO);

  const formik = useFormik({
    initialValues: {
      texto: "",
    },

    onSubmit: async (valores) => {
      const { texto } = valores;

      try {
        const { data } = await nuevoComentario({
          variables: {
            input: {
              texto,
              meme: pid,
            },
          },
        });
        refetch().then(formik.resetForm());

        router.push(`/meme/${pid}`);
      } catch (error) {
        console.log(error);
      }
    },
  });
  if (loading || loadingC) return <div className="lds-hourglass"></div>;

  if (error) return error.message;
  if (errorC) return errorC.message;
  const imagenMeme = (imagen) => {
    if (!imagen) {
      return "null";
    } else return imagen;
  };
  const confirmarEliminarComentario = (idComentario) => {
    Swal.fire({
      title: "Seguro quieres eliminar este Comentario?",
      text: "no lo podras revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI, mandale ura!",
    }).then(async (result) => {
      if (result.value) {
        try {
          const { data } = await eliminarComentario({
            variables: {
              id: idComentario,
            },
          });
          refetch();
          Swal.fire("Eliminado!", data.eliminarMeme, "success");
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  return (
    <Layout>
      <div className=" flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl text-yellow-900 font-bold mt-10 Titulo-Principal mb-10">
          {data.obtenerMeme.nombre}
        </h1>
        <img
          src={imagenMeme(data.obtenerMeme.imagen)}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://i.redd.it/s3y10estw5051.png";
          }}
        />
        <h1 className=" text-2xl px-6 py-3 text-white font-bold mt-5 bg-yellow-700 font-mono hover:text-black cursor-default ">
          {data.obtenerMeme.descripcion}
        </h1>
        <h1 className="text-xl font-mono text-yellow-700 my-5">
          Comentarios:{" "}
        </h1>
        <div className="mb-12 self-center items-center w-full">
          {dataC.obtenerComentariosPorMeme.map((comentario) => {
            const onSave = async (val) => {
              await actualizarComentario({
                variables: {
                  id: comentario.id,
                  input: {
                    texto: val,
                    meme: pid,
                  },
                },
              });
            };
            return (
              <div
                key={comentario.id}
                className="flex flex-row justify-between sm:justify-center comentarios "
              >
                <div className="comentarioss">
                  <EdiText
                    type="text"
                    value={comentario.texto}
                    onSave={onSave}
                    id={comentario.id}
                  />
                </div>
                <button
                  className="como-el-edit"
                  onClick={() => confirmarEliminarComentario(comentario.id)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
        <div className="flex mx-auto items-center justify-center shadow-lg mt-12 mx-8 mb-4 max-w-lg">
          <form
            onSubmit={formik.handleSubmit}
            className="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
                Agregar nuevo Comentario
              </h2>
              <div className="w-full md:w-full px-3 mb-2 mt-2">
                <textarea
                  className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                  name="texto"
                  onChange={formik.handleChange}
                  value={formik.values.texto}
                  type="texto"
                  id="texto"
                  htmlFor="texto"
                  placeholder="Tu comentario"
                  required
                />
              </div>
              <div className="w-full md:w-full flex items-start md:w-full px-3">
                <div className="flex items-start w-2/3 text-gray-700 px-2 py-2 mr-auto">
                  <svg
                    fill="none"
                    className="w-5 h-5 text-gray-600 mr-1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-xs md:text-sm pt-px">
                    Respeta las Reglas de la Comunidad
                  </p>
                </div>
                <div className="mr-1 ">
                  <input
                    type="submit"
                    className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-300"
                    value="Postear"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default MemeYComentarios;

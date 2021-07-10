import React from "react";
import { useRouter } from "next/router";
import Layout from "../../componentes/layout";
import { gql, useQuery, useMutation } from "@apollo/client";
import Router from "next/router";
import Swal from "sweetalert2";

const OBTENER_CATEGORIA = gql`
  query obtenerCategoria($id: ID!) {
    obtenerCategoria(id: $id) {
      id
      nombre
      descripcion
    }
  }
`;
const OBTENER_MEMES_CATEGORIA = gql`
  query obtenerMemesPorCategoria($input: CategoriaIDinput) {
    obtenerMemesPorCategoria(input: $input) {
      id
      nombre
      descripcion
      creado
      imagen
    }
  }
`;
const ELIMINAR_MEME = gql`
  mutation eliminarMeme($id: ID!) {
    eliminarMeme(id: $id)
  }
`;

const verCategoria = () => {
  const router = useRouter();
  const {
    query: { pid },
  } = router;
  const { loading, error, data } = useQuery(OBTENER_CATEGORIA, {
    variables: {
      id: pid,
    },
  });
  const {
    data: dataM,
    error: errorM,
    loading: loadingM,
    refetch,
  } = useQuery(OBTENER_MEMES_CATEGORIA, {
    variables: {
      input: {
        categoria: pid,
      },
    },
  });
  const [eliminarMeme] = useMutation(ELIMINAR_MEME);
  if (loading || !data || loadingM || !dataM)
    return <div className="lds-hourglass"></div>;
  if (error) return error.message;
  if (errorM) return errorM.message;
  const verMeme = async (id) => {
    await Router.push({
      pathname: "/meme/[id]",
      query: { id },
    });
  };
  const nuevoMeme = async (id) => {
    await Router.push({
      pathname: "/nuevoMeme/[id]",
      query: { id },
    });
  };
  const editarMeme = async (id) => {
    await Router.push({
      pathname: "/editarMeme/[id]",
      query: { id },
    });
  };
  const confirmarEliminarMeme = (idMeme) => {
    Swal.fire({
      title: "Seguro quieres eliminar esta Meme?",
      text: "no lo podras revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI, mandale ura!",
    }).then(async (result) => {
      if (result.value) {
        try {
          const { data } = await eliminarMeme({
            variables: {
              id: idMeme,
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
  const imagenMeme = (imagen) => {
    if (!imagen) {
      return "null";
    } else return imagen;
  };
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center bg-gray-300">
        <h1 className=" text-4xl bg-yellow-700 text-white p-8 font-bold mt-10 Titulo-Principal ">
          {data.obtenerCategoria.nombre}
        </h1>
        <h1 className=" text-2xl  font-bold mt-5 mb-5 ">
          {data.obtenerCategoria.descripcion}
        </h1>

        <button
          onClick={() => nuevoMeme(data.obtenerCategoria.id)}
          className="bg-gray-500 hover:bg-gray-400 text-white text-3xl font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded ml-2 mt-4"
        >
          {" "}
          Nuevo Meme
        </button>

        <div className="flex flex-wrap grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {dataM.obtenerMemesPorCategoria.map((meme) => (
            <div className="flex justify-between m-6 ">
              <div className="flex flex-col h-full max-w-lg mx-auto fondo-gradiente rounded-lg pb-4 carta-animada">
                <img
                  className="rounded-lg rounded-b-none misma-altura"
                  src={imagenMeme(meme.imagen)}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/default.jpg";
                  }}
                  alt="thumbnail"
                  loading="lazy"
                />
                <div className="flex justify-between -mt-4 px-4">
                  <span className="flex h-min space-x-1 items-center border-black border-1 justify-between  bg-red-700 hover:bg-red-900 rounded-full text-gray-400  py-1 px-1 text-xs font-medium">
                    <button onClick={() => confirmarEliminarMeme(meme.id)}>
                      <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="black"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </span>
                  <span className="flex h-min space-x-1 items-center border-black border-1 justify-between rounded-full text-gray-400 bg-yellow-700 hover:bg-yellow-900 py-1 px-1 text-xs font-medium">
                    <button onClick={() => editarMeme(meme.id)}>
                      <svg
                        className="w-7 h-7 "
                        fill="none"
                        stroke="black"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                    </button>
                  </span>
                </div>
                <div className="py-2 px-4">
                  <h1
                    onClick={() => verMeme(meme.id)}
                    className="text-xl font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer"
                  >
                    {meme.nombre}
                  </h1>
                </div>
                <div className="px-4 space-y-2">
                  <p className="text-gray-400 font-normal leading-5 tracking-wide">
                    {meme.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default verCategoria;

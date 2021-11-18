import React from "react";
import Layout from "../componentes/layout";
import { gql, useQuery } from "@apollo/client";
import Router from "next/router";

const MEMES_MAS_COMENTADOS = gql`
  query memesMasComentados {
    memesMasComentados {
      total
      meme {
        _id
        imagen
        nombre
        descripcion
        creado
      }
    }
  }
`;

export default function Home() {
  const { data, loading } = useQuery(MEMES_MAS_COMENTADOS);
  if (loading || !data) return <div className="lds-hourglass"></div>;
  const imagenMeme = (imagen) => {
    if (!imagen) {
      return "null";
    } else return imagen;
  };

  const verMeme = async (id) => {
    await Router.push({
      pathname: "/meme/[id]",
      query: { id },
    });
  };
  return (
    <Layout>
      <div className="flex flex-col  items-center">
        <h1 className="Titulo-Principal mt-10 bg-yellow-800 text-white px-5 shadow-2xl rounded">
          MemeTeca
        </h1>
        <h1 className="Titulo-Principal waves">
          el registro de memes de la internet
        </h1>
        <h1 className="text-2xl">Memes mas comentados</h1>
        <div className="flex flex-wrap grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.memesMasComentados.map((mtop) => {
            const { nombre, imagen, descripcion, _id } = mtop.meme[0];
            return (
              <div className="flex justify-between m-6  ">
                <div className="flex flex-col h-full max-w-lg mx-auto bg-red-800 rounded-lg pb-4 carta-animada">
                  <img
                    className="rounded-lg rounded-b-none misma-altura "
                    src={imagenMeme(imagen)}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/default.jpg";
                    }}
                    alt="thumbnail"
                    loading="lazy"
                  />
                  <div className="flex justify-between -mt-4 px-4">
                    <span className="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-800 py-1 px-2 text-xs font-medium">
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
                          strokeWidth="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        ></path>
                      </svg>
                      <p className="text-blue-500 font-semibold text-xs">
                        {mtop.total} comentarios
                      </p>
                    </span>
                  </div>
                  <div className="py-2 px-4">
                    <h1
                      onClick={() => verMeme(_id)}
                      className="text-xl font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer"
                    >
                      {nombre}
                    </h1>
                  </div>
                  <div className="px-4 space-y-2">
                    <p className="text-gray-400 font-normal leading-5 tracking-wide">
                      {descripcion}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

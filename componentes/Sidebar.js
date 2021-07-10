import React, { useState, useEffect } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import Link from "next/link";
import Router from "next/router";
import Swal from "sweetalert2";
import Image from "next/image";
import router from "next/router";

const OBTENER_CATEGORIAS = gql`
  query obtenerCategorias {
    obtenerCategorias {
      id
      nombre
      descripcion
    }
  }
`;
const ELIMINAR_CATEGORIA = gql`
  mutation eliminarCategoria($id: ID!) {
    eliminarCategoria(id: $id)
  }
`;
const Sidebar = () => {
  const { data, loading, error, refetch } = useQuery(OBTENER_CATEGORIAS);
  const [eliminarCategoria] = useMutation(ELIMINAR_CATEGORIA);
  const [barra, setBarra] = useState(true);
  let barraClase = "bg-yellow-900  xl:w-1/5  ";
  useEffect(() => {
    if (barra == true) {
      barraClase.replace(
        "bg-yellow-900  xl:w-1/5  barra-lateral",
        "bg-yellow-900  xl:w-1/5  barra-activa"
      );
    }
    if (barra == false) {
      barraClase = "bg-yellow-900  xl:w-1/5  barra-lateral";
    }
  });
  if (loading || !data) return <div className="lds-hourglass"></div>;
  const tokenAutorizado = localStorage.getItem("token");
  if (!tokenAutorizado) {
    router.push("/autenticarse");
  }
  const verCategoria = async (id) => {
    await Router.push({
      pathname: "/categoria/[id]",
      query: { id },
    });
  };
  const editarCategoria = async (id) => {
    await Router.push({
      pathname: "/editarcategoria/[id]",
      query: { id },
    });
  };
  const confirmarEliminarCategoria = (idCategoria) => {
    Swal.fire({
      title: "Seguro quieres eliminar esta categoria?",
      text: "no lo podras revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI, mandale ura!",
    }).then(async (result) => {
      if (result.value) {
        try {
          const { data } = await eliminarCategoria({
            variables: {
              id: idCategoria,
            },
          });
          refetch();
          Swal.fire("Eliminado!", data.eliminarCategoria, "success");
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <>
      <div onClick={() => setBarra(!barra)} className="hamburguesa">
        <div className={barra ? "linea1" : "linea1b"}></div>
        <div className={barra ? "linea2" : "linea2b"}></div>
        <div className={barra ? "linea3" : "linea3b"}></div>
      </div>
      <aside
        className={
          barra
            ? "bg-yellow-900 md:w-1/4 lg:w-1/5  barra-lateral"
            : "bg-yellow-900  xl:w-1/5  barra-activa"
        }
        id="barra"
      >
        <Link href="/">
          <div
            id="barraLateral"
            className="flex flex-row bg-yellow-700 hover:bg-gray-800 cursor-pointer"
          >
            <Image
              src="/MemeTeca.png"
              className="logo"
              width={127}
              height={137}
            />
            <h1 className="text-white font-bold text-xl  mt-2 p-5  titulo">
              MemeTeca
            </h1>
          </div>
        </Link>
        <Link href="/nuevaCategoria">
          <button className="bg-gray-500 hover:bg-gray-400 text-white text-3xl font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded ml-2 mt-4">

            Crear Categoria
          </button>
        </Link>
        <h1 className="text-white font-bold text-xl pl-7 mt-2 hover:text-gray-900 cursor-default">
          Categorias de Memes
        </h1>
        <nav className=" mt-5 list-none">
          {data.obtenerCategorias.map((categoria) => (
            <div
              className="flex flex-row justify-between items-center"
              key={categoria.id}
            >
              <li
                className="text-white text-justify font-bold ml-4 pb-3 hover:text-black cursor-pointer py-2"
                onClick={() => verCategoria(categoria.id)}
              >
                {categoria.nombre}
              </li>
              <div className="-mb-2 pr-4 flex flex-nowrap  self-center">
                <button
                  onClick={() => confirmarEliminarCategoria(categoria.id)}
                  className="rounded-full w-6 h-6 bg-red-700 hover:bg-red-900"
                >
                  <svg
                    className="w-6 h-6 hover:"
                    fill="none"
                    stroke="currentColor"
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
                <button
                  onClick={() => editarCategoria(categoria.id)}
                  className="rounded-full w-6 h-6 bg-yellow-700 hover:bg-yellow-900"
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
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

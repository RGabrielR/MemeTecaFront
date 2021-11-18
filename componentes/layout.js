import { Fragment } from "react";
import React from "react";
import Head from "next/head";
import Sidebar from "../componentes/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Memeteca</title>
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
      <div className="flex min-h-screen">
        <Sidebar />
        <main className=" sm:w-full md-3/4 lg:w-4/5  bg-gray-200 ">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;

import React from 'react';
import Header from "@components/Header";
import {Outlet} from "react-router";

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      {/*<Footer></Footer>*/}
    </>
  );
};

export default Layout;

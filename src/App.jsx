import React from "react";
import Layout from "./Layout";
import Login from "./pages/Login";
import Product from "./pages/Product";

function App() {
  const loggedIn = localStorage.getItem('loggedIn');
  console.log(loggedIn)
  return (
    <>
      <Layout>
       { 
        loggedIn && loggedIn == 1 ? <Product /> : <Login /> 
       }
      </Layout>
    </>
  )
}

export default App;

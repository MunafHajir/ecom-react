import React, { useState } from "react";
import Layout from "./Layout";
import Login from "./pages/Login";
import Product from "./pages/Product";

function App() {
  const [isLoggedIn, changeIsLoggedIn] = useState(false);

  const loggedIn = localStorage.getItem("loggedIn");

  const printName = (name) => console.log(name);

  return (
    <>
      <Layout>
        {
          loggedIn 
            ? (
              <Product />
            ) 
            : (
              <Login 
              printName={printName}
              changeIsLoggedIn={changeIsLoggedIn} 
              />
            )
        }
      </Layout>
    </>
  );
}

export default App;

import React, { Component } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Nav from "./components/Nav";
import Login from "./components/Login";
import Product from "./components/Product";
import ProductDetails from "./pages/ProductDetails";

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  privateRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login 
              printName={this.props.printName}
              changeIsLoggedIn={this.props.changeIsLoggedIn}
      />,

    },
  ]);

  publicRouter = createBrowserRouter([
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/product/:id",
      element: <ProductDetails />,
    },

  ]);

  render() {
    const { loggedIn } = this.props;
    console.log({loggedIn})
    return (
      <>
        <Nav />
        <RouterProvider
          router={parseInt(loggedIn) ? this.publicRouter : this.privateRouter}
        />
      </>
    );
  }
}

export default Layout;

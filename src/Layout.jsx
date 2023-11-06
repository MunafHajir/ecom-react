import React, { Component } from "react";

import Nav from "./components/Nav";

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Nav />
        {this.props.children}
      </>
    );
  }
}

export default Layout;

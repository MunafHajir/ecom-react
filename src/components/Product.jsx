import { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Product </h1>
        <div>
          <img />
          <h2>Product : Name</h2>
          <h3>Price: 100</h3>
          <h5> Category: </h5>
          <p>Description: </p>
        </div>
        <div>
          <img />
          <h2>Product : Name</h2>
          <h3>Price: 100</h3>
          <h5> Category: </h5>
          <p>Description: </p>
        </div>
      </div>
    );
  }
}

export default Product;

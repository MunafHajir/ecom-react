import { Component } from "react";
import ProductData from '../data/product.json'


class Product extends Component {
  constructor(props) {
    super(props);

    this.data = {

    }
    this.state = {
      productList: [],
    };
  }

  getProductList = () => {
    
  };

  componentDidMount(){
    this.getProductList()
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Update", {prevProps, prevState})
  }

  render() {
    return (
      <div>
        <h1> Product </h1>
        {
          this.state.productList.map(
            (value,index) => {
              return (
                <div key={value.title + index}>
                  <img src={value.image} style={{height: "250px"}}/>
                  <h2>Product : {value.title}</h2>
                  <h3>Price: {value.price}</h3>
                  <h5> Category: </h5>
                  <p>Description: </p>
                </div>
              )
            }
          )
        }
      </div>
    );
  }
}

export default Product;

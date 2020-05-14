import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products:[
            {
                price:999,
                title:'Phone',
                qty:1,
                img:'',
                id:1
            },
            {
                price:1999,
                title:'Watch',
                qty:1,
                img:'',
                id:2
            },
            {
                price:999,
                title:'Book',
                qty:1,
                img:'',
                id:3
            }
        ]
    } 
  }
  handleDecreaseQuantity = (product) =>{
      console.log("please decrease the qty",product);
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty ===0){
          return;
      }
      products[index].qty -=1;

      this.setState({
          products:products
      });
  }
  handleIncreaseQuantity = (product) =>{
      console.log("please increase the qty",product);
      const {products} = this.state;
      const index = products.indexOf(product);
      products[index].qty +=1;

      this.setState({
          products:products
      });
  }

  handleDeleteProduct = (id) =>{
      const {products} = this.state;
      const items = products.filter((item)=> item.id !==id);

      this.setState({
          products:items
      });
  }

  getCartCount = ()=>{
    const {products} = this.state;
    let count = 0;

    products.forEach((product)=>{
      count += product.qty;
    });
    return count;
  }
  render(){
    const  {products} = this.state
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
      <h1>Cart</h1>
      <Cart 
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
      />
      </div>
    );
  }
}

export default App;

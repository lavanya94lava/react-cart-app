import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component{
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
    handleIncreaseQuantity = (product) =>{
        console.log("please increase the qty",product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty +=1;

        this.setState({
            products:products
        });
    }
    render(){
        const {products} = this.state;
        return (
            <div className = "cart">
                {
                    products.map((product) =>{
                        return(<CartItem
                            product = {product} 
                            key = {product.id}
                            onIncreaseQuantity = {this.handleIncreaseQuantity}
                            />);
                         
                    })
                }                
            </div>
        );
    }
}

export default Cart;
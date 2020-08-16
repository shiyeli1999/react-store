import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
// import {storeProducts} from '../data';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
    // state={
    //     products: storeProducts
    // };
    render() {
        return (
            <React.Fragment>
                <div className="py-5 product-list">
                    <div className="container">
                        <Title className="title" title="our best potions" />


                        <div className="row">
                            <ProductConsumer>
                                {(value)=>{
                                    return value.products.map( product =>{
                                        return <Product key={product.id} product={product} />;
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>

                //  <Product /> 

        );
    }
}

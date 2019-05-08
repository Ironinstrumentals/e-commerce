import React, { Component } from 'react';
import store from './store';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
//import uuid from 'uuid';

export class Cart extends Component {
    state = {
        Products: []
    };
    /////
    removeFromCartOLD(item) {
        for (let i = 0; i < store.getState().Cart.length; i++) {
            if (store.getState().Cart[i].title.includes(item)) {

                store.getState().Cart = store.getState().Cart.filter(function(ele){
                    return ele != store.getState().Cart[i];
                });

            }

        }

        this.forceUpdate();
    };
    ////
    removeFromCart(item) {
        for (let i = 0; i < store.getState().Cart.length; i++) {
            if (store.getState().Cart[i].title.includes(item)) {
                store.getState().Cart = store.getState().Cart.filter(function(ele){
                    return ele != store.getState().Cart[i];
                });
            }
        }
        this.forceUpdate();
    };
    AddToCart(value) {
        for (let i = 0; i < store.getState().Products.length; i++) {
            if (store.getState().Products[i].title == value) {

                store.dispatch({type: 'ADD_TO_CART', product: store.getState().Products[i]})
            }
        }
    };
    Checkout() {
        alert('Feature Coming Soon!');
    }
    renderCart() {
        return store.getState().Cart.map(product => {
        return(
            <ListGroup.Item className='CartItem' key={product.id}><img alt={product.title + ' Image'} className="CartIMG" src={product.img} /><div className="CartDiv">{product.title}</div><div><select className='CartSelect'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option></select><Button variant="primary" id={product.title} onClick={() => this.removeFromCart(product.title)}>Delete</Button></div></ListGroup.Item>
        )})
    }
    render() {
        return(<div className="Item">
            <Card>
                <Card.Header className='CartBox'><h3><b>Cart:</b></h3></Card.Header>
                <ListGroup variant="flush">
                    {this.renderCart()}
                    <ListGroup.Item className='CartItem Checkout' ><Button variant='primary' onClick={() => this.Checkout()}>Checkout</Button></ListGroup.Item>
                </ListGroup>
            </Card>
        </div>)
    }
}
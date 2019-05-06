import React, { Component } from 'react';
import store from './store';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";


export class Cart extends Component {

    renderCart() {
        return store.getState().Cart.map(product => {
        return(
            <ListGroup.Item className='CartItem' key={product.id}><img alt={product.name + ' Image'} className="CartIMG" src={product.img} /><div className="CartDiv">{product.title}</div><div><Button variant="primary">Delete</Button></div></ListGroup.Item>
        )})
    }
    render() {
        return(<div className="Item">
            <Card>
                <Card.Header className='CartBox'><h3><b>Cart:</b></h3></Card.Header>
                <ListGroup variant="flush">
                    {this.renderCart()}
                </ListGroup>
            </Card>
        </div>)
    }
}
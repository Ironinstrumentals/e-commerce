import React, { Component } from 'react';
import store from './store';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export class ItemDetails extends Component {
    state = {
        Products: store.getState().Products
    };
    renderDetails() {
        return(
            <div className="Item" key={product.id}>
                <Card style={{ width: '18rem', height: '725px'}} id={product.id}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body className="CBody">
                        <Card.Title id={product.title + 'Title'}>{product.title}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Card.Text className="Rating"><i className="fas fa-star"></i> {product.rating}</Card.Text>
                        <div className="SuperDiv">
                            <Card.Text className="iflex">
                                ${product.price}
                            </Card.Text>
                            <Button className="iflex" variant="primary" id={product.title} onClick={() => this.AddToCart(product.title)}>Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )

    }
    render() {
        return(this.renderDetails())
    }
}
import React, { Component } from 'react';
import store from './store';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from 'react-router-dom';
export class Cart extends Component {
    state = {
        Products: []
    };
    removeFromCart(item) {
        for (let i = 0; i < store.getState().Cart.length; i++) {
            if (store.getState().Cart[i].title.includes(item)) {
                store.getState().Cart = store.getState().Cart.filter(function(ele){
                    return ele !== store.getState().Cart[i];
                });
            }
        }
        this.forceUpdate();
    };
    Checkout() {
        console.log('Checkout Feature Coming Soon!');
        alert('Checkout Feature Coming Soon!');
        store.getState().Cart = [];
    }
    renderCart() {
        return store.getState().Cart.map(product => {
        return(
            <ListGroup.Item className='CartItem' key={product.id}><img alt={product.title + ' Image'} className="CartIMG" src={product.img} /><div className="CartDiv">{product.title} </div><div className='CartPrice'>${product.price}</div><div>  <select className='CartSelect'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option></select><Button variant="primary" id={product.title} onClick={() => this.removeFromCart(product.title)}>Delete</Button></div></ListGroup.Item>
        )})
    }
    render() {
        if (document.getElementById('FooterAccountName').innerHTML !== 'Login') {
            if (document.location.history === '/Store') {
                if (document.getElementById('FooterAccountName').innerHTML !== 'Login') {
                    return (<div className="Item">
                        <Card>
                            <Card.Header className='CartBox'><h3><b>Cart:</b></h3></Card.Header>
                            <ListGroup variant="flush">
                                {this.renderCart()}
                                <ListGroup.Item className='CartItem Checkout'><Link to='/Store'
                                                                                    className='btn btn-outline-primary'
                                                                                    onClick={() => this.Checkout()}>Checkout <i
                                    className="fas fa-credit-card"></i></Link></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>)
                } else {
                    return (null)
                }
            } else if (document.location.history === '/Category/TV') {
                if (document.getElementById('FooterAccountName').innerHTML !== 'Login') {
                    return (<div className="Item">
                        <Card>
                            <Card.Header className='CartBox'><h3><b>Cart:</b></h3></Card.Header>
                            <ListGroup variant="flush">
                                {this.renderCart()}
                                <ListGroup.Item className='CartItem Checkout'><Link to='/Category/TV'
                                                                                    className='btn btn-outline-primary'
                                                                                    onClick={() => this.Checkout()}>Checkout <i
                                    className="fas fa-credit-card"></i></Link></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>)
                } else {
                    return (null)
                }
            } else if (document.location.history === '/Category/Headphones') {
                if (document.getElementById('FooterAccountName').innerHTML !== 'Login') {
                    return (<div className="Item">
                        <Card>
                            <Card.Header className='CartBox'><h3><b>Cart:</b></h3></Card.Header>
                            <ListGroup variant="flush">
                                {this.renderCart()}
                                <ListGroup.Item className='CartItem Checkout'><Link to='/Category/Headphones'
                                                                                    className='btn btn-outline-primary'
                                                                                    onClick={() => this.Checkout()}>Checkout <i
                                    className="fas fa-credit-card"></i></Link></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>)
                } else {
                    return (null)
                }
            } else if (document.location.history === '/Category/Phones') {
                if (document.getElementById('FooterAccountName').innerHTML !== 'Login') {
                    return (<div className="Item">
                        <Card>
                            <Card.Header className='CartBox'><h3><b>Cart:</b></h3></Card.Header>
                            <ListGroup variant="flush">
                                {this.renderCart()}
                                <ListGroup.Item className='CartItem Checkout'><Link to='/Category/Phones'
                                                                                    className='btn btn-outline-primary'
                                                                                    onClick={() => this.Checkout()}>Checkout <i
                                    className="fas fa-credit-card"></i></Link></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>)
                } else {
                    return (null)
                }
            } else if (document.location.history === '/Category/Cameras') {
                if (document.getElementById('FooterAccountName').innerHTML !== 'Login') {
                    return (<div className="Item">
                        <Card>
                            <Card.Header className='CartBox'><h3><b>Cart:</b></h3></Card.Header>
                            <ListGroup variant="flush">
                                {this.renderCart()}
                                <ListGroup.Item className='CartItem Checkout'><Link to='/Category/Cameras'
                                                                                    className='btn btn-outline-primary'
                                                                                    onClick={() => this.Checkout()}>Checkout <i
                                    className="fas fa-credit-card"></i></Link></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>)
                } else {
                    return (null)
                }
            } else if (document.location.history === '/Category/Watches') {
                if (document.getElementById('FooterAccountName').innerHTML !== 'Login') {
                    return (<div className="Item">
                        <Card>
                            <Card.Header className='CartBox'><h3><b>Cart:</b></h3></Card.Header>
                            <ListGroup variant="flush">
                                {this.renderCart()}
                                <ListGroup.Item className='CartItem Checkout'><Link to='/Category/Watches'
                                                                                    className='btn btn-outline-primary'
                                                                                    onClick={() => this.Checkout()}>Checkout <i
                                    className="fas fa-credit-card"></i></Link></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>)
                } else {
                    return (null)
                }
            } else if (document.location.history === '/Category/TV') {
                if (document.getElementById('FooterAccountName').innerHTML !== 'Login') {
                    return (<div className="Item">
                        <Card>
                            <Card.Header className='CartBox'><h3><b>Cart:</b></h3></Card.Header>
                            <ListGroup variant="flush">
                                {this.renderCart()}
                                <ListGroup.Item className='CartItem Checkout'><Link to='/Category/Kitchen_Appliances'
                                                                                    className='btn btn-outline-primary'
                                                                                    onClick={() => this.Checkout()}>Checkout <i
                                    className="fas fa-credit-card"></i></Link></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>)
                } else {
                    return (null)
                }
            } else
                return (<div className="Item">
                    <Card>
                        <Card.Header className='CartBox'><h3><b>Cart:</b></h3></Card.Header>
                        <ListGroup variant="flush">
                            {this.renderCart()}
                            <ListGroup.Item className='CartItem Checkout'><Link to='/Store'
                                                                                className='btn btn-outline-primary'
                                                                                onClick={() => this.Checkout()}>Checkout <i
                                className="fas fa-credit-card"></i></Link></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>)
        }
        else {
            document.location.href = '/';
            return(null);
        }
    }
}
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
        store.getState().Cart = [];
        console.log('Cart Cleared');
    }
    calibratePrice(price, value) {
        if (isNaN(price * value)) {
            return (
                price
            )
        } else {
            let meme = (price * value).toFixed(2);
            return(
                meme
            )
        }
    }
    renderCart() {
        return store.getState().Cart.map(product => {
        return(
            <ListGroup.Item className='CartItem' key={product.id}><div><img alt={product.title + ' Image'} className="CartIMG" src={product.img} /></div><div className="CartDiv">{product.title} </div><div className='CartPrice'>${this.calibratePrice(product.price, document.getElementById(product.id).value)}</div><div className='SuperCartHolder'>  <select className='CartSelect' id={product.id} onChange={() => this.forceUpdate()} onLoad={() => this.forceUpdate()}><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option></select><Button variant="primary" id={product.title} onClick={() => this.removeFromCart(product.title)}>Delete</Button></div></ListGroup.Item>
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
                                <ListGroup.Item className='CartItem Checkout'><Link to='/e-commerce/Store'
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
                                <ListGroup.Item className='CartItem Checkout'><Link to='/e-commerce/Category/Headphones'
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
                                <ListGroup.Item className='CartItem Checkout'><Link to='/e-commerceCategory/Phones'
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
                                <ListGroup.Item className='CartItem Checkout'><Link to='/e-commerce/Category/Cameras'
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
                                <ListGroup.Item className='CartItem Checkout'><Link to='/e-commerce/Category/Watches'
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
                                <ListGroup.Item className='CartItem Checkout'><Link to='/e-commerce/Category/Kitchen_Appliances'
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
                            <ListGroup.Item className='CartItem Checkout'><Link to='/e-commerce/Store'
                                                                                className='btn btn-outline-primary'
                                                                                onClick={() => this.Checkout()}>Checkout <i
                                className="fas fa-credit-card"></i></Link></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>)
        }
        else {
            document.location.href = '/e-commerce/';
            return(null);
        }
    }
}
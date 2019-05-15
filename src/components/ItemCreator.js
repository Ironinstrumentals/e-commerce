import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import store from './store';
import { Link } from 'react-router-dom';
import ListGroup from "react-bootstrap/ListGroup";
export class ItemCreator extends Component {
    static handleShow() {
        let modal = true;
        store.dispatch({type: 'MODAL', modal});
    }
    static setModal(title, description, price, rating) {
        store.dispatch({type: 'ITEM_TITLE', title});
        store.dispatch({type: 'ITEM_DESCRIPTION', description});
        store.dispatch({type: 'ITEM_PRICE', price});
        store.dispatch({type: 'ITEM_RATING', rating});
        ItemCreator.handleShow();
    }
    AddToCart(value) {
        for (let i = 0; i < store.getState().Products.length; i++) {
            if (store.getState().Products[i].title == value) {
                if (store.getState().Cart.includes(store.getState().Products[i])) {
                    alert('Already in your Cart!');
                } else {
                    if (document.getElementById('FooterAccountName').innerHTML !== 'Login') {
                        store.dispatch({type: 'ADD_TO_CART', product: store.getState().Products[i]});
                        alert('Added "'+ store.getState().Products[i].title +'" To the Cart!')
                    } else {
                        if (document.getElementById('FooterAccountName').innerHTML === 'Login') {
                            document.location.href = '/e-commerce/';
                        } else {
                            return (null);
                        }
                    }
                }
            }
        }
    };
    renderItems() {
        this.itemPusher();
        return store.getState().Products.map(product => {
            return(
                <div className="Item" key={product.id}>
                <Card style={{ width: '18rem', height: '425px'}} id={product.id}>
                    <Card.Img variant="top" src={product.img} />
                    <div className='BorderLine'></div>
                    <Card.Body className="CBody">
                        <ListGroup variant='flush'>
                            <ListGroup.Item className='SuperItem'><Card.Title id={product.title + 'Title'}>{product.title}</Card.Title></ListGroup.Item>
                        <Link to='/e-commerce/Store/Details' id='DetailsBTN' onClick={() => ItemCreator.setModal(product.title, product.description, product.price, product.rating)} className='btn btn-outline-primary'>Details</Link>
                        <div className="SuperDiv">
                        <Card.Text className="iflex">
                            ${product.price}
                        </Card.Text>
                                                <Button className="iflex CartBTN" variant="outline-primary" id={product.title} onClick={() => this.AddToCart(product.title)}>Add to Cart <i className="fas fa-cart-plus"></i></Button>
                        </div>
                        </ListGroup>
                    </Card.Body>
                </Card>
                </div>
            )
        })
    };
    render() {
        return(
                this.renderItems()
        );
    }
}
export class ItemFilter extends Component {
    AddToCart(value) {
        for (let i = 0; i < store.getState().Products.length; i++) {
            if (store.getState().Products[i].title == value) {
                if (store.getState().Cart.includes(store.getState().Products[i])) {
                    alert('Already in your Cart!');
                } else {
                    if (document.getElementById('FooterAccountName').innerHTML !== 'Login') {
                        store.dispatch({type: 'ADD_TO_CART', product: store.getState().Products[i]});
                        alert('Added "'+ store.getState().Products[i].title +'" To the Cart!')
                    } else {
                        if (document.getElementById('FooterAccountName').innerHTML === 'Login') {
                            document.location.href = '/e-commerce/';
                        } else {
                            return (null);
                        }
                    }
                }
            }
        }
    };
    renderItems(category) {
            if (document.location.href.includes('/TV')) {
                category = 'TV';
            } else {
                if (document.location.href.includes('/Headphones')) {
                    category = 'Headphones';
                } else {
                    if (document.location.href.includes('/Phones')) {
                        category = 'Phones';
                    } else {
                        if (document.location.href.includes('/Cameras')) {
                            category = 'Cameras';
                        } else {
                            if (document.location.href.includes('/Watches')) {
                                category = 'Watches';
                            } else {
                                if (document.location.href.includes('Kitchen_Appliances')) {
                                    category = 'Kitchen_Appliances'
                                } else {
                                    category = null;
                                }
                            }
                        }
                    }
                }
            }
            if (category === 'TV') {
                return store.getState().TV.map(product => {
                    return (
                        <div className="Item" key={product.id}>
                            <Card style={{width: '18rem', height: '425px'}} id={product.id}>
                                <Card.Img variant="top" src={product.img}/>
                                <div className='BorderLine'></div>
                                <Card.Body className="CBody">
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item className='SuperItem'><Card.Title
                                            id={product.title + 'Title'}>{product.title}</Card.Title></ListGroup.Item>
                                        <Link to='/e-commerce/Category/TV/Details' id='DetailsBTN'
                                              onClick={() => ItemCreator.setModal(product.title, product.description, product.price, product.rating)}
                                              className='btn btn-outline-primary'>Details</Link>
                                        <div className="SuperDiv">
                                            <Card.Text className="iflex">
                                                ${product.price}
                                            </Card.Text>
                                            <Button className="iflex CartBTN" variant="outline-primary"
                                                    id={product.title} onClick={() => this.AddToCart(product.title)}>Add
                                                to Cart <i className="fas fa-cart-plus"></i></Button>
                                        </div>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            } else {
                if (category === 'Headphones') {
                    return store.getState().Headphones.map(product => {
                        return (
                            <div className="Item" key={product.id}>
                                <Card style={{width: '18rem', height: '425px'}} id={product.id}>
                                    <Card.Img variant="top" src={product.img}/>
                                    <div className='BorderLine'></div>
                                    <Card.Body className="CBody">
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item className='SuperItem'><Card.Title
                                                id={product.title + 'Title'}>{product.title}</Card.Title></ListGroup.Item>
                                            <Link to='/e-commerce/Category/Headphones/Details' id='DetailsBTN'
                                                  onClick={() => ItemCreator.setModal(product.title, product.description, product.price, product.rating)}
                                                  className='btn btn-outline-primary'>Details</Link>
                                            <div className="SuperDiv">
                                                <Card.Text className="iflex">
                                                    ${product.price}
                                                </Card.Text>
                                                <Button className="iflex CartBTN" variant="outline-primary"
                                                        id={product.title}
                                                        onClick={() => this.AddToCart(product.title)}>Add to Cart <i
                                                    className="fas fa-cart-plus"></i></Button>
                                            </div>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                } else {
                    if (category === 'Phones') {
                        return store.getState().Phones.map(product => {
                            return (
                                <div className="Item" key={product.id}>
                                    <Card style={{width: '18rem', height: '425px'}} id={product.id}>
                                        <Card.Img variant="top" src={product.img}/>
                                        <div className='BorderLine'></div>
                                        <Card.Body className="CBody">
                                            <ListGroup variant='flush'>
                                                <ListGroup.Item className='SuperItem'><Card.Title
                                                    id={product.title + 'Title'}>{product.title}</Card.Title></ListGroup.Item>
                                                <Link to='/e-commerce/Category/Phones/Details' id='DetailsBTN'
                                                      onClick={() => ItemCreator.setModal(product.title, product.description, product.price, product.rating)}
                                                      className='btn btn-outline-primary'>Details</Link>
                                                <div className="SuperDiv">
                                                    <Card.Text className="iflex">
                                                        ${product.price}
                                                    </Card.Text>
                                                    <Button className="iflex CartBTN" variant="outline-primary"
                                                            id={product.title}
                                                            onClick={() => this.AddToCart(product.title)}>Add to Cart <i
                                                        className="fas fa-cart-plus"></i></Button>
                                                </div>
                                            </ListGroup>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    } else {
                        if (category === 'Cameras') {
                            return store.getState().Cameras.map(product => {
                                return (
                                    <div className="Item" key={product.id}>
                                        <Card style={{width: '18rem', height: '425px'}} id={product.id}>
                                            <Card.Img variant="top" src={product.img}/>
                                            <div className='BorderLine'></div>
                                            <Card.Body className="CBody">
                                                <ListGroup variant='flush'>
                                                    <ListGroup.Item className='SuperItem'><Card.Title
                                                        id={product.title + 'Title'}>{product.title}</Card.Title></ListGroup.Item>
                                                    <Link to='/e-commerce/Category/Cameras/Details' id='DetailsBTN'
                                                          onClick={() => ItemCreator.setModal(product.title, product.description, product.price, product.rating)}
                                                          className='btn btn-outline-primary'>Details</Link>
                                                    <div className="SuperDiv">
                                                        <Card.Text className="iflex">
                                                            ${product.price}
                                                        </Card.Text>
                                                        <Button className="iflex CartBTN" variant="outline-primary"
                                                                id={product.title}
                                                                onClick={() => this.AddToCart(product.title)}>Add to
                                                            Cart <i className="fas fa-cart-plus"></i></Button>
                                                    </div>
                                                </ListGroup>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        } else {
                            if (category === 'Watches') {
                                return store.getState().Watches.map(product => {
                                    return (
                                        <div className="Item" key={product.id}>
                                            <Card style={{width: '18rem', height: '425px'}} id={product.id}>
                                                <Card.Img variant="top" src={product.img}/>
                                                <div className='BorderLine'></div>
                                                <Card.Body className="CBody">
                                                    <ListGroup variant='flush'>
                                                        <ListGroup.Item className='SuperItem'><Card.Title
                                                            id={product.title + 'Title'}>{product.title}</Card.Title></ListGroup.Item>
                                                        <Link to='/e-commerce/Category/Watches/Details' id='DetailsBTN'
                                                              onClick={() => ItemCreator.setModal(product.title, product.description, product.price, product.rating)}
                                                              className='btn btn-outline-primary'>Details</Link>
                                                        <div className="SuperDiv">
                                                            <Card.Text className="iflex">
                                                                ${product.price}
                                                            </Card.Text>
                                                            <Button className="iflex CartBTN" variant="outline-primary"
                                                                    id={product.title}
                                                                    onClick={() => this.AddToCart(product.title)}>Add to
                                                                Cart <i className="fas fa-cart-plus"></i></Button>
                                                        </div>
                                                    </ListGroup>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    )
                                })
                            } else {
                                if (category === 'Kitchen_Appliances') {
                                    return store.getState().Kitchen_Appliances.map(product => {
                                        return (
                                            <div className="Item" key={product.id}>
                                                <Card style={{width: '18rem', height: '425px'}} id={product.id}>
                                                    <Card.Img variant="top" src={product.img}/>
                                                    <div className='BorderLine'></div>
                                                    <Card.Body className="CBody">
                                                        <ListGroup variant='flush'>
                                                            <ListGroup.Item className='SuperItem'><Card.Title
                                                                id={product.title + 'Title'}>{product.title}</Card.Title></ListGroup.Item>
                                                            <Link to='/e-commerce/Category/Kitchen_Appliances/Details' id='DetailsBTN'
                                                                  onClick={() => ItemCreator.setModal(product.title, product.description, product.price, product.rating)}
                                                                  className='btn btn-outline-primary'>Details</Link>
                                                            <div className="SuperDiv">
                                                                <Card.Text className="iflex">
                                                                    ${product.price}
                                                                </Card.Text>
                                                                <Button className="iflex CartBTN"
                                                                        variant="outline-primary" id={product.title}
                                                                        onClick={() => this.AddToCart(product.title)}>Add
                                                                    to Cart <i
                                                                        className="fas fa-cart-plus"></i></Button>
                                                            </div>
                                                        </ListGroup>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        )
                                    })
                                } else {
                                    return (null);
                                }
                            }
                        }
                    }
                }
            }
    };
    render() {
        return(
            this.renderItems()
        );
    }
}
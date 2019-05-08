import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import store from './store';

import { Link } from 'react-router-dom';


let TV = [];
let Headphones = [];
let Phones = [];
let Cameras = [];
let Watches = [];
let Kitchen_Appliances = [];


export class ItemCreator extends Component {

    state = {
        Products: [],
        TV: TV,
        Headphones: Headphones,
        Phones: Phones,
        Cameras: Cameras,
        Watches: Watches,
        Kitchen_Appliances: Kitchen_Appliances,

    };
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

    static AddToCart(value) {
        for (let i = 0; i < store.getState().Products.length; i++) {
            if (store.getState().Products[i].title === value) {
                store.dispatch({type: 'ADD_TO_CART', product: store.getState().Products[i]})
            }
        }
        //store.dispatch({type: 'ADD_TO_CART', });
        //console.log(store.getState());
    };
    renderItems() {
        this.itemPusher();
        //store.dispatch(this.state);
        return store.getState().Products.map(product => {
            return(
                <div className="Item" key={product.id}>
                <Card style={{ width: '18rem', height: '425px'}} id={product.id}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body className="CBody">
                        <Card.Title id={product.title + 'Title'}>{product.title}</Card.Title>
                        <Link to='Details' id='DetailsBTN' onClick={() => ItemCreator.setModal(product.title, product.description, product.price, product.rating)} className='btn btn-primary'>Details</Link>


                        <div className="SuperDiv">
                        <Card.Text className="iflex">
                            ${product.price}
                        </Card.Text>
                        <Button className="iflex CartBTN" variant="primary" id={product.title} onClick={() => ItemCreator.AddToCart(product.title)}>Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
                </div>
            )
        })
    };

    itemPusher() {
        TV = [];
        Headphones = [];
        Phones = [];
        Cameras = [];
        Watches = [];
        Kitchen_Appliances = [];
        for (let i = 0; i < store.getState().Products.length; i++) {
            if (store.getState().Products[i].category === 'tv') {
                TV.push(store.getState().Products[i]);
            } else {
                if (store.getState().Products[i].category === 'headphones') {
                    Headphones.push(store.getState().Products[i]);
                } else {
                    if (store.getState().Products[i].category === 'phone') {
                        Phones.push(store.getState().Products[i]);
                    } else {
                        if (store.getState().Products[i].category === 'action-camera') {
                            Cameras.push(store.getState().Products[i]);
                        } else {
                            if (store.getState().Products[i].category === 'watch') {
                                Watches.push(store.getState().Products[i]);
                            } else {
                                if (store.getState().Products[i].category === 'small-appliance') {
                                    Kitchen_Appliances.push(store.getState().Products[i]);
                                } else {
                                    if (store.getState().Products[i].category === 'refrigerator') {
                                        Kitchen_Appliances.push(store.getState().Products[i]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        //
    }
    render() {

        return(
                this.renderItems()
        );
    }
}

export class ItemFilter extends Component {
    state = {
        Products: [],
        TV: TV,
        Headphones: Headphones,
        Phones: Phones,
        Cameras: Cameras,
        Watches: Watches,
        Kitchen_Appliances: Kitchen_Appliances,

    };

    AddToCart(value) {
        for (let i = 0; i < store.getState().Products.length; i++) {
            if (store.getState().Products[i].title === value) {
                store.dispatch({type: 'ADD_TO_CART', product: store.getState().Products[i]})
            }
        }
        //store.dispatch({type: 'ADD_TO_CART', });
        //console.log(store.getState());
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
                return this.state.TV.map(product => {
                                return(
                <div className="Item" key={product.id}>
                <Card style={{ width: '18rem', height: '425px'}} id={product.id}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body className="CBody">
                        <Card.Title id={product.title + 'Title'}>{product.title}</Card.Title>
                        <Link to='Details' onClick={() => ItemCreator.setModal(product.title, product.description, product.price, product.rating)} className='btn btn-primary'>Details</Link>

                        <Card.Text className="Rating"><i className="fas fa-star"></i> {product.rating}</Card.Text>
                        <div className="SuperDiv">
                        <Card.Text className="iflex">
                            ${product.price}
                        </Card.Text>
                        <Button className="iflex CartBTN" variant="primary" id={product.title} onClick={() => ItemCreator.AddToCart(product.title)}>Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
                </div>
            )
                })
            } else {
                if (category === 'Headphones') {
                    return this.state.Headphones.map(product => {
                                    return(
                <div className="Item" key={product.id}>
                <Card style={{ width: '18rem', height: '425px'}} id={product.id}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body className="CBody">
                        <Card.Title id={product.title + 'Title'}>{product.title}</Card.Title>
                        <Link to='Details' id='DetailsBTN' onClick={() => ItemCreator.setModal(product.title, product.description, product.price, product.rating)} className='btn btn-primary'>Details</Link>


                        <div className="SuperDiv">
                        <Card.Text className="iflex">
                            ${product.price}
                        </Card.Text>
                        <Button className="iflex CartBTN" variant="primary" id={product.title} onClick={() => ItemCreator.AddToCart(product.title)}>Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
                </div>
            )
                    })
                } else {
                    if (category === 'Phones') {
                        return this.state.Phones.map(product => {
                                        return(
                <div className="Item" key={product.id}>
                <Card style={{ width: '18rem', height: '425px'}} id={product.id}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body className="CBody">
                        <Card.Title id={product.title + 'Title'}>{product.title}</Card.Title>
                        <Link to='Details' id='DetailsBTN' onClick={() => ItemCreator.setModal(product.title, product.description, product.price, product.rating)} className='btn btn-primary'>Details</Link>
                        <div className="SuperDiv">
                        <Card.Text className="iflex">
                            ${product.price}
                        </Card.Text>
                        <Button className="iflex CartBTN" variant="primary" id={product.title} onClick={() => ItemCreator.AddToCart(product.title)}>Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
                </div>
            )
                        })
                    } else {
                        if (category === 'Cameras') {
                            return this.state.Cameras.map(product => {
                                            return(
                <div className="Item" key={product.id}>
                <Card style={{ width: '18rem', height: '425px'}} id={product.id}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body className="CBody">
                        <Card.Title id={product.title + 'Title'}>{product.title}</Card.Title>
                        <Link to='Details' id='DetailsBTN' onClick={() => ItemCreator.setModal(product.title, product.description, product.price, product.rating)} className='btn btn-primary'>Details</Link>
                        <div className="SuperDiv">
                        <Card.Text className="iflex">
                            ${product.price}
                        </Card.Text>
                        <Button className="iflex CartBTN" variant="primary" id={product.title} onClick={() => ItemCreator.AddToCart(product.title)}>Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
                </div>
            )
                            })
                        } else {
                            if (category === 'Watches') {
                                return this.state.Watches.map(product => {
                                                return(
                <div className="Item" key={product.id}>
                <Card style={{ width: '18rem', height: '425px'}} id={product.id}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body className="CBody">
                        <Card.Title id={product.title + 'Title'}>{product.title}</Card.Title>
                        <Link to='Details' id='DetailsBTN' onClick={() => ItemCreator.setModal(product.title, product.description, product.price, product.rating)} className='btn btn-primary'>Details</Link>
                        <div className="SuperDiv">
                        <Card.Text className="iflex">
                            ${product.price}
                        </Card.Text>
                        <Button className="iflex CartBTN" variant="primary" id={product.title} onClick={() => ItemCreator.AddToCart(product.title)}>Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
                </div>
            )
                                })
                            } else {
                                if (category === 'Kitchen_Appliances') {
                                    return this.state.Kitchen_Appliances.map(product => {
                                        return(
                                            <div className="Item" key={product.id}>
                                                <Card style={{ width: '18rem', height: '425px'}} id={product.id}>
                                                    <Card.Img variant="top" src={product.img} />
                                                    <Card.Body className="CBody">
                                                        <Card.Title id={product.title + 'Title'}>{product.title}</Card.Title>
                                                        <Link to='Details' id='DetailsBTN' onClick={() => ItemCreator.setModal(product.title, product.description, product.price, product.rating)} className='btn btn-primary'>Details</Link>
                                                        <div className="SuperDiv">
                                                            <Card.Text className="iflex">
                                                                ${product.price}
                                                            </Card.Text>
                                                            <Button className="iflex CartBTN" variant="primary" id={product.title} onClick={() => ItemCreator.AddToCart(product.title)}>Add to Cart</Button>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        )
                                    })
                                } else {
                                    return(null);
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

import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {ItemCreator} from "./ItemCreator"
import RedirectJS from './RedirectJS';
//import { BrowserRouter as Router, Route, Link, Switch } from  'react-router-dom';
import { HashRouter as Router, Route, Link, Switch } from  'react-router-dom';
import {ItemFilter} from './ItemCreator';
import {Cart} from './Cart';
import store from './store';
import {DetailsModal} from "./DetailsModal";
import {Login} from './Login';
let TV = [];
let Headphones = [];
let Phones = [];
let Cameras = [];
let Watches = [];
let Kitchen_Appliances = [];
class App extends Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
        fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
            .then((response) => {
                return response.json();
            })
            .then((items) => {
                store.dispatch({type: 'SET_PRODUCTS', items: items});
                this.itemPusher();
            });
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
        //dispatches
        store.dispatch({type: 'TV', TV: TV });
        store.dispatch({type: 'Headphones', Headphones: Headphones });
        store.dispatch({type: 'Phones', Phones: Phones });
        store.dispatch({type: 'Cameras', Cameras: Cameras });
        store.dispatch({type: 'Watches', Watches: Watches });
        store.dispatch({type: 'Kitchen_Appliances', Kitchen_Appliances: Kitchen_Appliances });
    }
    render() {
        return (
            <div className="Main">
                <Router>
                <Navbar bg="light" expand="lg" sticky="top">
                    <Link className="navbar-brand" to="/e-commerce/Store">E-Commerce Template</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className='nav-link' to="/e-commerce/Store">Store</Link>
                            <NavDropdown title="Categories" id="basic-nav-dropdown">
                                <Link className='dropdown-item' to="/e-commerce/Category/TV" key='TV'>TV</Link>
                                <Link className='dropdown-item' to="/e-commerce/Category/Headphones" key='Headphones'>Headphones</Link>
                                <Link className='dropdown-item' to="/e-commerce/Category/Phones">Phones</Link>
                                <Link className='dropdown-item' to="/e-commerce/Category/Cameras">Cameras</Link>
                                <Link className='dropdown-item' to="/e-commerce/Category/Watches">Watches</Link>
                                <Link className='dropdown-item' to="/e-commerce/Category/Kitchen_Appliances">Kitchen Appliances</Link>
                            </NavDropdown>
                        </Nav>
                        <Link className='nav-link' to="/e-commerce/Cart">Cart <i className="fas fa-shopping-cart"></i></Link>
                    </Navbar.Collapse>
                </Navbar>
                    <div className="Switcher">
                        <Switch>
                            <Route exact path="/" render={() => (<div className="Items"><Login /></div>)}/>
                            <Route exact path="/#/e-commerce/" render={() => (<div className="Items"><Login /></div>)}/>
                            <Route exact path="/e-commerce/" render={() => (<div className="Items"><Login /></div>)}/>
                            <Route exact path="/e-commerce/Store" render={() => (<div className="Items"><ItemCreator /></div>)}/>
                            <Route exact path="/e-commerce/Category/TV" render={() => (<div className="Items"><ItemFilter /></div>)} />
                            <Route exact path="/e-commerce/Category/Headphones" render={() => (<div className="Items"><ItemFilter /></div>)} />
                            <Route exact path="/e-commerce/Category/Phones" render={() => (<div className="Items"><ItemFilter /></div>)} />
                            <Route exact path="/e-commerce/Category/Cameras" render={() => (<div className="Items"><ItemFilter /></div>)} />
                            <Route exact path="/e-commerce/Category/Watches" render={() => (<div className="Items"><ItemFilter /></div>)} />
                            <Route exact path="/e-commerce/Category/Kitchen_Appliances" render={() => (<div className="Items"><ItemFilter /></div>)} />
                            <Route exact path="/e-commerce/Category/TV/Details" render={() => (<div className="Items"><ItemFilter /><DetailsModal /></div>)} />
                            <Route exact path="/e-commerce/Category/Headphones/Details" render={() => (<div className="Items"><ItemFilter /><DetailsModal /></div>)} />
                            <Route exact path="/e-commerce/Category/Phones/Details" render={() => (<div className="Items"><ItemFilter /><DetailsModal /></div>)} />
                            <Route exact path="/e-commerce/Category/Cameras/Details" render={() => (<div className="Items"><ItemFilter /><DetailsModal /></div>)} />
                            <Route exact path="/e-commerce/Category/Watches/Details" render={() => (<div className="Items"><ItemFilter /><DetailsModal /></div>)} />
                            <Route exact path="/e-commerce/Category/Kitchen_Appliances/Details" render={() => (<div className="Items"><ItemFilter /><DetailsModal /></div>)} />
                            <Route exact path="/e-commerce/Cart"  render={() => (<div className="Items"><Cart /> </div>)} />
                            <Route  path="/e-commerce/Store/Details" render={() => (<div className="Items"><ItemCreator /><DetailsModal /></div>)} />
                            <Route path="/RedirectJS" component={RedirectJS} />
                            <Route render={() => (<div><RedirectJS /></div>)} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}
export default App;
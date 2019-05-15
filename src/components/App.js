import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {ItemCreator} from "./ItemCreator"
import RedirectJS from './RedirectJS';
import { BrowserRouter as Router, Route, Link, Switch } from  'react-router-dom';
import {ItemFilter} from './ItemCreator';
import {Cart} from './Cart';
import store from './store';
import {DetailsModal} from "./DetailsModal";
import {Login} from './Login';
class App extends Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
        fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
            .then((response) => {
                return response.json();
            })
            .then((items) => {
                store.dispatch({type: 'SET_PRODUCTS', items: items})
            });
    };
    render() {
        return (
            <div className="Main">
                <Router>
                <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand to="/e-commerce/" href='/e-commerce/'>E-Commerce Template</Navbar.Brand>
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
                            <Route exact path="/e-commerce" render={() => (<div className="Items"><Login /></div>)}/>
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
                            <Route path="/company/page" render={() => (<div>Page</div>)}/>
                            <Route exact path="/e-commerce/Details" render={() => (<div className="Items"><ItemCreator /><DetailsModal /></div>)} />
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
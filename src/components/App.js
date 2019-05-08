import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {ItemCreator} from "./ItemCreator"
import RedirectJS from './RedirectJS';
import { BrowserRouter as Router, Route, Link } from  'react-router-dom';
import { Switch } from "react-router-dom";
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
                    <Navbar.Brand to="/">E-Commerce Template</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className='nav-link' to="/Store">Store</Link>
                            <NavDropdown title="Categories" id="basic-nav-dropdown">
                                <Link className='dropdown-item' to="/Category/TV/" key='TV'>TV</Link>
                                <Link className='dropdown-item' to="/Category/Headphones/" key='Headphones'>Headphones</Link>
                                <Link className='dropdown-item' to="/Category/Phones/">Phones</Link>
                                <Link className='dropdown-item' to="/Category/Cameras/">Cameras</Link>
                                <Link className='dropdown-item' to="/Category/Watches/">Watches</Link>
                                <Link className='dropdown-item' to="/Category/Kitchen_Appliances/">Kitchen Appliances</Link>
                            </NavDropdown>
                        </Nav>
                        <Link className='nav-link' to="/Cart">Cart <i className="fas fa-shopping-cart"></i></Link>
                    </Navbar.Collapse>
                </Navbar>
                    <div className="Switcher">
                        <Switch>
                            <Route exact path="/" render={() => (<div className="Items"><Login /></div>)}/>
                            <Route exact path="/Store" render={() => (<div className="Items"><ItemCreator /></div>)}/>
                            <Route exact path="/Category/TV/" render={() => (<div className="Items"><ItemFilter /></div>)} />
                            <Route exact path="/Category/Headphones/" render={() => (<div className="Items"><ItemFilter /></div>)} />
                            <Route exact path="/Category/Phones/" render={() => (<div className="Items"><ItemFilter /></div>)} />
                            <Route exact path="/Category/Cameras/" render={() => (<div className="Items"><ItemFilter /></div>)} />
                            <Route exact path="/Category/Watches/" render={() => (<div className="Items"><ItemFilter /></div>)} />
                            <Route exact path="/Category/Kitchen_Appliances/" render={() => (<div className="Items"><ItemFilter /></div>)} />
                            <Route exact path="/Category/TV/Details" render={() => (<div className="Items"><ItemFilter /><DetailsModal /></div>)} />
                            <Route exact path="/Category/Headphones/Details" render={() => (<div className="Items"><ItemFilter /><DetailsModal /></div>)} />
                            <Route exact path="/Category/Phones/Details" render={() => (<div className="Items"><ItemFilter /><DetailsModal /></div>)} />
                            <Route exact path="/Category/Cameras/Details" render={() => (<div className="Items"><ItemFilter /><DetailsModal /></div>)} />
                            <Route exact path="/Category/Watches/Details" render={() => (<div className="Items"><ItemFilter /><DetailsModal /></div>)} />
                            <Route exact path="/Category/Kitchen_Appliances/Details" render={() => (<div className="Items"><ItemFilter /><DetailsModal /></div>)} />
                            <Route exact path="/Cart"  render={() => (<div className="Items"><Cart /> </div>)} />
                            <Route path="/company/page" render={() => (<div>Page</div>)}/>
                            <Route exact path="/Details" render={() => (<div className="Items"><ItemCreator /><DetailsModal /></div>)} />
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
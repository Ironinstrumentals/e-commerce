import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {ItemCreator} from "./ItemCreator"
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import CardColumns from "react-bootstrap/CardColumns";
import RedirectJS from './RedirectJS';
import {
    BrowserRouter as Router,
    Route,
    Link
} from  'react-router-dom';
import { Switch } from "react-router-dom";
import Card from "react-bootstrap/Card";

class App extends Component {
    state = {
        Products: [],
    };
    renderItems() {
        return this.state.Products.map(product => {
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
                                <Button className="iflex" variant="primary" id={product.title} >Add to Cart</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            )
        })
    };
    componentDidMount() {
        fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
            .then((response) => {
                return response.json();
            })
            .then((items) => {
                this.setState({
                    Products: items
                });
                //console.log(this.state.Products)
            });
    }
    render() {
        return (
            <div className="Main">
                <Router>
                <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand to="Home">E-Commerce Template</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <Link className='nav-link' to="/Home">Home</Link>
                            {/*<Link className='nav-link' to="/Cart">Cart</Link>*/}
                            <NavDropdown title="Categories" id="basic-nav-dropdown">
                                <Link className='dropdown-item' to="/Category/TV" key='TV'>TV</Link>
                                <Link className='dropdown-item' to="/Category/Headphones" key='Headphones'>Headphones</Link>
                                <Link className='dropdown-item' to="/Category/Phones">Phones</Link>
                                <Link className='dropdown-item' to="/Category/Cameras">Cameras</Link>
                                <Link className='dropdown-item' to="/Category/Watches">Watches</Link>
                                <Link className='dropdown-item' to="/Category/Kitchen_Appliances">Kitchen Appliances</Link>
                            </NavDropdown>

                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" id="filter"/>
                            <Router>
                            <Link to={'/Filter/' + this.innerText}><Button variant="outline-primary">Search</Button></Link>
                            </Router>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

                    <div className="Switcher">
                <Switch>
                    <Route exact path="/" render={() => (<div className="Items"><ItemCreator /></div>)}/>
                    <Route exact path="/Home" render={() => (<div className="Items"><ItemCreator /></div>)}/>
                    <Route exact path="/Category/TV" render={() => (<div>Category: TV</div>)} />
                    <Route exact path="/Category/Headphones" render={() => (<div>Category: Headphones</div>)} />
                    <Route exact path="/Category/Phones" render={() => (<div>Category: Phones</div>)} />
                    <Route exact path="/Category/Cameras" render={() => (<div>Category: Cameras</div>)} />
                    <Route exact path="/Category/Watchess" render={() => (<div>Category: Watches</div>)} />
                    <Route exact path="/Category/Kitchen_Appliances" render={() => (<div>Category: Kitchen Appliances</div>)} />
                    {/*<Route exact path="/Cart"  component={Cart} />*/}
                    <Route path="/company/page" render={() => (<div>Page</div>)}/>

                    <Route path="/RedirectJS" component={RedirectJS} />
                    <Route render={() => ( //ALWAYS PUT THIS LAST
                        <div><h3>ERROR 404: Not Found</h3>
                            <RedirectJS />
                        </div>

                    )} />
                </Switch>
                    </div>
            </Router>
            </div>
        );
    }
}

export default App;

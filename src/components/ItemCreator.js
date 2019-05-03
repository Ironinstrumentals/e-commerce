import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import store from './store';

let Filtered = [];
let TV = [];
let Headphones = [];
let Phones = [];
let Cameras = [];
let Watches = [];
let Kitchen_Appliances = [];
let Cart = [];

export class ItemCreator extends Component {

    state = {
        Products: [],
        Filtered: Filtered,
        TV: TV,
        Headphones: Headphones,
        Phones: Phones,
        Cameras: Cameras,
        Watches: Watches,
        Kitchen_Appliances: Kitchen_Appliances,
        Cart: Cart,
    };

    renderItems() {
        this.itemPusher();
        //store.dispatch(this.state);
        return this.state.Products.map(product => {
            return(
                <div className="Item" key={product.id} id={product.title}>
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
                        <Button className="iflex" variant="primary" >Add to Cart</Button>
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
            });


    };
    itemPusher() {
        TV = [];
        Headphones = [];
        Phones = [];
        Cameras = [];
        Watches = [];
        Kitchen_Appliances = [];
        for (let i = 0; i < this.state.Products.length; i++) {
            if (this.state.Products[i].category === 'tv') {
                TV.push(this.state.Products[i]);
                console.log(TV)
            } else {
                if (this.state.Products[i].category === 'headphones') {
                    Headphones.push(this.state.Products[i]);
                    console.log(Headphones)
                } else {
                    if (this.state.Products[i].category === 'phone') {
                        Phones.push(this.state.Products[i]);
                        console.log(Phones)
                    } else {
                        if (this.state.Products[i].category === 'action-camera') {
                            Cameras.push(this.state.Products[i]);
                            console.log(Cameras)
                        } else {
                            if (this.state.Products[i].category === 'watch') {
                                Watches.push(this.state.Products[i]);
                                console.log(Watches);
                            } else {
                                if (this.state.Products[i].category === 'small-appliance') {
                                    Kitchen_Appliances.push(this.state.Products[i]);
                                    console.log(Kitchen_Appliances);
                                } else {
                                    if (this.state.Products[i].category === 'refrigerator') {
                                        Kitchen_Appliances.push(this.state.Products[i]);
                                        console.log(Kitchen_Appliances);
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
        Filtered: Filtered,
        TV: TV,
        Headphones: Headphones,
        Phones: Phones,
        Cameras: Cameras,
        Watches: Watches,
        Kitchen_Appliances: Kitchen_Appliances,
        Cart: Cart,
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

            if ([category] == 'TV') {
                return this.state.TV.map(product => {
                    return(
                        <div className="Item" key={product.id} id={product.title}>
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
                                        <Button className="iflex" variant="primary" >Add to Cart</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            } else {
                if ([category] == 'Headphones') {
                    return this.state.Headphones.map(product => {
                        return(
                            <div className="Item" key={product.id} id={product.title}>
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
                                            <Button className="iflex" variant="primary" >Add to Cart</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                } else {
                    if ([category] == 'Phones') {
                        return this.state.Phones.map(product => {
                            return(
                                <div className="Item" key={product.id} id={product.title}>
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
                                                <Button className="iflex" variant="primary" >Add to Cart</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    } else {
                        if ([category] == 'Cameras') {
                            return this.state.Cameras.map(product => {
                                return(
                                    <div className="Item" key={product.id} id={product.title}>
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
                                                    <Button className="iflex" variant="primary" >Add to Cart</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        } else {
                            if ([category] == 'Watches') {
                                return this.state.Watches.map(product => {
                                    return(
                                        <div className="Item" key={product.id} id={product.title}>
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
                                                        <Button className="iflex" variant="primary" >Add to Cart</Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    )
                                })
                            } else {
                                if ([category] == 'Kitchen_Appliances') {
                                    return this.state.Kitchen_Appliances.map(product => {
                                        return(
                                            <div className="Item" key={product.id} id={product.title}>
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
                                                            <Button className="iflex" variant="primary" >Add to Cart</Button>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        )
                                    })
                                } else {

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

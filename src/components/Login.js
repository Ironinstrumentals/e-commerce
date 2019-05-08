import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import store from './store';
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

export class Login extends Component {
    renderLogin() {
        if (document.getElementById('FooterAccountName').innerHTML === 'Login') {
            return (
                <Card className='loginCard'>
                    <Card.Header className='navLogin'>
                        <Nav variant="tabs" defaultActiveKey="#Login" className='navLogin'>
                            <Nav.Item>
                                <Nav.Link href="#Login">Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#NewAccount">Create Account</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body className='loginBody'>
                        <Form>
                            <Card.Title>Username:</Card.Title>
                            <Card.Text>
                                <input className='loginInput usernameInput' id='usernameInput' />
                            </Card.Text>
                            <Card.Title>Password:</Card.Title>
                            <Card.Text>
                                <input className='loginInput passwordInput' id='passwordInput' type='password'/>
                            </Card.Text>
                            <Link to='/Store' className='btn btn-outline-primary' onClick={() => this.setAccount()}>Submit</Link>
                        </Form>
                    </Card.Body>
                </Card>
            )
        } else {
            document.location.href = '/Store';
        }
    }
    setAccount() {
        let username = document.getElementById('usernameInput').value;
        store.dispatch({type: 'ACCOUNT_NAME', username});
        document.getElementById('FooterAccountName').innerHTML = 'Logout from: ' + store.getState().UserName;
        document.getElementById('FooterAccountName').setAttribute('href', '/');

    }
    render() {
        return(
            this.renderLogin()
        )
    }
}
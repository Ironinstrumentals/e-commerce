import React, { Component } from 'react';
import store from './store';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';


export class DetailsModal extends Component {
    state = {
        show: store.getState().Show,
    };

    AddToCart(value) {
        for (let i = 0; i < store.getState().Products.length; i++) {
            if (store.getState().Products[i].title == value) {
                store.dispatch({type: 'ADD_TO_CART', product: store.getState().Products[i]});
            }
        }

    };
    handleClose() {
        let modal = false;
        store.dispatch({type: 'MODAL', modal});
    }

    renderModal() {

        return (
            <Modal className='Modalio' show={this.state.show} onHide={() => this.handleClose()}>
                    <Modal.Header>
                        <Modal.Title>{store.getState().Title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>{store.getState().Description}</p>
                        <p><i className="fas fa-star"></i>{store.getState().Rating}</p>
                    </Modal.Body>

                    <Modal.Footer className='MdFooter'>
                        <div className='ModalPrice'>${store.getState().Price}</div>
                        <Button variant='primary' className='ModalBTN' id='ModalCart' onClick={() => this.AddToCart(store.getState().Title)}>Add to Cart</Button>
                        <Button variant='secondary' className='ModalBTN' id='ModalClose' onClick={() => window.history.back()}>X</Button>
                    </Modal.Footer>

            </Modal>
        )
    }
    render() {
        return(
            this.renderModal()
        )
    }
}

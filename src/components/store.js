//import React from 'react';
import { createStore } from 'redux';

const defaultState = {
    Cart: [],
    Products: []
};

function reducer(state, action){
    if (action.type === 'ADD_TO_CART') {
        const a = [...state.Cart];
        a.push(action.product);
        return {
            ...state,
            Cart: a
        }
    } else if (action.type === 'SET_PRODUCTS') {
        return {
            ...state,
            Products: action.items
        }
    } else if (action.type === 'ITEM_TITLE') {
        const a = [];
        a.push(action.title);
        return {
            ...state,
            Title: a
        }
    } else if (action.type === 'ITEM_DESCRIPTION') {
        const a = [];
        a.push(action.description);
        return {
            ...state,
            Description: a
        }
    } else if (action.type === 'MODAL') {
        let a = false;
        a = action.modal;
        return {
            ...state,
            Show: a
        }
    } else if (action.type === 'ITEM_PRICE') {
        const a = [];
        a.push(action.price);
        return {
            ...state,
            Price: a
        }
    } else if (action.type === 'ITEM_RATING') {
        const a = [];
        a.push(action.rating);
        return {
            ...state,
            Rating: a
        }
    }
    else if (action.type === 'TV') {
        return {
            ...state,
            TV: action.TV
        }
    }
    else if (action.type === 'Headphones') {
        return {
            ...state,
            Headphones: action.Headphones
        }
    }
    else if (action.type === 'Phones') {
        return {
            ...state,
            Phones: action.Phones
        }
    }
    else if (action.type === 'Cameras') {
        return {
            ...state,
            Cameras: action.Cameras
        }
    }
    else if (action.type === 'Watches') {
        return {
            ...state,
            Watches: action.Watches
        }
    }
    else if (action.type === 'Kitchen_Appliances') {
        return {
            ...state,
            Kitchen_Appliances: action.Kitchen_Appliances
        }
    }
    else {
        return state;
    }
}

const store = createStore(reducer, defaultState);
export default store;
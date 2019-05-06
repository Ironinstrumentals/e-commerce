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
    } else if (action.type === 'ITEM_DETAILS') {
        const a = [];
        a.push(action.item);
        return {
            Item: a
        }
    }
    else {
        return state;
    }
}

const store = createStore(reducer, defaultState);
export default store;
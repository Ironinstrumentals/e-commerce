import React from 'react';
import { createStore } from 'redux';

const defaultState = {
    Products: null,
    Filtered: null,
    TV: null,
    Headphones: null,
    Phones: null,
    Cameras: null,
    Watches: null,
    Kitchen_Appliances: null,
    Cart: null
};

function reducer(state, action){
    if (action.type === 'Filter') {
        return state;
    }
}

const store = createStore(reducer);
export default store;
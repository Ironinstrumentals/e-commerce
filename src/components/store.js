function createStore(reducer) {
    fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
        .then((response) => {
            return response.json();
        })
        .then((items) => {
            this.setState({
                Products: items
            });
            console.log(this.state.Products)
        });

    const listeners = [];

    const subscribe = (listener) => {
        listeners.push(listener)
    };

    const getState = () => (state);

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(l => l())
    };

    return {
        subscribe,
        getState,
        dispatch
    }
}

function reducer(state, action) {

}

const store = createStore(reducer);

export default store
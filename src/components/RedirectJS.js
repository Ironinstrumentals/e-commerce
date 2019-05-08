import React from 'react';
import { Redirect } from 'react-router-dom';
class RedirectJS extends React.Component {
    state = {
        counter: 5,
    };
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => {
                return {
                    counter: prevState.counter - 1
                }
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div className='Redirect'>
                <div>
                    <h3>ERROR 404: Not Found.</h3>
                    <p>Redirecting in {this.state.counter}...</p>
                    {
                        (this.state.counter < 1 ? (
                                <Redirect to="/" />
                            ) : null
                        )
                    }
                </div>
            </div>
        );
    }
}
export default RedirectJS;
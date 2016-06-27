import React, {Component} from 'react'
import config from './config.json';

// Top level component
class MyComponent extends Component{
    render() {
        return (
            <div>
                {config.greetText}
            </div>
    );
    }
}

export default MyComponent
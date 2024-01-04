import React, { Fragment } from "react";
import { render } from "react-dom";

import './app.scss';

import img from '../assets/react.png';

class App extends React.Component {
    render() {
        return <img src={img}></img>;
    }
}

render(<App />, document.getElementById('root'));
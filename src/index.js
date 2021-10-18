import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "./context/context.js"
import App from './App';
import "./styles/index.css"

const reactContentRoot = document.getElementById("root")

ReactDOM.render(<Provider>
                    <App />
                </Provider>, reactContentRoot)

/**
 * Created by Dylanwoo on 2017/11/15.
 */

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './container/main'
import todoApp from './reducers'

let store = createStore(todoApp);

let rootElement = document.getElementById('root');
render(
    <Provider store={ store }>
        <App />
    </Provider>,
    rootElement
);
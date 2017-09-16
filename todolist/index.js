/**
 * Created by Dylanwoo on 2017/9/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Todo />,app);
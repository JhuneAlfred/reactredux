// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import C from './constants'
import { goal } from './store/reducers'

const state = 10

const action = {
    type: C.SET_GOAL,
    payload: 15
}

const nextState = goal(state, action)

console.log(`
    initial goal: ${state}
    action: ${JSON.stringify(action)}
    new goal: ${nextState}
`)
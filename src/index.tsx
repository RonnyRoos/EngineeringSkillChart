import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import EngineeringSkills from './EngineeringSkills/EngineeringSkills';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className='content'>
        <Switch>
          <Route exact path='/' component={EngineeringSkills} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

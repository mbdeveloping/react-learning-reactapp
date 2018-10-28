import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const desc = 'I jus learned how to create a react node and render into the DOM.';
const myTitleId = 'min-title';
const name = 'Mantvydas';

  const header = (
      <header>
      {/* Comment in JSX */}
          <h1 id={myTitleId}>{name} First React Element!</h1>
          <p className="main-desc">{desc}</p>
      </header>
  );

ReactDOM.render(
    header, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

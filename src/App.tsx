import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ioHook from 'iohook';
import icon from '../assets/icon.svg';
import './App.global.css';

// const ioHook = require('iohook');
// const robot = require('robotjs');

// console.log('robot :>> ', robot);
console.log('main  iohook :>> ', ioHook);

// ioHook.on('mousemove', (event: any) => {
//   console.log(event); // { type: 'mousemove', x: 700, y: 400 }
// });

// ioHook.start();

// try {
// } catch (error) {
//   console.log('error :>> ', error);
// }

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}

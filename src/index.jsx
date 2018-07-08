// @flow

// react modules
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// root component
import Root from "./components/Root";

function importAllFromDir (r) {
  r.keys().forEach(r);
}

// styles
importAllFromDir(require.context('./styles/', true, /\.scss$/));

const root =  document.getElementById('root');
if (root !== null) {
  ReactDOM.render(<Root />, root)
}

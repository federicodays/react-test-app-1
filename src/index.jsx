// react modules
import React from 'react';
import ReactDOM from 'react-dom';

// root component
import Root from "./components/Root";

function importAllFromDir (r) {
  r.keys().forEach(r);
}

// styles
importAllFromDir(require.context('./styles/', true, /\.scss$/));

ReactDOM.render(<Root />, document.getElementById('root'));
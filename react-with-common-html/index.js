'use strict';

const e = React.createElement;

class App extends React.Component {

  render() {
    return e('header', null, 'Learn React');
  }
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        This is the Content
        <Footer />
      </div>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import '../styles/App.scss';
import LanesSideBarContainer from '../../lanes/containers/LanesSideBarContainer.jsx';
import Nav from './Nav.jsx';
import SecondNav from './SecondNav.jsx';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <div className="app-header">
            <Nav />
            <SecondNav />
          </div>
          <div className="app-main">
            <div className="sidebar">
              <LanesSideBarContainer />
            </div>
            <div className="body">
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

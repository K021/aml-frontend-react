import React, { Component } from 'react';
import styles from './styles.module.scss';

import Header from 'components/Header';
import Nav from 'components/Nav';
import Board from 'components/Board';
import RightPane from 'components/RightPane';


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles.body}>
          <Nav />
          <Board />
          <RightPane />
        </div>
      </>
    );
  }
}

export default App;

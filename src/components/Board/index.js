import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import store, { history } from 'redux/configureStore';

import urls from 'variables/urls';
import Dashboard from 'components/Dashboard';
import NewBoard from 'components/NewBoard';
import NewInstance from 'components/NewInstance';
import styles from './styles.module.scss';


class Board extends Component {
  render() {
    console.log('board getState', store.getState());
    console.log('board history', history);

    return (
      <div className={styles.board}>
        <Switch>
          <Route exact path={urls.urlHome} component={Dashboard}/>
          <Route exact path={urls.urlNew} component={NewBoard}/>
          <Route exact path={urls.urlNewInstance} component={NewInstance}/>
        </Switch>
      </div>
    );
  }
}


export default Board;

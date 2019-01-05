import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { urlHome, urlNew } from 'variables/urls';
import Dashboard from 'components/Dashboard';
import NewBoard from 'components/NewBoard';
import styles from './styles.module.scss';


class Board extends Component {
  render() {
    return (
      <div className={styles.board}>
        <Switch>
          <Route exact path={urlHome} component={Dashboard}/>
          <Route exact path={urlNew} component={NewBoard}/>
        </Switch>
      </div>
    );
  }
}


export default Board;

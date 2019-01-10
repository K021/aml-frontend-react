import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import urls from 'variables/urls';

import Wizard from './Wizard';
import WizardLocation from './WizardLocation';

import { ReactComponent as ExpandSvg } from 'svgs/expand.svg';
import { ReactComponent as UndoSvg } from 'svgs/undo.svg';


class NewInstance extends Component {
  render() {
    console.log('newInstance board', this);
    console.log('newInstance board2', this.props);
    return (
      <div className={styles.newInstance}>
        <div className={styles.header}>
          <BoardHeader />
        </div>
        <div className={styles.body}>
          <BoardBody isLocPaneOn={this.props.newInstance.isLocPaneOn}/>
        </div>
      </div>
    );
  }
}


class BoardHeader extends Component {
  render() {
    const { headerWrapper, info, title, location, tools, svg } = styles;

    return (
      <div className={headerWrapper}>
        <div className={info}>
          <div className={title}>New instance</div>
          <div className={location}>
            <span><Link to={urls.urlHome}>Home</Link></span>
            <span> &gt; <Link to={urls.urlNew}>New</Link></span>
            <span> &gt; <Link to={urls.urlNewInstance}>New instance</Link></span>
          </div>
        </div>
        <div className={tools}>
          <span><UndoSvg className={svg}/>Clear form</span>
          <span><ExpandSvg className={svg}/>Full screen</span>
        </div>
      </div>
    );
  }
}


class BoardBody extends Component {
  render() {
    console.log('newInstance boardBody', this.props);
    return (
      <>
        <Wizard/>
        {this.props.isLocPaneOn && <WizardLocation />}
      </>
    );
  }
}


export default NewInstance;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import logo from '../../images/logo.png';

import { ReactComponent as LarrowSvg } from '../../svgs/arrow-left.svg';
import { ReactComponent as RarrowSvg } from '../../svgs/arrow-right.svg';
import { ReactComponent as SearchSvg } from '../../svgs/search.svg';
import { ReactComponent as UserSvg } from '../../svgs/user.svg';
import { ReactComponent as CogSvg } from '../../svgs/cog.svg';
import { ReactComponent as BellSvg } from '../../svgs/bell.svg';

class Header extends Component {
  render() {
    const { isSearchOn, isProfilePaneOn, isNotifPaneOn, isPrefPaneOn } = this.props;
    const { toggleSearch, openProfile, openNotif, openPref } = this.props;

    console.log('header props', this.props);
    return (
      <header className={styles.header}>
        <div className={styles.column1}>
          <Link to='/'>
            <img className={styles.logo} src={logo} alt="logo"/>
          </Link>
        </div>
        <div className={styles.column2}>
          <h3 className={styles.headerName}><Link to='/'>BlueBox</Link></h3>
        </div>
        <div className={styles.column3}>
          <LarrowSvg className={styles.navSvg} onClick={this.props.history.goBack}/>
          <RarrowSvg className={styles.navSvg} onClick={this.props.history.goForward}/>
          {isSearchOn && <SearchInput/>}
          <SearchSvg className={styles.navSvg} onClick={toggleSearch}/>
          <UserSvg className={styles.navSvg} onClick={openProfile}/>
          <BellSvg className={styles.navSvg} onClick={openNotif}/>
          <CogSvg className={styles.navSvg} onClick={openPref}/>
        </div>
      </header>
    );
  }
}

class SearchInput extends Component {
  render() {
    return (
      <form>
        <input type="text"/>
      </form>
    );
  }
}

export default Header;

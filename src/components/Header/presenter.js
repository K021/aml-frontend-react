import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import logoImg from 'images/logo.png';

import { ReactComponent as LarrowSvg } from 'svgs/arrow-left.svg';
import { ReactComponent as RarrowSvg } from 'svgs/arrow-right.svg';
import { ReactComponent as SearchSvg } from 'svgs/search.svg';
import { ReactComponent as UserSvg } from 'svgs/user.svg';
import { ReactComponent as CogSvg } from 'svgs/cog.svg';
import { ReactComponent as BellSvg } from 'svgs/bell.svg';

class Header extends Component {
  render() {
    const { isSearchOn } = this.props;
    const { toggleSearch, openProfile, openNotif, openPref } = this.props;
    const { 
      header, column1, column2, column3,
      logo, headerName, navSvg
    } = styles;

    console.log('header props', this.props);
    return (
      <header className={header}>
        <div className={column1}>
          <Link to='/'><img className={logo} src={logoImg} alt="logo"/></Link>
        </div>
        <div className={column2}>
          <h3 className={headerName}><Link to='/'>BlueBox</Link></h3>
        </div>
        <div className={column3}>
          <LarrowSvg className={navSvg} onClick={this.props.history.goBack}/>
          <RarrowSvg className={navSvg} onClick={this.props.history.goForward}/>
          {isSearchOn && <SearchInput/>}
          <SearchSvg className={navSvg} onClick={toggleSearch}/>
          <UserSvg className={navSvg} onClick={openProfile}/>
          <BellSvg className={navSvg} onClick={openNotif}/>
          <CogSvg className={navSvg} onClick={openPref}/>
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

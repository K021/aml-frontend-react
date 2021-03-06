import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import urls from 'variables/urls';
import Card from 'components/Card';
import styles from './styles.module.scss';

import { ReactComponent as PlusSvg } from 'svgs/plus.svg';
import { ReactComponent as PencilSvg } from 'svgs/pencil-alt.svg';
import { ReactComponent as ExpandSvg } from 'svgs/expand.svg';


class Dashboard extends Component {
  render() {
    return (
      <div className={styles.dashboard}>
        <div className={styles.header}>
          {/* <Link to={{pathname:'/new', search:'?name=daniel'}}>daniel</Link> */}
          <Switch>
            {/* <Route path='/new/town/:name' component={Test2}/>
            <Route path='/new' component={Test}/> */}
            {/* <Route component={BoardHeader}/> */}
            <BoardHeader />
          </Switch>
        </div>
        <div className={styles.body}>
          <Card /><Card /><Card /><Card /><Card /><Card />
          <Card /><Card /><Card /><Card /><Card /><Card />
        </div>
      </div>
    );
  }
}

class Test extends Component {
  render() {
    let params = new URLSearchParams(this.props.location.search);
    console.log(this.props);
    console.log(params.get('fail'));
    console.log(this.props.match);
    console.log(this.props.match.params);
    return <h1>Hello</h1>;
  }
}
class Test2 extends Component {
  render() {
    let params = new URLSearchParams(this.props.location.search);
    console.log(this.props);
    console.log(params.get('fail'));
    console.log(this.props.match);
    console.log(this.props.match.params);
    return <h1>Hello2</h1>;
  }
}


class BoardHeader extends Component {
  render() {
    const { headerWrapper, info, title, location, tools, svg } = styles;

    return (
      <div className={headerWrapper}>
        <div className={info}>
          <div className={title}>Dashboard</div>
          <div className={location}><span><Link to={urls.urlHome}>
            Home
          </Link></span></div>
        </div>
        <div className={tools}>
          <span><PlusSvg className={svg}/>New dashboard</span>
          <span><PencilSvg className={svg}/>Edit</span>
          <span><ExpandSvg className={svg}/>Full screen</span>
        </div>
      </div>
    );
  }
}



export default Dashboard;



{/* <div id={styles.testBox}>
<div className={styles.box1}>asdf</div>
<div className={styles.box2}>asfd</div>
</div> */}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import urls from 'variables/urls';

import { ReactComponent as ExpandSvg } from '../../svgs/expand.svg';
import { ReactComponent as UndoSvg } from '../../svgs/undo.svg';
import { ReactComponent as AngleRightSvg } from '../../svgs/angle-right.svg';



class NewInstance extends Component {
  render() {
    console.log('newboard board', this.props);
    return (
      <div className={styles.newInstance}>
        <div className={styles.header}>
          <BoardHeader />
        </div>
        <div className={styles.body}>
          <BoardBody />
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
    return (
      <>
        <Wizard/>
        {<WizardLocation />}
      </>
    );
  }
}

class Wizard extends Component {
  render() {
    const { 
      wrapper, wizard,
      instance, instanceName, instanceType, instanceLocation,
      button, svg,
      create,
    } = styles;
    console.log('newInstance wizard', this.props);
    return (
      <div className={wrapper}>
        <div className={wizard}>
          <form className={instance} action="">
            <label htmlFor="instance_name">Instance Name</label>
            <input className={instanceName} id="instance_name" name="instance_name" type="text" placeholder="Enter instance name"/>
            <label htmlFor="instance_type">Instance Type</label>
            <select className={instanceType} id="instance_type" name="instance_type">
              <option value="0" defaultValue>Demo</option>
              <option value="1">Demo 2</option>
              <option value="2">Demo 3</option>
              <option value="3">Demo 4</option>
            </select>
          </form>
          <div className={instanceLocation}>
            <label>Instance Location</label>
            <div className={button}>
              <span>Browse instance directory</span>
              <AngleRightSvg className={svg}/>
            </div>
          </div>
        </div>
        <div className={create}>
          <button>Create</button>
        </div>
      </div>
    );
  }
}


class WizardLocation extends Component {
  render() {
    const { 
      depth0Wrapper, depth0,
      depth1Wrapper, depth1,
      depth2Wrapper, depth2,
    } = styles;
    
    return (
      <>
        <div classname={depth0Wrapper}>
          <div className={depth0}>APAC</div>
          <div className={depth1Wrapper}>
            <div className={depth1}>Retail Banking</div>
            <div className={depth2Wrapper}>
              <div classname={depth2}>Production</div>
            </div>
          </div>
          <div className={depth1Wrapper}>
            <div className={depth1}>Small Business</div>
            <div className={depth2Wrapper}>
              <div classname={depth2}>Production</div>
            </div>
          </div>
        </div>
        <div classname={depth0Wrapper}>
          <div className={depth0}>EMEA</div>
          <div className={depth1Wrapper}>
            <div className={depth1}>Retail Banking</div>
            <div className={depth2Wrapper}>
              <div classname={depth2}>Production</div>
            </div>
          </div>
          <div className={depth1Wrapper}>
            <div className={depth1}>Small Business</div>
            <div className={depth2Wrapper}>
              <div classname={depth2}>Production</div>
            </div>
          </div>
        </div>
        <div classname={depth0Wrapper}>
          <div className={depth0}>NY</div>
          <div className={depth1Wrapper}>
            <div className={depth1}>Retail Banking</div>
            <div className={depth2Wrapper}>
              <div classname={depth2}>Production</div>
            </div>
          </div>
          <div className={depth1Wrapper}>
            <div className={depth1}>Small Business</div>
            <div className={depth2Wrapper}>
              <div classname={depth2}>Production</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default NewInstance;
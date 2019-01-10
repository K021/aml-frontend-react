import { Component } from 'react';
import styles from './styles.module.scss';
import { ReactComponent as AngleRightSvg } from 'svgs/angle-right.svg';
import React from 'react';


class Wizard extends Component {
  render() {
    const { instLocName, openLocationPane } = this.props;
    const {
      wrapper, wizard,
      instance, instanceName, instanceType, instanceLocation,
      button, svg, locationName,
      create,
    } = styles;

    console.log('newInstance wizard', styles);
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
            <div className={button} onClick={openLocationPane}>
              <div className={locationName}>{instLocName}</div>
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


export default Wizard;
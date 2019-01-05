import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

import { ReactComponent as DatabaseSvg} from '../../svgs/database.svg';
import { ReactComponent as ChartSvg} from '../../svgs/chart-pie.svg';
import { ReactComponent as PencilSvg} from '../../svgs/pencil-ruler.svg';
import { ReactComponent as FileSvg} from '../../svgs/file-alt.svg';
import { ReactComponent as BookSvg} from '../../svgs/book.svg';
import { ReactComponent as PlusSvg} from '../../svgs/plus-circle.svg';


class NewBoard extends Component {
  render() {
    console.log('newboard board', this.props);
    return (
      <div className={styles.board}>
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
    return (
      <div className={styles.headerWrapper}>
        <div className={styles.info}>
          <div className={styles.title}>New</div>
          <div className={styles.location}>
            <span><Link exact to="/">Home</Link></span>
            <span> &gt; <Link exact to='/new'>New</Link></span>
          </div>
        </div>
        <div className={styles.tools}>
        </div>
      </div>
    );
  }
}


class BoardBody extends Component {
  render() {
    const { wrapper, serviceTable, svg } = styles;
    
    return (
      <div className={wrapper}>
        <div className={serviceTable}>
          <table>
            <caption>Service Groups</caption>
            <tbody>
              <tr>
                <th><DatabaseSvg className={svg}/>Data Services</th>
                <td>Setup data source or flat file ingestion into blueBox data schema</td>
              </tr>
              <tr>
                <th><ChartSvg className={svg}/>Typology Analysis</th>
                <td>Conduct typology selection for business units and product lines</td>
              </tr>
              <tr>
                <th><PencilSvg className={svg}/>Rules Engine</th>
                <td>Setup rules engine based on typology selection</td>
              </tr>
              <tr>
                <th><FileSvg className={svg}/>Case Management</th>
                <td>Setup case investigation workflow for case disposition</td>
              </tr>
              <tr>
                <th><BookSvg className={svg}/>Documentation Services</th>
                <td>Supporting documentation</td>
              </tr>
              <tr>
                <th><PlusSvg className={svg}/>New Instance</th>
                <td>Adding new instance to the application</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


export default NewBoard;



{/* <div id={styles.testBox}>
<div className={styles.box1}>asdf</div>
<div className={styles.box2}>asfd</div>
</div> */}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import urls from 'variables/urls';
import styles from './styles.module.scss';

import { ReactComponent as DatabaseSvg} from 'svgs/database.svg';
import { ReactComponent as ChartSvg} from 'svgs/chart-pie.svg';
import { ReactComponent as PencilSvg} from 'svgs/pencil-ruler.svg';
import { ReactComponent as FileSvg} from 'svgs/file-alt.svg';
import { ReactComponent as BookSvg} from 'svgs/book.svg';
import { ReactComponent as PlusSvg} from 'svgs/plus-circle.svg';


class NewBoard extends Component {
  render() {
    console.log('newboard board', this.props);

    return (
      <div className={styles.newBoard}>
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
    const { headerWrapper, info, title, location, tools } = styles;

    return (
      <div className={headerWrapper}>
        <div className={info}>
          <div className={title}>New</div>
          <div className={location}>
            <span><Link to={urls.urlHome}>Home</Link></span>
            <span> &gt; <Link to={urls.urlNew}>New</Link></span>
          </div>
        </div>
        <div className={tools}>
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
                <Link to={urls.urlNewInstance}>
                  <th><DatabaseSvg className={svg}/>Data Services</th>
                  <td>Setup data source or flat file ingestion into blueBox data schema</td>
                </Link>
              </tr>
              <tr>
                <Link to={urls.urlNewInstance}>
                  <th><ChartSvg className={svg}/>Typology Analysis</th>
                  <td>Conduct typology selection for business units and product lines</td>
                </Link>
              </tr>
              <tr>
                <Link to={urls.urlNewInstance}>
                  <th><PencilSvg className={svg}/>Rules Engine</th>
                  <td>Setup rules engine based on typology selection</td>
                </Link>
              </tr>
              <tr>
                <Link to={urls.urlNewInstance}>
                  <th><FileSvg className={svg}/>Case Management</th>
                  <td>Setup case investigation workflow for case disposition</td>
                </Link>
              </tr>
              <tr>
                <Link to={urls.urlNewInstance}>
                  <th><BookSvg className={svg}/>Documentation Services</th>
                  <td>Supporting documentation</td>
                </Link>
              </tr>
              <tr>
                <Link to={urls.urlNewInstance}>
                  <th><PlusSvg className={svg}/>New Instance</th>
                  <td>Adding new instance to the application</td>
                </Link>
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
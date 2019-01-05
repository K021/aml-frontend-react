import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

import { ReactComponent as ListSvg} from '../../svgs/list-ul.svg';
import { ReactComponent as PlusSvg} from '../../svgs/plus-circle.svg';
import { ReactComponent as DatabaseSvg} from '../../svgs/database.svg';
import { ReactComponent as ChartSvg} from '../../svgs/chart-pie.svg';
import { ReactComponent as PencilSvg} from '../../svgs/pencil-ruler.svg';
import { ReactComponent as FileSvg} from '../../svgs/file-alt.svg';
import { ReactComponent as BookSvg} from '../../svgs/book.svg';
import { ReactComponent as FilterSvg} from '../../svgs/filter.svg';
import { ReactComponent as MagicSvg} from '../../svgs/magic.svg';
import { ReactComponent as ShareSvg} from '../../svgs/share-square.svg';


class Nav extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <div className={styles.wrapper}>
          <div className={`${styles.row} ${styles.row1}`}>
            <ul>
              <li><a href=""><ListSvg className={styles.svg}/>All Services</a></li>
              <li>
                <Link exact to="/new">
                  <PlusSvg className={styles.svg}/>Create a new service
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.row} ${styles.row2}`}>
            <ul>
              <li className={styles.listTitle}><span onClick={() => console.log('service span clicked')}>Services</span></li>
              <li><a href=""><DatabaseSvg className={styles.svg}/>Data Services</a></li>
              <li><a href=""><ChartSvg className={styles.svg}/>Typology Selection</a></li>
              <li><a href=""><PencilSvg className={styles.svg}/>Rule Engine</a></li>
              <li><a href=""><FileSvg className={styles.svg}/>Case Management</a></li>
              <li><a href=""><BookSvg className={styles.svg}/>Documentation Services</a></li>
            </ul>
          </div>
          <div className={`${styles.row} ${styles.row3}`}>
            <ul>
              <li className={styles.listTitle}><span>Favorites</span></li>
              <li><a href=""><FilterSvg className={styles.svg}/>Methodology</a></li>
              <li><a href=""><MagicSvg className={styles.svg}/>Modeling Services</a></li>
              <li><a href=""><ShareSvg className={styles.svg}/>Reporting</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


export default Nav;
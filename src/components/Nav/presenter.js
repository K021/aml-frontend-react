import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

import { ReactComponent as ListSvg} from 'svgs/list-ul.svg';
import { ReactComponent as PlusSvg} from 'svgs/plus-circle.svg';
import { ReactComponent as DatabaseSvg} from 'svgs/database.svg';
import { ReactComponent as ChartSvg} from 'svgs/chart-pie.svg';
import { ReactComponent as PencilSvg} from 'svgs/pencil-ruler.svg';
import { ReactComponent as FileSvg} from 'svgs/file-alt.svg';
import { ReactComponent as BookSvg} from 'svgs/book.svg';
import { ReactComponent as FilterSvg} from 'svgs/filter.svg';
import { ReactComponent as MagicSvg} from 'svgs/magic.svg';
import { ReactComponent as ShareSvg} from 'svgs/share-square.svg';
import { ReactComponent as MinusSvg} from 'svgs/minus.svg';


class Nav extends Component {
  render() {
    
    const { isNavShrink, toggleNav } = this.props;

    if (isNavShrink) return <NavShrink toggleNav={toggleNav}/>;
    else return <NavExpand toggleNav={toggleNav}/>;
  }
}

const NavExpand = (props) => {
  const { 
    navExpand,
    wrapper, 
    shrinkButton, minusSvg, 
    row, row1, row2, row3, 
    listTitle, 
    svg, 
  } = styles;

  return (
    <nav className={navExpand}>
      <div className={shrinkButton} onClick={props.toggleNav}><MinusSvg className={minusSvg}/></div>
      <div className={wrapper}>
        <div className={`${row} ${row1}`}>
          <ul>
            <li>
              <a href=""><ListSvg className={svg}/>All Services</a>
            </li>
            <li>
              <Link to="/new">
                <PlusSvg className={svg}/>Create a new service
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${row} ${row2}`}>
          <ul>
            <li className={listTitle}><span onClick={() => console.log('service span clicked')}>Services</span></li>
            <li><a href=""><DatabaseSvg className={svg}/>Data Services</a></li>
            <li><a href=""><ChartSvg className={svg}/>Typology Selection</a></li>
            <li><a href=""><PencilSvg className={svg}/>Rule Engine</a></li>
            <li><a href=""><FileSvg className={svg}/>Case Management</a></li>
            <li><a href=""><BookSvg className={svg}/>Documentation Services</a></li>
          </ul>
        </div>
        <div className={`${row} ${row3}`}>
          <ul>
            <li className={listTitle}><span>Favorites</span></li>
            <li><a href=""><FilterSvg className={svg}/>Methodology</a></li>
            <li><a href=""><MagicSvg className={svg}/>Modeling Services</a></li>
            <li><a href=""><ShareSvg className={svg}/>Reporting</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavShrink = (props) => {
  const { 
    navShrink,
    wrapper, 
    shrinkButton, minusSvg, 
    row, row1, row2, row3, 
    listTitle, 
    svg, tooltip,
  } = styles;

  return (
    <nav className={navShrink}>
      <div className={shrinkButton} onClick={props.toggleNav}><MinusSvg className={minusSvg}/></div>
      <div className={wrapper}>
        <div className={`${row} ${row1}`}>
          <ul>
            <li>
              <a href=""><ListSvg className={svg}/></a>
              <span className={tooltip}>All Services</span>
            </li>
            <li>
              <Link to="/new"><PlusSvg className={svg}/></Link>
              <span className={tooltip}>Create a new service</span>
            </li>
          </ul>
        </div>
        <div className={`${row} ${row2}`}>
          <ul>
            <li className={listTitle}></li>
            <li>
              <a href=""><DatabaseSvg className={svg}/></a>
              <span className={tooltip}>Data Services</span>
            </li>
            <li>
              <a href=""><ChartSvg className={svg}/></a>
              <span className={tooltip}>Typology Selection</span>
            </li>
            <li>
              <a href=""><PencilSvg className={svg}/></a>
              <span className={tooltip}>Rule Engine</span>
            </li>
            <li>
              <a href=""><FileSvg className={svg}/></a>
              <span className={tooltip}>Case Management</span>
            </li>
            <li>
              <a href=""><BookSvg className={svg}/></a>
              <span className={tooltip}>Documentation Services</span>
            </li>
          </ul>
        </div>
        <div className={`${row} ${row3}`}>
          <ul>
            <li className={listTitle}><span></span></li>
            <li>
              <a href=""><FilterSvg className={svg}/></a>
              <span className={tooltip}>Methodology</span>
            </li>
            <li>
              <a href=""><MagicSvg className={svg}/></a>
              <span className={tooltip}>Modeling Services</span>
            </li>
            <li>
              <a href=""><ShareSvg className={svg}/></a>
              <span className={tooltip}>Reporting</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
  

export default Nav;
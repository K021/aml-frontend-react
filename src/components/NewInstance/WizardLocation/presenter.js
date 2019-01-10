import { Component } from 'react';
import React from 'react';
import styles from './styles.module.scss';

import { ReactComponent as AngleRightSvg } from 'svgs/angle-right.svg';
import { ReactComponent as AngleDownSvg } from 'svgs/angle-down.svg';
import { ReactComponent as FolderSvg } from 'svgs/folder.svg';
import { ReactComponent as FolderRegSvg } from 'svgs/folder-regular.svg';


const data = {
  'APAC': {
    'Retail Banking': ['Production', 'dev', 'test1', 'test2', 'test3'],
    'Small Business': ['Production', 'dev', 'test1', 'test2', 'test3'],
    'Corporate Banking': ['Production', 'dev', 'test1', 'test2', 'test3'],
    'Private Banking': ['Production', 'dev', 'test1', 'test2', 'test3'],
  },
  'EMEA': {
    'Retail Banking': ['Production', 'dev', 'test1', 'test2', 'test3'],
    'Small Business': ['Production', 'dev', 'test1', 'test2', 'test3'],
    'Corporate Banking': ['Production', 'dev', 'test1', 'test2', 'test3'],
    'Private Banking': ['Production', 'dev', 'test1', 'test2', 'test3'],
  },
  'NAM': {
    'Retail Banking': ['Production', 'dev', 'test1', 'test2', 'test3'],
    'Small Business': ['Production', 'dev', 'test1', 'test2', 'test3'],
    'Corporate Banking': ['Production', 'dev', 'test1', 'test2', 'test3'],
    'Private Banking': ['Production', 'dev', 'test1', 'test2', 'test3'],
  },
  'LATAM': {
    'Retail Banking': ['Production', 'dev', 'test1', 'test2', 'test3'],
    'Small Business': ['Production', 'dev', 'test1', 'test2', 'test3'],
    'Corporate Banking': ['Production', 'dev', 'test1', 'test2', 'test3'],
    'Private Banking': ['Production', 'dev', 'test1', 'test2', 'test3'],
  },
  'NY': {
    'Retail Banking': ['Production', 'dev', 'test1', 'test2', 'test3'],
    'Small Business': ['Production', 'dev', 'test1', 'test2', 'test3'],
    'Corporate Banking': ['Production', 'dev', 'test1', 'test2', 'test3'],
    'Private Banking': ['Production', 'dev', 'test1', 'test2', 'test3'],
  },
};

// let dataList = Array();
//
// for (let [place, types] of Object.entries(data)) {
//   dataList.push([place, false]);
//   for (let [type, dirs] of Object.entries(types)) {
//     dataList.push([type, false]);
//     for (let dir of dirs) {
//       dataList.push([dir, false]);
//     }
//   }
// }


class WizardLocation extends Component {
  state = {
    locListId: {}
  };

  componentDidMount() {
    Object.entries(data).map(([place, types], index) => {
      let s = this.state.locListId;
      s[`p${index}`] = false;
      this.setState({
        locListId: s,
      });
      let pIndex = index;
      Object.entries(types).map(([type, dirs], index) => {
        let s = this.state.locListId;
        s[`p${pIndex}t${index}`] = false;
        this.setState({
          locListId: s,
        });
      });
    });
  }

  _togglePlaceById(index) {
    console.log('[wl id query]', `p${index}`, this.state.locListId[`p${index}`]);
    if (this.state.locListId[`p${index}`]) {
      let s = this.state.locListId;
      s[`p${index}`] = false;
      this.setState({
        locListId: s,
      });
    } else {
      let s = this.state.locListId;
      s[`p${index}`] = true;
      this.setState({
        locListId: s,
      });
    }
  }

  _toggleTypeById(pIndex, index) {
    console.log('[wl id query]', `p${pIndex}t${index}`, this.state.locListId[`p${pIndex}t${index}`]);
    if (this.state.locListId[`p${pIndex}t${index}`]) {
      let s = this.state.locListId;
      s[`p${pIndex}t${index}`] = false;
      this.setState({
        locListId: s,
      });
    } else {
      let s = this.state.locListId;
      s[`p${pIndex}t${index}`] = true;
      this.setState({
        locListId: s,
      });
    }
  }

  render() {
    const {
      wrapper,
      depth0Wrapper, depth0,
      depth1Wrapper, depth1,
      depth2Wrapper, depth2,
      angle
    } = styles;
    const { locListId } = this.state;
    console.log('rendered state', this.state);

    return (
      <div className={wrapper}>
        {Object.entries(data).map(([place, types], index) => {
          let pIndex = index;
          return (
            <div className={depth0Wrapper}>
              <div className={depth0} onClick={() => this._togglePlaceById(index)}>
                <AngleSvg className={angle} isOpen={locListId[`p${pIndex}`]}/>
                <FolderSvg/>{place}
              </div>

              {Object.entries(types).map(([type, dirs], index) => {
                return (
                  <>
                    {locListId[`p${pIndex}`] && <div className={depth1Wrapper}>
                      <div className={depth1} onClick={() => this._toggleTypeById(pIndex, index)}>
                        <AngleSvg isOpen={locListId[`p${pIndex}t${index}`]}/>
                        <FolderSvg/>{type}
                      </div>

                      {locListId[`p${pIndex}t${index}`] && <div className={depth2Wrapper}>
                        {Object.entries(dirs).map(([i, dir]) => (
                          <div className={depth2}>
                            <FolderRegSvg/>{dir}
                          </div>
                        ))}
                      </div>}
                    </div>}
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}


function AngleSvg({isOpen, className}) {
  if (isOpen) return <AngleDownSvg className={className}/>;
  else return <AngleRightSvg className={className}/>;
}


export default WizardLocation;
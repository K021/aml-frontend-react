import { Component } from 'react';
import styles from './styles.module.scss';
import React from 'react';

class WizardLocation2 extends Component {
  render() {
    console.log('newInstance WizardLocation styles', styles);
    const { isLocPaneOn, isInstLoc1On, isInstLoc2On } = this.props.newInstance;
    const { toggleInstanceLocationDepth } = this.props;

    const {
      wrapper,
      depth0Wrapper, depth0,
      depth1Wrapper, depth1,
      depth2Wrapper, depth2,
    } = styles;

    return (
      <div className={wrapper}>
        <div className={depth0Wrapper}>
          <div className={depth0} onClick={() => toggleInstanceLocationDepth(1)}>APAC</div>
          <div className={depth1Wrapper} style={isInstLoc1On ? {} : {display: 'none'}}>
            <div className={depth1}>Retail Banking</div>
            <div className={depth2Wrapper}>
              <div className={depth2}>Production</div>
            </div>
          </div>
          <div className={depth1Wrapper} style={isInstLoc1On ? {} : {display: 'none'}}>
            <div className={depth1}>Small Business</div>
            <div className={depth2Wrapper}>
              <div className={depth2}>Production</div>
            </div>
          </div>
        </div>
        <div className={depth0Wrapper}>
          <div className={depth0}>EMEA</div>
          <div className={depth1Wrapper} style={isInstLoc1On ? {} : {display: 'none'}}>
            <div className={depth1}>Retail Banking</div>
            <div className={depth2Wrapper}>
              <div className={depth2}>Production</div>
            </div>
          </div>
          <div className={depth1Wrapper} style={isInstLoc1On ? {} : {display: 'none'}}>
            <div className={depth1}>Small Business</div>
            <div className={depth2Wrapper}>
              <div className={depth2}>Production</div>
            </div>
          </div>
        </div>
        <div className={depth0Wrapper}>
          <div className={depth0}>NY</div>
          <div className={depth1Wrapper} style={isInstLoc1On ? {} : {display: 'none'}}>
            <div className={depth1}>Retail Banking</div>
            <div className={depth2Wrapper}>
              <div className={depth2}>Production</div>
            </div>
          </div>
          <div className={depth1Wrapper} style={isInstLoc1On ? {} : {display: 'none'}}>
            <div className={depth1}>Small Business</div>
            <div className={depth2Wrapper}>
              <div className={depth2}>Production</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const data = {
  'APAC': {
    'Retail Banking': ['Production', 'dev'],
    'Small Business': ['Production', 'dev'],
    'Corporate Banking': ['Production', 'dev'],
    'Private Banking': ['Production', 'dev'],
  },
  'EMEA': {
    'Retail Banking': ['Production', 'dev'],
    'Small Business': ['Production', 'dev'],
    'Corporate Banking': ['Production', 'dev'],
    'Private Banking': ['Production', 'dev'],
  },
  'NAM': {
    'Retail Banking': ['Production', 'dev'],
    'Small Business': ['Production', 'dev'],
    'Corporate Banking': ['Production', 'dev'],
    'Private Banking': ['Production', 'dev'],
  },
  'LATAM': {
    'Retail Banking': ['Production', 'dev'],
    'Small Business': ['Production', 'dev'],
    'Corporate Banking': ['Production', 'dev'],
    'Private Banking': ['Production', 'dev'],
  },
  'NY': {
    'Retail Banking': ['Production', 'dev'],
    'Small Business': ['Production', 'dev'],
    'Corporate Banking': ['Production', 'dev'],
    'Private Banking': ['Production', 'dev'],
  },
};

let dataList = Array();

for (let [place, types] of Object.entries(data)) {
  dataList.push([place, false]);
  for (let [type, dirs] of Object.entries(types)) {
    dataList.push([type, false]);
    for (let dir of dirs) {
      dataList.push([dir, false]);
    }
  }
}



function Directory({className, text, locListId}) {
  if (locListId) {
    // return (
    //   // {locListId && <div className={className}>{text}</div>}
    // );
  }
}


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
    } = styles;
    const { locListId } = this.state;
    console.log('rendered state', this.state);

    return (
      <div className={wrapper}>
        {Object.entries(data).map(([place, types], index) => {
          let pIndex = index;
          return (
            <div className={depth0Wrapper}>
              <div className={depth0} onClick={() => this._togglePlaceById(index)}>{place}</div>
              {Object.entries(types).map(([type, dirs], index) => {
                return (
                  <>
                    {locListId[`p${pIndex}`] && <div className={depth1Wrapper}>
                      <div className={depth1} onClick={() => this._toggleTypeById(pIndex, index)}>{type}</div>
                      {locListId[`p${pIndex}t${index}`] && <div className={depth2Wrapper}>
                        {Object.entries(dirs).map(([i, dir]) => {
                          return (
                            <div className={depth2}>{dir}</div>
                          );
                        })}
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

export default WizardLocation;
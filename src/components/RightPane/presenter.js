import React, { Component } from 'react';
import styles from './styles.module.scss';


class ProfilePane extends Component {
  constructor(props) {
    super(props);
    this.paneRef = React.createRef();
  }

  componentDidUpdate() {
    console.log('DidUpdate', this.paneRef);
  }

  componentWillUpdate() {
    if (!this.paneRef.current) 
      document.addEventListener('mouseup', this.onClickOutside);
    else
      document.removeEventListener('mouseup', this.onClickOutside);
    
    console.log('WillUpdate');
  }

  componentWillReceiveProps() {
    console.log('WillReceiveProps');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  onClickOutside = element => {
    const { isProfilePaneOn, isNotifPaneOn, isPrefPaneOn } = this.props;
    const { toggleProfile, toggleNotif, togglePref } = this.props;
    console.log('paneRef', this.paneRef);
    console.log('element', element);

    if (!this.paneRef.current.contains(element.target)) {
      console.log('clicked outside of rightpane');
      if (isProfilePaneOn) toggleProfile();
      else if (isNotifPaneOn) toggleNotif();
      else if (isPrefPaneOn) togglePref();
    }
  };

  render() {
    const { isProfilePaneOn, isNotifPaneOn, isPrefPaneOn } = this.props;

    if (isProfilePaneOn) {
      return (
        <div className={styles.profilePane} ref={this.paneRef}>
          <div className={styles.wrapper}>
            <div className={styles.info}>
              <h2>user profile pane</h2>
            </div>
          </div>
        </div>
      );
    } 
    else if (isNotifPaneOn) {
      return (
        <div className={styles.profilePane} ref={this.paneRef}>
          <div className={styles.wrapper}>
            <div className={styles.info}>
              <h2>Notification pane</h2>
            </div>
          </div>
        </div>
      );
    }
    else if (isPrefPaneOn) {
      return (
        <div className={styles.profilePane} ref={this.paneRef}>
          <div className={styles.wrapper}>
            <div className={styles.info}>
              <h2>preference pane</h2>
            </div>
          </div>
        </div>
      );
    }
    else return null;
  }
}

export default ProfilePane;
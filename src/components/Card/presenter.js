import React, { Component } from 'react';
import styles from './styles.module.scss';


class Card extends Component {
  render() {
    const {isProfilePaneOn, isNotifPaneOn, isPrefPaneOn} = this.props;
    const isRightPaneOn = (!!isProfilePaneOn || !!isNotifPaneOn || !!isPrefPaneOn);

    return (
      <div className={isRightPaneOn ? styles.cardShrink : styles.card}> </div>
    );
  }
}

export default Card;
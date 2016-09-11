import React, { Component } from 'react';
import classes from './ChatView.scss';

import ChatItems from './ChatItems';
import ChatUserInput from './ChatUserInput';

class MyRouteView extends Component {
  render() {
    // const { chatItems, buttons } = this.props;
    let chatItems = [];
    for (let i = 0; i < 100; i++) {
      chatItems.push(i);
    }

    let buttons = [];
    for (let i = 0; i < 10; i++) {
      buttons.push(i);
    }

    return (
      <div className={classes.chatView}>
        <ChatItems chatItems={chatItems} />
        <ChatUserInput buttons={buttons} />
      </div>
    );
  }
}

export default MyRouteView;


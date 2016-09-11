import React, { Component, PropTypes } from 'react';
import classes from './ChatView.scss';

import ChatItems from './ChatItems';
import ChatUserInput from './ChatUserInput';

class MyRouteView extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    chatItems: PropTypes.array.isRequired,
    buttons: PropTypes.array.isRequired,
    isFoodSelected: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.actions.initialLaunch();
  }

  render() {
    const { chatItems, buttons, isFoodSelected } = this.props;

    return (
      <div className={classes.chatView}>
        <ChatItems
          chatItems={chatItems}
          isFoodSelected={isFoodSelected}
        />
        <ChatUserInput
          buttons={buttons}
          onPillPressed={this.props.actions.selectButton}
        />
      </div>
    );
  }
}

export default MyRouteView;

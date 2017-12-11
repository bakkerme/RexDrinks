// @flow
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {
  type: 'increment' | 'decrement'
}

export default class CrementButton extends React.Component<Props> {
  static TYPE = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
  }

  renderButtonType () {
    switch(this.props.type) {
      case CrementButton.TYPE.INCREMENT:
        return '+';
      case CrementButton.TYPE.DECREMENT:
        return '-';
    }
  }

  render() {
    return (
      <Text></Text>
    );
  }
}

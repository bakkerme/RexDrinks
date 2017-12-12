// @flow
import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

type Props = {
  type: 'increment' | 'decrement',
  onPress: () => void
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
    const { type, onPress, ...other } = this.props;

    return (
      <View {...other}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.buttonText}>{this.renderButtonType()}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  buttonText: {
    flexShrink: 1,
    fontSize: 90,
    fontWeight: '400',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    opacity: 0.8,
    textShadowOffset: {width: 0, height: 1},
    textShadowColor: 'rgba(0,0,0,0.40)',
    textShadowRadius: 60
  },
});

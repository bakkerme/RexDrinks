//@flow
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {
  value: number
}

export default class Cost extends React.Component<Props> {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text 
          style={styles.buttonText}
        >
          ${this.props.value}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  buttonText: {
    width: 500,
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

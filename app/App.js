//@flow
import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Cost from 'components/cost';

export default class App extends Component<*> {
  render() {
    return (
      <View style={{flex: 1, marginTop: 10}}>
        <StatusBar
          translucent
          barStyle={'light-content'}
          backgroundColor={'#76b852'}
        />
        <LinearGradient colors={['#76b852','#8dc26f']} style={styles.linearGradient}>
          <Cost value={1} />
        </LinearGradient>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
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

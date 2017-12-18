//@flow
import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Screen extends Component<*> {
  render() {
    return (
      <View style={{flex: 1, marginTop: 10}}>
        <StatusBar
          translucent
          barStyle={'light-content'}
          backgroundColor={'#76b852'}
        />
        <LinearGradient colors={['#76b852','#8dc26f']} style={styles.linearGradient}>
          {this.props.children}
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: 'center'
  }
});

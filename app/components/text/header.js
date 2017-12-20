// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

type Props = {
  children?: Node | string,
  style?: {} | []
};

export default class HeaderText extends Component<Props> {
  render() {
    const { style, children } = this.props;

    return (
      <Text style={[styles.textDefault, style]}>{children}</Text>
    );
  }
}

const styles = StyleSheet.create({
  textDefault: {
    fontSize: 90,
    fontWeight: '400',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    opacity: 0.8,
    textShadowOffset: {width: 0, height: 1},
    textShadowColor: 'rgba(0,0,0,0.30)',
    textShadowRadius: 30
  }
});

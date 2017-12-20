// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import {
  Text as NativeText,
  StyleSheet
} from 'react-native';
import Header from './header';

type Props = {
  children?: Node,
  style?: {} | []
};

export default class Text extends Component<Props> {
  static Header = Header;

  render() {
    const { style, children } = this.props;

    return (
      <NativeText style={[styles.textDefault, style]}>{children}</NativeText>
    );
  }
}

const styles = StyleSheet.create({
  textDefault: {
    fontSize: 40,
    fontWeight: '400',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    opacity: 0.8,
    textShadowOffset: {width: 0, height: 1},
    textShadowColor: 'rgba(0,0,0,0.20)',
    textShadowRadius: 20
  }
});

//@flow
import React from 'react';

import {
  Animated,
  StyleSheet,
  Text,
} from 'react-native';

type Props = {
  value: number
}

type State = {
  scale: Animated.Value,
  top: Animated.Value
}

export default class Cost extends React.Component<Props, State> {
  constructor (props: Object) {
    super(props);

    this.state = {
      scale: new Animated.Value(1),
      top: new Animated.Value(0)
    };
  }

  componentWillUpdate (nextProps: Object) {
    if(nextProps.value !== this.props.value) {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(
            this.state.scale,
            {
              toValue: 1.05,
              duration: 100,
              useNativeDriver: true
            }
          ),
          Animated.timing(
            this.state.top,
            {
              toValue: -5,
              duration: 100,
              useNativeDriver: true
            }
          )
        ]),
        Animated.parallel([
          Animated.timing(
            this.state.scale,
            {
              toValue: 1,
              duration: 100,
              useNativeDriver: true
            }
          ),
          Animated.timing(
            this.state.top,
            {
              toValue: 0,
              duration: 100,
              useNativeDriver: true
            }
          )
        ])
      ]).start();
    }
  }

  render() {
    const { value, ...other } = this.props;

    return (
      <Animated.View
        style={{
          transform: [
            { translateY: this.state.top },
            { scaleX: this.state.scale },
            { scaleY: this.state.scale }
          ]
        }}
        {...other}
      >
        <Text style={styles.buttonText}>
          ${this.props.value}
        </Text>
      </Animated.View>
    );
  }
}

var styles = StyleSheet.create({
  buttonText: {
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

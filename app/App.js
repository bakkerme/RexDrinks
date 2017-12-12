//@flow
import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Cost from 'components/cost';
import CrementButton from 'components/crement-button';

type State = {
  cost: number
}

export default class App extends Component<*, State> {
  constructor (props: Object) {
    super(props);

    this.state = {
      cost: 2
    };
  }

  decrementValue = () => {
    this.setState({ cost: this.state.cost - 1 });
  }

  incrementValue = () => {
    this.setState({ cost: this.state.cost + 1 });
  }

  render() {
    return (
      <View style={{flex: 1, marginTop: 10}}>
        <StatusBar
          translucent
          barStyle={'light-content'}
          backgroundColor={'#76b852'}
        />
        <LinearGradient colors={['#76b852','#8dc26f']} style={styles.linearGradient}>
          <View style={styles.costContainer}>
            <CrementButton type={CrementButton.TYPE.DECREMENT} onPress={this.decrementValue} />
            <Cost value={this.state.cost} />
            <CrementButton type={CrementButton.TYPE.INCREMENT} onPress={this.incrementValue} />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: 'center'
  },
  costContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

//@flow
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import Cost from 'components/cost';
import CrementButton from 'components/crement-button';

type State = {
  cost: number
}

export default class ValueSelectScreen extends Component<*, State> {
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
      <View>
        <Text>How much do you want to donate?</Text>
        <View style={styles.costContainer}>
          { this.state.cost !== 1 
            ?  <CrementButton type={CrementButton.TYPE.DECREMENT} onPress={this.decrementValue} /> 
            : <View style={{minWidth: 60}}></View>
          }
          <Cost value={this.state.cost} />
          <CrementButton type={CrementButton.TYPE.INCREMENT} onPress={this.incrementValue} />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  costContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

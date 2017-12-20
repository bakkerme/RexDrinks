//@flow
import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Screen from 'components/screen';
import Cost from 'components/cost';
import CrementButton from 'components/crement-button';
import Text from 'components/text/';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      <Screen>
        <View style={styles.screenWrapper}>
          <View style={styles.instructionsContainer}>
            <Text>First, select your donation amount</Text>
          </View>
          <View style={styles.costContainer}>
            { this.state.cost !== 1 
              ?  <CrementButton type={CrementButton.TYPE.DECREMENT} onPress={this.decrementValue} /> 
              : <View style={{minWidth: 60}}></View>
            }
            <Cost value={this.state.cost} />
            <CrementButton type={CrementButton.TYPE.INCREMENT} onPress={this.incrementValue} />
          </View>
          <Icon name="arrow-right-bold-circle" size={60} color="#ffffff" />
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  screenWrapper: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 50
  },
  instructionsContainer: {
    // paddingHorizontal: 80,
    alignItems: 'center',
    marginBottom: 70
  },
  costContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

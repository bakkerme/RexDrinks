//@flow
import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Scene,
  Router,
  Stack,
  // Actions,
  // Reducer,
  // ActionConst,
  // Overlay,
  // Tabs,
  // Modal,
  // Drawer,
  // Lightbox,
} from 'react-native-router-flux';

// Fix the import alias at some point
import ValueSelectScreen from 'screens/value-select';

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
          <Router>
            <Stack key="root">
              <Scene key="valueSelect" component={ValueSelectScreen} title="Value Select"/>
            </Stack>
          </Router>
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

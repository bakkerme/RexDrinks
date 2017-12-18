//@flow
import { StackNavigator } from 'react-navigation';
import ValueSelectScreen from 'screens/value-select';

const RootNavigator = StackNavigator({
  Home: {
    screen: ValueSelectScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default RootNavigator;

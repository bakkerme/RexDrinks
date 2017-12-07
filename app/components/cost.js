import React from 'react';

type Props {
  value: number
}

class Cost extends React.Component<Props> {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text 
          style={styles.buttonText}
        >
          ${this.props.value}
        </Text>
      </View>
    );
  }
}

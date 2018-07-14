import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ""};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <Button
          onPress={() => {
            this.setState(previousState => {
              return {text: "Hello World !"}
            });

          }}
          title="Press Me"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

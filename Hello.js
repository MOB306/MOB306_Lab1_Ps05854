import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class Hello extends React.Component{
  render(){
    return(
      <View sytle= {styles.container}>
          <Text sytle= {styles.welcome}>Hello!!! This is Hello Screen</Text>
          <Text>Lab 1</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

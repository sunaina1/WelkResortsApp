import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

export default class DemographicPage extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Name"
            placeholderTextColor="#000000"
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Mobile Number"
            placeholderTextColor="#000000"
          />

          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Address"
            placeholderTextColor="#000000"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 12,
    color: '#000000',
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#1C313A',
    borderRadius: 25,
    paddingVertical: 12,
    marginVertical: 20,
    borderColor: '#fff',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
});

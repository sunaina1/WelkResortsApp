import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView, Text, StatusBar} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

export default class LoginPage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.label}>Email Id</Text>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Email"
            placeholderTextColor="gray"
            keyboardType="email-address"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('AMS');
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.forgotPasswordLabel}>Forgot Password?</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  inputBox: {
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 12,
    color: '#000000',
    marginVertical: 5,
  },
  label: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 3,
    marginTop: 7,
  },
  forgotPasswordLabel: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
  },
  button: {
    width: 300,
    backgroundColor: '#1C313A',
    borderRadius: 25,
    paddingVertical: 12,
    marginVertical: 25,
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

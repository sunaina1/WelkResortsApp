import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

class TourPage extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
          <Text style={styles.heading}>Book Your Tour</Text>
          <View style={styles.verticalContainer}>
            <View style={styles.subContainer}>
              <Text style={styles.label}>Tour Site</Text>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Name"
                placeholderTextColor="#000000"
              />
            </View>
            {/* <View style={styles.subContainer}>
              <Text style={styles.label}>Tour Type</Text>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Name"
                placeholderTextColor="#000000"
              />
            </View> */}
          </View>
          {/* <TextInput
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
          </TouchableOpacity> */}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    alignContent: 'center',
  },
  verticalContainer: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  subContainer: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '800',
    padding: 10,
    marginLeft: 10,
  },
  label: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: '#000000',
    marginVertical: 10,
    fontWeight: '600',
    marginLeft: 10,
  },
  inputBox: {
    flex: 2,
    height: 30,
    backgroundColor: '#fff',
    padding: 5,
    fontSize: 14,
    color: '#000000',
    marginVertical: 10,
    marginEnd: 25,
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

export default TourPage;

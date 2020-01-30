/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Picker,
  Dimensions,
} from 'react-native';
import {Button} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import {Dropdown} from 'react-native-material-dropdown';

var screenHeight = Math.round(Dimensions.get('window').height);

export default class DemographicPage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    maritalIndex: 0,
    kidsIndex: 0,
    maritalValue: 'Select Marital Status',
    kidsValue: 'Select',
    maritalData: [
      {
        label: 'Select Marital Status',
        value: 'Select Marital Status',
      },
      {
        label: 'Single',
        value: 'Single',
      },
      {
        label: 'Married',
        value: 'Married',
      },
    ],
    kidsData: [
      {
        label: 'Select Kids',
        value: 'Select Kids',
      },
      {
        label: '1',
        value: '1',
      },
      {
        label: '2',
        value: '2',
      },
      {
        label: '3',
        value: '3',
      },
      {
        label: '4',
        value: '4',
      },
      {
        label: '5',
        value: '5',
      },
    ],
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <StatusBar backgroundColor="#1c313a" barStyle="light-content" />

            <Text style={styles.heading}>Demographics</Text>
            <View style={styles.subContainer}>
              <Text style={styles.label}>Guest First Name</Text>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Guest First Name"
                placeholderTextColor="gray"
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.label}>Guest Last Name</Text>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Guest Last Name"
                placeholderTextColor="gray"
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.label}>Second Guest First Name</Text>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Second Guest First Name"
                placeholderTextColor="gray"
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.label}>Second Guest Last Name</Text>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Guest First Name"
                placeholderTextColor="gray"
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.label}>Street Address</Text>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Street Address"
                placeholderTextColor="gray"
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.label}>City</Text>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="City"
                placeholderTextColor="gray"
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.label}>State</Text>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="State"
                placeholderTextColor="gray"
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.label}>Zip Code</Text>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Zip Code"
                placeholderTextColor="gray"
                keyboardType="number-pad"
                maxLength={6}
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Phone Number"
                placeholderTextColor="gray"
                keyboardType="phone-pad"
                maxLength={12}
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.label}>Second Phone Number</Text>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Second Phone Number"
                placeholderTextColor="gray"
                keyboardType="phone-pad"
                maxLength={12}
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Email Address"
                placeholderTextColor="gray"
                keyboardType="email-address"
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.label}>Marital Status</Text>
              <View style={styles.pickerBorder}>
                <Dropdown
                  data={this.state.maritalData}
                  value={this.state.maritalValue}
                  pickerStyle={styles.pickerWindow}
                  // pickerStyle={{
                  //   borderBottomColor: 'transparent',
                  //   borderWidth: 0,
                  // }}
                  dropdownOffset={{top: 0}}
                  containerStyle={styles.dropdown}
                  onChangeText={maritalValue => {
                    this.setState({maritalValue});
                  }}
                  inputContainerStyle={{borderBottomColor: 'transparent'}}
                />
                {/* <Picker
                  style={styles.pickerStyle}
                  selectedValue={this.state.marital}
                  onValueChange={(itemValue, itemPosition) =>
                    this.setState({
                      marital: itemValue,
                      maritalIndex: itemPosition,
                    })
                  }>
                  <Picker.Item label="Select Marital Status" value="" />
                  <Picker.Item label="Single" value="Single" />
                  <Picker.Item label="Married" value="Married" />
                </Picker> */}
              </View>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.label}>No. of kids</Text>
              <View style={styles.pickerBorder}>
                <Dropdown
                  data={this.state.kidsData}
                  value={this.state.kidsValue}
                  pickerStyle={styles.pickerWindow}
                  // pickerStyle={{
                  //   borderBottomColor: 'transparent',
                  //   borderWidth: 0,
                  // }}
                  dropdownOffset={{top: 0}}
                  containerStyle={styles.dropdown}
                  onChangeText={kidsValue => {
                    this.setState({kidsValue});
                  }}
                  inputContainerStyle={{borderBottomColor: 'transparent'}}
                />
                {/* <Picker
                  style={styles.pickerStyle}
                  selectedValue={this.state.kids}
                  onValueChange={(itemValue, itemPosition) =>
                    this.setState({
                      kids: itemValue,
                      kidsIndex: itemPosition,
                    })
                  }>
                  <Picker.Item label="Select" value="select" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                </Picker> */}
              </View>
            </View>
            <View style={styles.fixToText}>
              <View style={styles.button}>
                <Button
                  buttonStyle={{
                    backgroundColor: '#1C313A',
                  }}
                  title="Next"
                  onPress={() => navigate('Premium')}
                />
              </View>
            </View>
          </View>
        </ScrollView>
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
    marginVertical: 5,
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
    fontSize: 14,
    color: '#000000',
    fontWeight: '600',
    marginLeft: 10,
  },
  cardInputBox: {
    flex: 1.4,
    height: 40,
    backgroundColor: '#fff',
    fontSize: 14,
    color: '#000000',
    marginEnd: 5,
    borderColor: '#1C313A',
    borderWidth: 1,
    paddingLeft: 10,
  },
  cvvInputBox: {
    flex: 0.5,
    height: 40,
    backgroundColor: '#fff',
    padding: 5,
    fontSize: 14,
    color: '#000000',
    marginEnd: 25,
    borderColor: '#1C313A',
    borderWidth: 1,
  },
  inputBox: {
    flex: 2,
    height: 40,
    backgroundColor: '#fff',
    paddingLeft: 10,
    fontSize: 14,
    color: '#000000',
    marginEnd: 25,
    borderColor: '#1C313A',
    borderWidth: 1,
  },
  pickerBorder: {
    borderColor: '#1C313A',
    borderWidth: 1,
    flex: 2.06,
    height: 40,
    marginEnd: 25,
    backgroundColor: '#fff',
  },
  button: {
    width: 80,
    color: '#1C313A',
    borderRadius: 25,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
  pickerStyle: {
    height: 40,
    fontSize: 14,
    color: '#000000',
    justifyContent: 'center',
  },
  fixToText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginEnd: 25,
    alignSelf: 'flex-end',
  },
  dropdown: {
    width: '100%',
    paddingLeft: 10,
    paddingTop: 4,
  },
  pickerWindow: {
    borderBottomColor: 'transparent',
    borderWidth: 0,
    justifyContent: 'center',
    position: 'absolute',
    flex: 1,
    top: screenHeight / 2,
  },
});

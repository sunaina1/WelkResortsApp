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
} from 'react-native';
import {Button} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
//import RNPickerSelect from 'react-native-picker-select';
// import ModalDropdown from 'react-native-modal-dropdown';
// import DropdownMenu from 'react-native-dropdown-menu';
import {Dropdown} from 'react-native-material-dropdown';

export default class PremiumsPage extends Component {
  constructor(props) {
    super(props);
  }
  // Date time picker
  state = {
    // premiumOneIndex: 0,
    // premiumTwoIndex: 0,
    // premiumThreeIndex: 0,
    // premiumFourIndex: 0,
    valueOne: 'Select Premium',
    valueTwo: 'Select Premium',
    valueThree: 'Select Premium',
    valueFour: 'Select Premium',

    data1: [
      {
        label: 'Select Premium',
        value: 'Select Premium',
      },
      {
        label: 'SD Cabana Rental PK',
        value: 'SD Cabana Rental PK',
      },
      {
        label: 'SD Fest VIP PKG',
        value: 'SD Fest VIP PKG',
      },
      {
        label: 'SD JC Golf Plat Card',
        value: 'SD JC Golf Plat Card',
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

            <Text style={styles.heading}>Premiums</Text>
            {/* <ModalDropdown
              style={styles.pickerStyle}
              options={DEMO_OPTIONS_1}
            /> */}

            <View style={styles.subContainer}>
              <Text style={styles.labelQty}>Qty</Text>
              <Text style={styles.labelPremium}>Premium 1</Text>
            </View>
            <View style={styles.subContainer}>
              <TextInput
                style={styles.inputBoxQty}
                underlineColorAndroid="rgba(0,0,0,0)"
              />
              <View style={styles.pickerBorder}>
                {/* <Picker
                  style={styles.pickerStyle}
                  selectedValue={this.state.premiumOne}
                  onValueChange={(itemValue, itemPosition) =>
                    this.setState({
                      premiumOne: itemValue,
                      premiumOneIndex: itemPosition,
                    })
                  }>
                  <Picker.Item label="Select" value="select" />
                  <Picker.Item
                    label="SD Cabana Rental PK"
                    value="SD Cabana Rental PK"
                  />
                  <Picker.Item
                    label="SD Fest VIP PKG"
                    value="SD Fest VIP PKG"
                  />
                  <Picker.Item
                    label="SD JC Golf Plat Card"
                    value="SD JC Golf Plat Card"
                  />
                </Picker> */}
                <Dropdown
                  data={this.state.data1}
                  value={this.state.valueOne}
                  pickerStyle={styles.pickerWindow}
                  // pickerStyle={{
                  //   borderBottomColor: 'transparent',
                  //   borderWidth: 0,
                  //   justifyContent: 'center',
                  //   position: 'absolute',
                  //   flex: 1,
                  //   top: 0,
                  //   left: 0,
                  //   right: 0,
                  //   bottom: 0,
                  //   flexDirection: 'row',
                  // }}
                  dropdownOffset={{top: 0}}
                  containerStyle={styles.dropdown}
                  onChangeText={valueOne => {
                    this.setState({valueOne});
                  }}
                  inputContainerStyle={{borderBottomColor: 'transparent'}}
                />
              </View>
            </View>

            <View style={styles.subContainer}>
              <Text style={styles.labelQty}>Qty</Text>
              <Text style={styles.labelPremium}>Premium 2</Text>
            </View>
            <View style={styles.subContainer}>
              <TextInput
                style={styles.inputBoxQty}
                underlineColorAndroid="rgba(0,0,0,0)"
              />
              <View style={styles.pickerBorder}>
                {/* <Picker
                  style={styles.pickerStyle}
                  selectedValue={this.state.premiumTwo}
                  onValueChange={(itemValue, itemPosition) =>
                    this.setState({
                      premiumTwo: itemValue,
                      premiumTwoIndex: itemPosition,
                    })
                  }>
                  <Picker.Item label="Select" value="select" />
                  <Picker.Item
                    label="SD Cabana Rental PK"
                    value="SD Cabana Rental PK"
                  />
                  <Picker.Item
                    label="SD Fest VIP PKG"
                    value="SD Fest VIP PKG"
                  />
                  <Picker.Item
                    label="SD JC Golf Plat Card"
                    value="SD JC Golf Plat Card"
                  />
                </Picker> */}
                <Dropdown
                  data={this.state.data1}
                  value={this.state.valueTwo}
                  pickerStyle={styles.pickerWindow}
                  // pickerStyle={{
                  //   borderBottomColor: 'transparent',
                  //   borderWidth: 0,
                  //   marginTop: 50,
                  // }}
                  dropdownOffset={{top: 0}}
                  containerStyle={styles.dropdown}
                  onChangeText={valueTwo => {
                    this.setState({valueTwo});
                  }}
                  inputContainerStyle={{borderBottomColor: 'transparent'}}
                />
              </View>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.labelQty}>Qty</Text>
              <Text style={styles.labelPremium}>Premium 3</Text>
            </View>
            <View style={styles.subContainer}>
              <TextInput
                style={styles.inputBoxQty}
                underlineColorAndroid="rgba(0,0,0,0)"
              />
              <View style={styles.pickerBorder}>
                {/* <Picker
                  style={styles.pickerStyle}
                  selectedValue={this.state.premiumThree}
                  onValueChange={(itemValue, itemPosition) =>
                    this.setState({
                      premiumThree: itemValue,
                      premiumThreeIndex: itemPosition,
                    })
                  }>
                  <Picker.Item label="Select" value="select" />
                  <Picker.Item
                    label="SD Cabana Rental PK"
                    value="SD Cabana Rental PK"
                  />
                  <Picker.Item
                    label="SD Fest VIP PKG"
                    value="SD Fest VIP PKG"
                  />
                  <Picker.Item
                    label="SD JC Golf Plat Card"
                    value="SD JC Golf Plat Card"
                  />
                </Picker> */}
                <Dropdown
                  data={this.state.data1}
                  value={this.state.valueThree}
                  pickerStyle={styles.pickerWindow}
                  // pickerStyle={{
                  //   borderBottomColor: 'transparent',
                  //   borderWidth: 0,
                  //   marginTop: 50,
                  // }}
                  dropdownOffset={{top: 0}}
                  containerStyle={styles.dropdown}
                  onChangeText={valueThree => {
                    this.setState({valueThree});
                  }}
                  inputContainerStyle={{borderBottomColor: 'transparent'}}
                />
              </View>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.labelQty}>Qty</Text>
              <Text style={styles.labelPremium}>Premium 4</Text>
            </View>
            <View style={styles.subContainer}>
              <TextInput
                style={styles.inputBoxQty}
                underlineColorAndroid="rgba(0,0,0,0)"
              />
              <View style={styles.pickerBorder}>
                {/* <Picker
                  style={styles.pickerStyle}
                  selectedValue={this.state.premiumFour}
                  onValueChange={(itemValue, itemPosition) =>
                    this.setState({
                      premiumFour: itemValue,
                      premiumFourIndex: itemPosition,
                    })
                  }>
                  <Picker.Item label="Select" value="select" />
                  <Picker.Item
                    label="SD Cabana Rental PK"
                    value="SD Cabana Rental PK"
                  />
                  <Picker.Item
                    label="SD Fest VIP PKG"
                    value="SD Fest VIP PKG"
                  />
                  <Picker.Item
                    label="SD JC Golf Plat Card"
                    value="SD JC Golf Plat Card"
                  />
                </Picker> */}
                <Dropdown
                  data={this.state.data1}
                  value={this.state.valueFour}
                  pickerStyle={styles.pickerWindow}
                  // pickerStyle={{
                  //   borderBottomColor: 'transparent',
                  //   borderWidth: 0,
                  // }}
                  dropdownOffset={{top: 0}}
                  containerStyle={styles.dropdown}
                  onChangeText={valueFour => {
                    this.setState({valueFour});
                  }}
                  inputContainerStyle={{borderBottomColor: 'transparent'}}
                />
              </View>
            </View>
            <View style={styles.fixToText}>
              <View style={styles.button}>
                <Button
                  buttonStyle={{
                    backgroundColor: '#1C313A',
                  }}
                  title="Next"
                  onPress={() => navigate('Confirmation')}
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
  },
  subContainer: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  heading: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '800',
    padding: 10,
    marginLeft: 10,
  },
  inputBoxQty: {
    flex: 0.3,
    height: 40,
    backgroundColor: '#fff',
    paddingLeft: 10,
    fontSize: 14,
    color: '#000000',
    borderColor: '#1C313A',
    borderWidth: 1,
    marginEnd: 25,
    marginLeft: 20,
  },
  pickerBorder: {
    borderColor: '#1C313A',
    borderWidth: 1,
    flex: 2.1,
    height: 40,
    marginEnd: 25,
    backgroundColor: '#fff',
  },
  labelQty: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    color: '#000000',
    fontWeight: '600',
    marginLeft: 10,
  },
  labelPremium: {
    flex: 6,
    padding: 10,
    fontSize: 14,
    color: '#000000',
    fontWeight: '600',
    alignContent: 'flex-start',
    marginLeft: 10,
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
    marginTop: 10,
  },
});

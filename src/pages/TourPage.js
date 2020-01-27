import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Picker,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
//import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';

var day = null;
var month = null;
var year = null;
class TourPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    tourSiteIndex: 0,
    tourTypeIndex: 0,
    chargeTypeIndex: 0,
    monthIndex: 0,
    isDateTimePickerVisible: false,
    isTimePickerVisible: false,
    dateValue: '',
    timeValue: '',
  };

  showTimePicker = () => {
    this.setState({isTimePickerVisible: true});
  };

  hideTimePicker = () => {
    this.setState({isTimePickerVisible: false});
  };

  handleTimePicked = date => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
    this.setState({timeValue: hours + ':' + minutes});
    this.hideTimePicker();
  };

  showDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: true});
  };

  hideDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: false});
  };

  handleDatePicked = date => {
    console.warn('A date has been picked: ', date);
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    console.log('A date has been picked: ' + day + '-' + month + '-' + year);
    this.setState({dateValue: day + '-' + month + '-' + year});
    this.hideDateTimePicker();
  };

  // showAlert1() {
  //   Alert.alert('Alert Title', 'My Alert Msg', [
  //     {
  //       text: 'Cancel',
  //       onPress: () => console.log('Cancel Pressed'),
  //       style: 'cancel',
  //     },
  //     {text: 'OK', onPress: () => console.log('OK Pressed')},
  //   ]);
  // }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <StatusBar backgroundColor="#1c313a" barStyle="light-content" />

            <Text style={styles.heading}>Book Your Tour</Text>

            <View style={styles.subContainer}>
              <Text style={styles.label}>Tour Site</Text>
              <View style={styles.pickerBorder}>
                <Picker
                  style={styles.pickerStyle}
                  selectedValue={this.state.language}
                  onValueChange={(itemValue, itemPosition) =>
                    this.setState({
                      language: itemValue,
                      tourSiteIndex: itemPosition,
                    })
                  }>
                  <Picker.Item label="Select Tour Site" value="select" />
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                  <Picker.Item label="React Native" value="rn" />
                </Picker>
              </View>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.label}>Tour Type</Text>
              <View style={styles.pickerBorder}>
                <Picker
                  style={styles.pickerStyle}
                  selectedValue={this.state.tourType}
                  onValueChange={(itemValue, itemPosition) =>
                    this.setState({
                      tourType: itemValue,
                      tourTypeIndex: itemPosition,
                    })
                  }>
                  <Picker.Item label="Select Tour Type" value="select" />
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                  <Picker.Item label="React Native" value="rn" />
                </Picker>
              </View>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.label}>Tour Date</Text>
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => this.showDateTimePicker()}>
                <TextInput
                  style={styles.dateInputBox}
                  underlineColorAndroid="rgba(0,0,0,0)"
                  placeholder="Select Date"
                  placeholderTextColor="gray"
                  pointerEvents="none"
                  editable={false}
                  value={this.state.dateValue}
                />
              </TouchableOpacity>
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.hideDateTimePicker}
                mode="date"
                format="DD-MM-YYYY"
              />
            </View>

            <View style={styles.subContainer}>
              <Text style={styles.label}>Amount</Text>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Enter Amount"
                placeholderTextColor="gray"
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.label}>Charge Type</Text>
              <View style={styles.pickerBorder}>
                <Picker
                  style={styles.pickerStyle}
                  selectedValue={this.state.chargeType}
                  onValueChange={(itemValue, itemPosition) =>
                    this.setState({
                      chargeType: itemValue,
                      chargeTypeIndex: itemPosition,
                    })
                  }>
                  <Picker.Item label="Select Charge Type" value="select" />
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                  <Picker.Item label="React Native" value="rn" />
                </Picker>
              </View>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.label}>Tour Time</Text>
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => this.showTimePicker()}>
                <TextInput
                  style={styles.dateInputBox}
                  underlineColorAndroid="rgba(0,0,0,0)"
                  placeholder="Select Tour Time"
                  placeholderTextColor="gray"
                  pointerEvents="none"
                  editable={false}
                  value={this.state.timeValue}
                />
              </TouchableOpacity>
              <DateTimePicker
                isVisible={this.state.isTimePickerVisible}
                onConfirm={this.handleTimePicked}
                onCancel={this.hideTimePicker}
                mode="time"
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.label}>Name on Card</Text>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Name"
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
              <Text style={styles.label}>Card Number</Text>
              <TextInput
                style={styles.cardInputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Card Number  "
                placeholderTextColor="gray"
                keyboardType="number-pad"
              />
              <TextInput
                style={styles.cvvInputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="CVV"
                placeholderTextColor="gray"
                keyboardType="number-pad"
                maxLength={3}
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.label}>Date of Expiry</Text>
              <View style={styles.monthPickerBorder}>
                <Picker
                  style={styles.pickerStyle}
                  selectedValue={this.state.monthType}
                  onValueChange={(itemValue, itemPosition) =>
                    this.setState({
                      monthType: itemValue,
                      monthIndex: itemPosition,
                    })
                  }>
                  <Picker.Item label="Select Month" value="select" />
                  <Picker.Item label="Jan" value="Jan" />
                  <Picker.Item label="Feb" value="Feb" />
                  <Picker.Item label="March" value="March" />
                  <Picker.Item label="April" value="April" />
                  <Picker.Item label="May" value="May" />
                  <Picker.Item label="June" value="June" />
                  <Picker.Item label="July" value="July" />
                  <Picker.Item label="Aug" value="Aug" />
                  <Picker.Item label="Sep" value="Sep" />
                  <Picker.Item label="Oct" value="Oct" />
                  <Picker.Item label="Nov" value="Nov" />
                  <Picker.Item label="Dec" value="Dec" />
                </Picker>
              </View>
              {/* <TextInput
                style={styles.cardInputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Month"
                placeholderTextColor="gray"
              /> */}
              <TextInput
                style={styles.cvvInputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Year"
                placeholderTextColor="gray"
                keyboardType="number-pad"
                maxLength={4}
              />
            </View>
            <View style={styles.fixToText}>
              <View style={styles.button}>
                {/* <Button color="#1C313A" title="Manual Entry" /> */}
              </View>
              <View style={styles.button}>
                <Button color="gray" title="Manual Entry" />
              </View>
              <View style={styles.button}>
                <Button color="gray" title="Swipe CC" />
                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this.handleDatePicked}
                  onCancel={this.hideDateTimePicker}
                />
              </View>
              <View style={styles.button}>
                <Button
                  color="#1C313A"
                  title="Next"
                  onPress={() => navigate('Demographic')}
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
    flex: 1.45,
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
  dateInputBox: {
    height: 40,
    backgroundColor: '#fff',
    paddingLeft: 10,
    fontSize: 14,
    color: '#000000',
    borderColor: '#1C313A',
    borderWidth: 1,
  },
  touchable: {
    flex: 2.1,
    height: 40,
    // backgroundColor: '#fff',
    // paddingLeft: 10,
    // fontSize: 14,
    // color: '#000000',
    marginEnd: 25,
    // borderColor: '#1C313A',
    // borderWidth: 1,
  },
  pickerBorder: {
    borderColor: '#1C313A',
    borderWidth: 1,
    flex: 2.1,
    height: 40,
    marginEnd: 25,
    backgroundColor: '#fff',
  },
  monthPickerBorder: {
    borderColor: '#1C313A',
    borderWidth: 1,
    flex: 1.5,
    height: 40,
    marginEnd: 5,
    backgroundColor: '#fff',
  },
  button: {
    flex: 1,
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
  },
});

// const pickerSelectStyles = StyleSheet.create({
//   inputIOS: {
//     fontSize: 16,
//     paddingVertical: 12,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 4,
//     color: 'black',
//     paddingRight: 30, // to ensure the text is never behind the icon
//   },
//   inputAndroid: {
//     fontSize: 16,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     borderWidth: 0.5,
//     borderColor: 'purple',
//     borderRadius: 8,
//     color: 'black',
//     paddingRight: 30, // to ensure the text is never behind the icon
//   },
// });

export default TourPage;

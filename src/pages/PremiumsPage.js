import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Button,
  Picker,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default class PremiumsPage extends Component {
  constructor(props) {
    super(props);
  }
  // Date time picker
  state = {
    premiumOneIndex: 0,
    premiumTwoIndex: 0,
    premiumThreeIndex: 0,
    premiumFourIndex: 0,
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <StatusBar backgroundColor="#1c313a" barStyle="light-content" />

            <Text style={styles.heading}>Premiums</Text>

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
                <Picker
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
                </Picker>
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
                <Picker
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
                </Picker>
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
                <Picker
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
                </Picker>
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
                <Picker
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
                </Picker>
              </View>
            </View>
            <View style={styles.fixToText}>
              <View style={styles.button} />
              <View style={styles.button} />
              <View style={styles.button} />
              <View style={styles.button}>
                <Button
                  color="#1C313A"
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

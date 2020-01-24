import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default class ConfirmationPage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
  };
  checkboxTest1() {
    this.setState({
      checked1: !this.state.checked1,
    });
  }
  checkboxTest2() {
    this.setState({
      checked2: !this.state.checked2,
    });
  }
  checkboxTest3() {
    this.setState({
      checked3: !this.state.checked3,
    });
  }
  checkboxTest4() {
    this.setState({
      checked4: !this.state.checked4,
    });
  }
  checkboxTest5() {
    this.setState({
      checked5: !this.state.checked5,
    });
  }
  checkboxTest6() {
    this.setState({
      checked6: !this.state.checked6,
    });
  }
  checkboxTest7() {
    this.setState({
      checked7: !this.state.checked7,
    });
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <StatusBar backgroundColor="#1c313a" barStyle="light-content" />

            <Text style={styles.heading}>Agree</Text>
            <View style={styles.subContainer}>
              <CheckBox
                style={styles.checkbox}
                value={this.state.checked1}
                onValueChange={() => this.checkboxTest1()}
              />
              <Text style={styles.termsText}>
                We/I share a combined annual income of $90,000 or more and are
                creditworthy (minimum FICO of 600)
              </Text>
            </View>
            <View style={styles.subContainer}>
              <CheckBox
                style={styles.checkbox}
                value={this.state.checked2}
                onValueChange={() => this.checkboxTest2()}
              />
              <Text style={styles.termsText}>
                We/I own a valid major credit card(Visa/MasterCard, Amex,
                Discover). Debit cards are NOT accepted.
              </Text>
            </View>
            <View style={styles.subContainer}>
              <CheckBox
                style={styles.checkbox}
                value={this.state.checked3}
                onValueChange={() => this.checkboxTest3()}
              />
              <Text style={styles.termsText}>
                Couples who must have lived together for one year.
              </Text>
            </View>
            <View style={styles.subContainer}>
              <CheckBox
                style={styles.checkbox}
                value={this.state.checked4}
                onValueChange={() => this.checkboxTest4()}
              />
              <Text style={styles.termsText}>
                We/I consent to being contacted by Welk Resort Group, Inc.
              </Text>
            </View>
            <View style={styles.subContainer}>
              <CheckBox
                style={styles.checkbox}
                value={this.state.checked5}
                onValueChange={() => this.checkboxTest5()}
              />
              <Text style={styles.termsText}>
                ("Welk"), it's affiliates, representatives, or agents, for
                marketing purposes via all channels of communication, including
                text messages(text/data charges may apply) and e-emailing
                optout@welkgroup.com.
              </Text>
            </View>
            <View style={styles.subContainer}>
              <CheckBox
                style={styles.checkbox}
                value={this.state.checked6}
                onValueChange={() => this.checkboxTest6()}
              />
              <Text style={styles.termsText}>
                We/I authorize Welk and its affiliates, representatives, or
                agents, to use/transfer/share with each other and third-party
                nonaffiliates my personal information for marketing, research,
                consumer reports, and promotional eligibility purposes. I may
                opt out by e-mailing optoutprofile@welkgroup.com
              </Text>
            </View>
            <View style={styles.subContainer}>
              <CheckBox
                style={styles.checkbox}
                value={this.state.checked7}
                onValueChange={() => this.checkboxTest7()}
              />
              <Text style={styles.termsText}>
                We/I understand all of the terms and conditions of this offer
                and Details of Participation as shown here. Anything not listed
                on this form will not be including in the presentation.{' '}
              </Text>
            </View>
            <View style={styles.fixToText}>
              <View style={styles.button} />
              <View style={styles.button} />
              <View style={styles.button}>
                <Button
                  color="gray"
                  title="Cancel"
                  onPress={() => navigate('Tour')}
                />
              </View>

              <View style={styles.button}>
                <Button
                  color="#1C313A"
                  title="Confirm"
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
    marginVertical: 5,
  },
  heading: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '800',
    padding: 10,
    marginLeft: 10,
  },
  checkbox: {
    marginLeft: 20,
    padding: 10,
  },
  termsText: {
    flex: 6,
    padding: 5,
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    alignContent: 'flex-start',
  },
  button: {
    flex: 1,
    color: '#1C313A',
    borderRadius: 25,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  fixToText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginEnd: 25,
  },
});

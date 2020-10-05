import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
const blue = '#2553AC';
const lightBlue = '#5C7CBA';
export default class GroupExams extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <SafeAreaView>
          <ScrollView style={styles.ScrollView}>
            <View style={styles.ListItem}>
              <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}> I Qrup</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.ListItem}>
              <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}> II Qrup </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.ListItem}>
              <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}> III Qrup </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.ListItem}>
              <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}> IV Qrup </Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ScrollView: {
    // backgroundColor: 'red',
    // justifyContent:"center",
    // alignItems:"center",
    // alignItems: 'center',
  },
  ListItem: {
    textAlign: 'center',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: blue,
    padding: 10,
    minWidth: 300,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: blue,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 10,
    borderWidth: 3,
    borderColor: lightBlue,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
  },
});

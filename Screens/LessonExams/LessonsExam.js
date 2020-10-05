import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import {Colors} from '../../Config/Colors'
export default class LessonsExam extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <SafeAreaView>
          <ScrollView style={styles.ScrollView}>
            <View style={styles.ListItem}>
              <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}> Riyaziyyat </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.ListItem}>
              <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}> Azərbaycan Dili </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.ListItem}>
              <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}> İngilis Dili </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.ListItem}>
              <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}> Kimya </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.ListItem}>
              <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}> Fizka </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.ListItem}>
              <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}> Tarix </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.ListItem}>
              <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}> Coğrafiya </Text>
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
    backgroundColor: Colors.primary,
    padding: 10,
    minWidth: 300,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    borderWidth: 2,
    borderColor: Colors.secondary,
  },
  buttonText: {
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: 25,
  },
});

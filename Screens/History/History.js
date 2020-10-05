import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import {Colors} from '../../Config/Colors';

function CircleOfExam() {
  return (
    <View style={styles.infoOfExam}>
      <View style={styles.forCentering}>
        <View style={[styles.elementOfInfo, {backgroundColor: Colors.primary}]}>
          <Text style={styles.textOfNumber}>111</Text>
        </View>
        <Text style={styles.textOfForCentering}>Sual sayı</Text>
      </View>
      <View style={styles.forCentering}>
        <View
          style={[
            styles.elementOfInfo,
            {backgroundColor: Colors.colorOfCorrect},
          ]}>
          <Text style={styles.textOfNumber}>1</Text>
        </View>
        <Text
          style={[styles.textOfForCentering, {color: Colors.colorOfCorrect}]}>
          Düzgün
        </Text>
      </View>
      <View style={styles.forCentering}>
        <View
          style={[
            styles.elementOfInfo,
            {backgroundColor: Colors.colorOfWrong},
          ]}>
          <Text style={styles.textOfNumber}>1</Text>
        </View>
        <Text style={[styles.textOfForCentering, {color: Colors.colorOfWrong}]}>
          Yanlış
        </Text>
      </View>
    </View>
  );
}
function DetailedInfo() {
  return (
    <View>
      <Text style={styles.textStyle}>
        <Text style={styles.leftText}>İmtahanın növü: </Text>
        <Text>Qrup İmtahanı</Text>
      </Text>
      <Text style={styles.textStyle}>
        <Text style={styles.leftText}>Qrup: </Text>
        <Text>I Qrup </Text>
      </Text>
      <Text style={styles.textStyle}>
        <Text style={styles.leftText}>Başlandı: </Text>
        <Text>12:30,11,10,2020</Text>
      </Text>
      <Text style={styles.textStyle}>
        <Text style={styles.leftText}>Bitdi: </Text>
        <Text>13:30,11,10,2020</Text>
      </Text>
    </View>
  );
}

export default class History extends Component {
  render() {
    const listOfItems = [];
    for (let i = 0; i < 30; i++) {
      listOfItems.push(
        <View key={i} style={styles.ListItem}>
          <CircleOfExam></CircleOfExam>
          <DetailedInfo></DetailedInfo>
        </View>,
      );
    }

    return (
      <View style={{flex: 1}}>
        <SafeAreaView>
          <ScrollView style={styles.ScrollView}>{listOfItems}</ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ListItem: {
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    // borderWidth: 2,
    // borderColor: Colors.secondary,
  },
  infoOfExam: {
    flex: 1,
    // backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    // borderWidth: 2,
    // borderColor: Colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  elementOfInfo: {
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: Colors.secondary,
    // borderWidth: 2,
  },
  textOfNumber: {
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: 30,
  },
  forCentering: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOfForCentering: {
    fontWeight: 'bold',
    color: Colors.primary,
    fontSize: 20,
  },
  //
  textStyle: {
    color: 'white',
    alignItems: 'center',
    marginVertical: 5,
    color: Colors.black,
  },
  leftText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: Colors.black,
  },
});

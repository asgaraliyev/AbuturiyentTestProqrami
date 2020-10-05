import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  TouchableHighlight,
} from 'react-native';
import {Colors} from '../../Config/Colors'
const FirstPage = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.app}>
        <View>
          <Image
            source={{
              uri: 'https://airtransfer.az/assets/images/partner-logo/dim.jpg',
            }}
            style={{width: 200, height: 100}}
          />
        </View>
        <View>
          <TouchableHighlight onPress={()=>{navigation.navigate("LessonExams")}} style={styles.button}>
            <Text style={styles.menuItemText}>Fənn imtahanı</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>{navigation.navigate("GroupExams")}} style={styles.button}>
            <Text style={styles.menuItemText}>Qrup Imtahanı</Text>
          </TouchableHighlight>
          <TouchableHighlight  onPress={()=>{navigation.navigate("History")}} style={styles.button}>
            <Text style={styles.menuItemText}>Tarixçə</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.primary,
    borderRadius: 50,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 10,
    textAlign: 'center',
  },
  menuItemText: {
    textAlign: 'center',
    fontSize: 30,
    color:Colors.white,
    fontWeight: 'bold',
  },
});

export default FirstPage;

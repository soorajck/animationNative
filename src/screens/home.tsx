import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Screen4: undefined;
  Screen5: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList>;

const Home = ({navigation, route}: Props) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('Screen1');
        }}>
        <Text style={styles?.buttonText}>Screen 1</Text>
      </Pressable>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('Screen2');
        }}>
        <Text style={styles?.buttonText}>Screen 2</Text>
      </Pressable>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('Screen3');
        }}>
        <Text style={styles?.buttonText}>Screen 3</Text>
      </Pressable>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('Screen4');
        }}>
        <Text style={styles?.buttonText}>Screen 4</Text>
      </Pressable>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('Screen5');
        }}>
        <Text style={styles?.buttonText}>Screen 5</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0c3259',
  },

  buttonStyle: {
    borderRadius: 30,
    backgroundColor: 'blue',
    textAlign: 'center',
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
export default Home;

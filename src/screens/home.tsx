import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Screen4: undefined;
  Screen5: undefined;
  Screen6: undefined;
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
        <Text style={styles?.buttonText}>Bounce</Text>
      </Pressable>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('Screen2');
        }}>
        <Text style={styles?.buttonText}>Loader</Text>
      </Pressable>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('Screen3');
        }}>
        <Text style={styles?.buttonText}>Scroll Image</Text>
      </Pressable>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('Screen4');
        }}>
        <Text style={styles?.buttonText}>Carousel</Text>
      </Pressable>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('Screen5');
        }}>
        <Text style={styles?.buttonText}>Landing page</Text>
      </Pressable>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('Screen6');
        }}>
        <Text style={styles?.buttonText}>Shared Animation </Text>
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
    width: '50%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
export default Home;

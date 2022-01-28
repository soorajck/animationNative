import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';

const width = 300;

const Screen2 = () => {
  const [time, setTime] = useState<any>(2000);
  const progress = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    Animated.timing(progress, {
      toValue: 100,
      duration: time * 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Progress Bar</Text>

      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progress.interpolate({
                inputRange: [0, 100],
                outputRange: [0, width],
              }),
            },
          ]}></Animated.View>
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Enter time in seconds"
        onChangeText={value => {
          setTime(value);
        }}
      />

      <View style={styles.buttonWrapper}>
        <Pressable onPress={handlePress} style={[styles.buttonContainer]}>
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            progress.setValue(0);
          }}
          style={[styles.buttonContainer]}>
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  progressBarContainer: {
    width: width,
    height: 20,
    backgroundColor: '#d7f5e6',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  progressBar: {
    height: 20,
    backgroundColor: '#29f036',
    borderRadius: 5,
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width,
    marginTop: 20,
  },
  buttonContainer: {
    borderRadius: 25,
    padding: 10,
    backgroundColor: '#4bb5e3',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },

  textInput: {
    width: '80%',
    marginTop: 30,
    height: 40,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
  },
});

export default Screen2;

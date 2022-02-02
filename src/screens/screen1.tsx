import {View, Text, StyleSheet, Pressable, Animated} from 'react-native';
import React, {useRef} from 'react';
import {SharedElement} from 'react-navigation-shared-element';
const Screen1 = () => {
  const value = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(value, {
          toValue: -10,
          duration: 120,
          useNativeDriver: true,
        }),
        Animated.timing(value, {
          toValue: 0,
          duration: 120,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 5,
      },
    ).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <SharedElement id="bounce">
          <Text style={styles.headingText}>Bounce </Text>
        </SharedElement>
      </View>

      <Animated.View style={[{transform: [{translateY: value}]}]}>
        <Pressable onPress={handlePress} style={[styles.buttonContainer]}>
          <Text style={styles.buttonText}>Click Me</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    borderRadius: 25,
    padding: 10,
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  heading: {
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    top: 20,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Screen1;

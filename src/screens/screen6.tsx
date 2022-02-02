import {View, Text, StyleSheet, Pressable, Animated, Image} from 'react-native';
import React, {useRef} from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
type RootStackParamList = {
  Screen6Item: {url: any};
};

type Props = NativeStackScreenProps<RootStackParamList>;
const Screen6 = ({navigation, route}: Props) => {
  const value = useRef(new Animated.Value(0)).current;

  const handleItemClick = (item: any) => {
    navigation.navigate('Screen6Item', {
      url: item,
    });
  };

  const ImageUrlList = [
    'https://images.unsplash.com/photo-1558883493-8b86ff880fec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1550439847-f86a062b245c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        {ImageUrlList.map((item, index) => {
          return (
            <Pressable
              onPress={() => {
                handleItemClick(item);
              }}>
              <SharedElement id={item}>
                <Image
                  source={{
                    uri: item,
                  }}
                  style={{
                    height: 200,
                    width: 200,
                    margin: 20,
                  }}
                />
              </SharedElement>
            </Pressable>
          );
        })}
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

export default Screen6;

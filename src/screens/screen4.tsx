import {View, StyleSheet, Animated, Dimensions, ScrollView} from 'react-native';
import React, {useRef, useState} from 'react';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const ImageUrlList = [
  'https://images.unsplash.com/photo-1558883493-8b86ff880fec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1550439847-f86a062b245c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1875&q=80',
  'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
];

const Screen4 = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Animated.ScrollView
      horizontal
      snapToInterval={Width}
      pagingEnabled
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: true,
      })}>
      {ImageUrlList.map((item, index) => {
        const inputRange = [
          (index - 1) * Width,
          index * Width,
          (index + 1) * Width,
        ];

        const translateX = scrollX.interpolate({
          inputRange,
          outputRange: [Width * 0.5, 0, -Width * 0.5],
        });
        return (
          <View style={styles.container}>
            <Animated.View key={index} style={[styles.imageContainer]}>
              <Animated.Image
                source={{uri: item}}
                resizeMode={'cover'}
                style={[
                  styles.image,
                  {
                    transform: [{translateX}],
                  },
                ]}
              />
            </Animated.View>
          </View>
        );
      })}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebf3f5',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: Width,
    height: Height,
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 10,
    borderColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  image: {
    height: Height / 2,
    width: Width * 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen4;

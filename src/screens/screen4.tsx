import {View, StyleSheet, Animated, Dimensions, ScrollView} from 'react-native';
import React, {useRef, useState} from 'react';

const Width = Dimensions.get('window').width;

const ImageUrlList = [
  'https://images.unsplash.com/photo-1558883493-8b86ff880fec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1550439847-f86a062b245c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1875&q=80',
  'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
];

const Screen4 = () => {
  return (
    <ScrollView horizontal snapToInterval={Width} pagingEnabled>
      {ImageUrlList.map((item, index) => {
        return (
          <View style={styles.container}>
            <Animated.View key={index} style={[styles.imageContainer]}>
              <Animated.Image source={{uri: item}} style={styles.image} />
            </Animated.View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: Width,
  },
  imageContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  image: {
    height: 400,
  },
});

export default Screen4;

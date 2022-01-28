import {View, Text, StyleSheet, Animated, Dimensions} from 'react-native';
import React, {useRef, useState} from 'react';

const HEIGHT = Dimensions.get('window').height / 2;

const Screen3 = () => {
  const scroll = useRef(new Animated.Value(0)).current;
  console.log(scroll);
  return (
    <View style={styles.container}>
      <Animated.Image
        style={[
          styles.image,
          {
            minHeight: HEIGHT / 4,
            height: scroll.interpolate({
              inputRange: [0, HEIGHT / 4, HEIGHT / 3, HEIGHT / 2],
              outputRange: [HEIGHT, HEIGHT / 2, HEIGHT / 3, HEIGHT / 4],
            }),
          },
        ]}
        source={{
          uri: 'https://www.creatopy.com/blog/wp-content/uploads/2016/06/images-for-banner-ads-1024x527.png',
        }}
      />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scroll}}}],
          {
            useNativeDriver: false,
          },
        )}
        style={[styles.contentContainer]}
        scrollEventThrottle={16}>
        <Text style={styles.contentText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          tempora temporibus libero voluptatem, tenetur similique eligendi
          voluptas, dolorum, sapiente aperiam delectus. Quidem nulla officia
          exercitationem et ea neque fugit quam? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis tempora temporibus libero
          voluptatem, tenetur similique eligendi voluptas, dolorum, sapiente
          aperiam delectus. Quidem nulla officia exercitationem et ea neque
          fugit quam? r Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officiis tempora temporibus libero voluptatem, tenetur similique
          eligendi voluptas, dolorum, sapiente aperiam delectus. Quidem nulla
          officia exercitationem et ea neque fugit quam? r Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Officiis tempora temporibus libero
          voluptatem, tenetur similique eligendi voluptas, dolorum, sapiente
          aperiam delectus. Quidem nulla officia exercitationem et ea neque
          fugit quam? voluptatem, tenetur similique eligendi voluptas, dolorum,
          sapiente aperiam delectus. Quidem nulla officia exercitationem et ea
          neque fugit quam? r Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Officiis tempora temporibus libero voluptatem, tenetur similique
          eligendi voluptas, dolorum, sapiente aperiam delectus. Quidem nulla
          officia exercitationem et ea neque fugit quam? r Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Officiis tempora temporibus libero
          voluptatem, tenetur similique eligendi voluptas, dolorum, sapiente
          aperiam delectus. Quidem nulla officia exercitationem et ea neque
          fugit quam? exercitationem et ea neque fugit quam? voluptatem, tenetur
          similique eligendi voluptas, dolorum, sapiente aperiam delectus.
          Quidem nulla officia exercitationem et ea neque fugit quam? r Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora
          temporibus libero voluptatem, tenetur similique eligendi voluptas,
          dolorum, sapiente aperiam delectus. Quidem nulla officia
          exercitationem et ea neque fugit quam? r Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis tempora temporibus libero
          voluptatem, tenetur similique eligendi voluptas, dolorum, sapiente
          aperiam delectus. Quidem nulla officia exercitationem et ea neque
          fugit quam? exercitationem et ea neque fugit quam? voluptatem, tenetur
          similique eligendi voluptas, dolorum, sapiente aperiam delectus.
          Quidem nulla officia exercitationem et ea neque fugit quam? r Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora
          temporibus libero voluptatem, tenetur similique eligendi voluptas,
          dolorum, sapiente aperiam delectus. Quidem nulla officia
          exercitationem et ea neque fugit quam? r Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis tempora temporibus libero
          voluptatem, tenetur similique eligendi voluptas, dolorum, sapiente
          aperiam delectus. Quidem nulla officia exercitationem et ea neque
          fugit quam?
        </Text>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  contentContainer: {
    padding: 20,

    backgroundColor: 'white',
  },
  contentText: {
    fontSize: 20,
  },
  image: {
    width: '100%',
    height: HEIGHT,
    resizeMode: 'cover',
    marginBottom: 20,
  },
});

export default Screen3;

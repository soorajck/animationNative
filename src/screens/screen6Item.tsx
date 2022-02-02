import {View, Text, StyleSheet, Pressable, Animated, Image} from 'react-native';
import React, {useRef} from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
type RootStackParamList = {
  Screen6Item: {url: any};
};

type Props = NativeStackScreenProps<RootStackParamList>;
const Screen6Item = ({navigation, route}: Props) => {
  const value = useRef(new Animated.Value(0)).current;

  const {url}: any = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <SharedElement id={url}>
          <Image
            source={{
              uri: url,
            }}
            style={{
              height: 200,
              width: 400,
            }}
          />
        </SharedElement>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            tempora temporibus libero voluptatem, tenetur similique eligendi
            voluptas, dolorum, sapiente aperiam delectus. Quidem nulla officia
            exercitationem et ea neque fugit quam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officiis tempora temporibus libero
            voluptatem, tenetur similique eligendi voluptas, dolorum, sapiente
            aperiam delectus. Quidem nulla officia exercitationem et ea neque
            fugit quam? r Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Officiis tempora temporibus libero voluptatem, tenetur tenetur
            similique eligendi voluptas, dolorum, sapiente aperiam
          </Text>
        </View>
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
  contentText: {
    fontSize: 20,

    marginTop: 20,
  },
  contentContainer: {
    marginTop: 30,
    marginHorizontal: 20,
  },
});

export default Screen6Item;

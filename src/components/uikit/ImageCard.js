import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {w} from '../../../constants';

const ImageCard = ({data}) => {
  const {h1, cover, container, sub} = styles;
  const {image, name} = data;
  return (
    <View style={container}>
      <View style={sub}>
        <Image
          style={cover}
          source={{uri: image}}
        />
      </View>
      <Text style={h1}>{name.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  sub: {
    shadowColor: '#000',
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1.4,
    //backgroundColor: 'gold',
    width: w / 2,
  },
  h1: {
    fontSize: 18,
    alignItems: 'center',
    textAlign: 'center',
    width: w / 2,
    fontWeight:'700',

  },
  cover: {
    marginTop: 25,
    marginBottom: 15,
    marginLeft: 15,
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10,


  },
});

export {ImageCard};

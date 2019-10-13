import React from 'react';
import {Text, StyleSheet, View, Imagine} from 'react-native';
import {w} from '../../../constants';

const ImageCard = () => {
  const {h1, cover} = styles;
  return (
    <View>
      <Imagine styles={cover} source={{uti:}}/>
      <Text style={h1}>Image</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 18,
    alignItems: 'center',
    textAlign: 'center',
    width: w / 2.4,
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
  },
});

export {ImageCard};

// import
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// body

const Header = ({title}) => {
  const {viewStyle, textStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{title}</Text>
    </View>
  );
};
// export

//style

const styles = StyleSheet.create({
  viewStyle: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#498ff4',
    //paddingLeft: 22,
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: {wight: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  boxStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 28,
    textAlign: 'center',
    color: 'white',
    margin: 10,
    //backgroundColor: 'white',
  },
});

export {Header}

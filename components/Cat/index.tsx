import React from 'react';
import {View, Text, Image} from 'react-native';
import {CatProps} from '../../types/catTypes';
import globalStyles from '../../styles/global';

const Cat = (props: CatProps) => {
  const {name, image} = props;
  return (
    <View style={{marginBottom: 10}}>
      <Text style={globalStyles.subtitle}>{name}</Text>
      <Image source={{uri: image}} style={globalStyles.catImage} />
    </View>
  );
};

export default Cat;

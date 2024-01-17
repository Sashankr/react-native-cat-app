import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {CatProps} from '../../types/catTypes';
import globalStyles from '../../styles/global';

const Cat = (props: CatProps) => {
  const {name, image} = props;
  return (
    <View style={styles.catContainer}>
      <Text style={globalStyles.subtitle}>{name}</Text>
      <Image source={{uri: image}} style={globalStyles.catImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  catContainer: {
    marginBottom: 10,
  },
});

export default Cat;

import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface HomeScreenProps {}

const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  );
};
export default HomeScreen;

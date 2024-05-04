import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Stack} from 'expo-router'

const HelloPage = () => {
  return (
    <View style={styles.container}>
       <Stack.Screen options={{headerTitle: `Welcome`}} />
      <Text style={styles.text}>Hello</Text>
      <Text>Working</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
});

export default HelloPage;

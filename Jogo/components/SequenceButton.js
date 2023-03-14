import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Colors } from '../utils/Colors';

const SequenceButton = ({ number, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark,
    margin: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 30,
  },
});

export default SequenceButton;

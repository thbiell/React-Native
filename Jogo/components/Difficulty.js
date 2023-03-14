import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from './Button';
import { Difficulty } from '../utils/Difficulty';
import { Colors } from '../utils/Colors';

const DifficultyButton = ({ difficulty, isSelected, onPress }) => {
  const color = isSelected ? Colors.primary : Colors.background;
  const textColor = isSelected ? Colors.white : Colors.primary;

  return (
    <View style={styles.container}>
      <Button text={Difficulty[difficulty]} onPress={onPress} color={color} />
      <Text style={[styles.text, { color: textColor }]}>Level {difficulty + 1}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  }
});

export default DifficultyButton;

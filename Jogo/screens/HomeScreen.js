import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { setDifficulty } from '../redux/gameSlice';
import { Difficulty } from '../utils/Difficulty';
import { Colors } from '../utils/Colors';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handlePressStart = (difficulty) => {
    dispatch(setDifficulty(difficulty));
    navigation.navigate('Game');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simon</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, { backgroundColor: Colors.green }]}
          onPress={() => handlePressStart(Difficulty.EASY)}
        >
          <Text style={styles.buttonText}>Easy</Text>
        </Pressable>
        <Pressable
          style={[styles.button, { backgroundColor: Colors.yellow }]}
          onPress={() => handlePressStart(Difficulty.MEDIUM)}
        >
          <Text style={styles.buttonText}>Medium</Text>
        </Pressable>
        <Pressable
          style={[styles.button, { backgroundColor: Colors.red }]}
          onPress={() => handlePressStart(Difficulty.HARD)}
        >
          <Text style={styles.buttonText}>Hard</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 64,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 32,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
  },
});

export default HomeScreen;

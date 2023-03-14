import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetGame } from '../redux/gameSlice';
import { Colors } from '../utils/Colors';

const GameOverScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const score = useSelector(state => state.game.score);

  const handlePlayAgainPress = () => {
    dispatch(resetGame());
    navigation.navigate('Game');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over</Text>
      <Text style={styles.score}>Score: {score}</Text>
      <Pressable style={styles.button} onPress={handlePlayAgainPress}>
        <Text style={styles.buttonText}>Play Again</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    color: Colors.white
  },
  score: {
    fontSize: 30,
    marginBottom: 30,
    color: Colors.white
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default GameOverScreen;

import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToUserSequence, resetUserSequence, increaseScore, setIsPlaying, setIsGameOver } from '../redux/gameSlice';
import { Colors } from '../utils/Colors';
import { Sequencer } from '../utils/Sequencer';
import { Audio } from 'expo-av';

const GameScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const sequence = useSelector(state => state.game.sequence);
  const userSequence = useSelector(state => state.game.userSequence);
  const score = useSelector(state => state.game.score);
  const isPlaying = useSelector(state => state.game.isPlaying);
  const isGameOver = useSelector(state => state.game.isGameOver);
  const soundMap = {
    [Colors.green]: new Audio.Sound(),
    [Colors.red]: new Audio.Sound(),
    [Colors.yellow]: new Audio.Sound(),
    [Colors.blue]: new Audio.Sound(),
    [Colors.purple]: new Audio.Sound(),
  };

  useEffect(() => {
    const loadSounds = async () => {
      try {
        await soundMap[Colors.green].loadAsync(require('../assets/sounds/green.mp3'));
        await soundMap[Colors.red].loadAsync(require('../assets/sounds/red.mp3'));
        await soundMap[Colors.yellow].loadAsync(require('../assets/sounds/yellow.mp3'));
        await soundMap[Colors.blue].loadAsync(require('../assets/sounds/blue.mp3'));
        await soundMap[Colors.purple].loadAsync(require('../assets/sounds/purple.mp3'));
      } catch (error) {
        console.log(error);
      }
    };

    loadSounds();

    return () => {
      Object.values(soundMap).forEach(async (sound) => {
        try {
          await sound.unloadAsync();
        } catch (error) {
          console.log(error);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      dispatch(setIsGameOver(false));
      dispatch(resetUserSequence());
      const newSequence = Sequencer.generateSequence(score.difficulty);
      dispatch(addToUserSequence(newSequence[0]));
      dispatch(increaseScore());
      playSequence(newSequence);
    }
  }, [isPlaying]);

  const playSound = async (color) => {
    try {
      const status = await soundMap[color].playAsync();
      if (status.isPlaying) {
        console.log(`Just played the ${color} sound!`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const playSequence = async (sequence) => {
    for (let i = 0; i < sequence.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 500));
      await playSound(sequence[i]);
    }
  };

  const handleColorPress = async (color) => {
    await playSound(color);
    dispatch(addToUserSequence(color));
    if (userSequence.length === sequence.length) {
      if (Sequencer.isSequenceEqual(sequence, userSequence)) {
        const newSequence = Sequencer.generateSequence(score.difficulty + 1);
        dispatch(addToUserSequence(newSequence[0]));
        dispatch(increaseScore());
        playSequence(newSequence);
      } else {
        handleGameOver();
      }
    }
  };

  const handlePlayButtonPress = () => {
    dispatch(setIsPlaying(true));
  };

  const handleGameOver = () => {
    dispatch(setIsPlaying(false));
    dispatch(setIsGameOver(true));
  };

  return (
    <View style={styles.container}>
      <View style={styles.gameContainer}>
        <Text style={styles.scoreText}>Score: {score.value}</Text>
        <View style={styles.sequenceContainer}>
          {sequence.map((color, index) => (
            <Pressable
            key={index}
            style={[styles.colorButton, { backgroundColor: color }]}
            onPress={() => handleColorPress(color)}
            disabled={!isPlaying || isGameOver}
          />
        ))}
    </View>
    <View style={styles.buttonContainer}>
      <Pressable
        style={[styles.playButton, { backgroundColor: Colors.green }]}
        onPress={handlePlayButtonPress}
        disabled={isPlaying || isGameOver}
      >
        <Text style={styles.playButtonText}>Play</Text>
      </Pressable>
    </View>
  </View>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: Colors.darkBlue,
alignItems: 'center',
justifyContent: 'center',
},
gameContainer: {
width: '90%',
height: '90%',
backgroundColor: Colors.lightBlue,
borderRadius: 20,
alignItems: 'center',
justifyContent: 'center',
},
scoreText: {
fontSize: 24,
fontWeight: 'bold',
color: Colors.white,
marginBottom: 20,
},
sequenceContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
alignItems: 'center',
justifyContent: 'center',
marginBottom: 40,
},
colorButton: {
width: 100,
height: 100,
borderRadius: 50,
margin: 10,
},
buttonContainer: {
alignItems: 'center',
justifyContent: 'center',
},
playButton: {
width: 150,
height: 50,
borderRadius: 25,
alignItems: 'center',
justifyContent: 'center',
marginTop: 20,
},
playButtonText: {
fontSize: 24,
fontWeight: 'bold',
color: Colors.white,
},
});

export { GameScreen };
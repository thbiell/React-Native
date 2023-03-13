import { Audio } from 'expo-av';

const soundMap = {
  C: require('../assets/sounds/do-80236.mp3'),
  D: require('../assets/sounds/re-78500.mp3'),
  E: require('../assets/sounds/mi-80239.mp3'),
  F: require('../assets/sounds/fa-78409.mp3'),
  G: require('../assets/sounds/sol-101774.mp3'),
  A: require('../assets/sounds/la-80237.mp3'),
  B: require('../assets/sounds/si-80238.mp3'),
};

export const playNote = async (note) => {
  try {
    const soundObject = new Audio.Sound();
    await soundObject.loadAsync(soundMap[note]);
    await soundObject.playAsync();
  } catch (error) {
    console.error(error);
  }
};

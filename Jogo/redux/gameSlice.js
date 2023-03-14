import { createSlice } from '@reduxjs/toolkit';
import { Sequencer } from '../utils/Sequencer';

const initialState = {
  difficulty: '',
  sequence: [],
  userSequence: [],
  score: 0,
  isPlaying: false,
  isGameOver: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
      state.sequence = Sequencer.generateSequence(action.payload);
    },
    addToUserSequence: (state, action) => {
      state.userSequence.push(action.payload);
    },
    resetUserSequence: (state) => {
      state.userSequence = [];
    },
    increaseScore: (state) => {
      state.score += 1;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setIsGameOver: (state, action) => {
      state.isGameOver = action.payload;
    },
    resetGame: () => initialState,
  },
});

export const { 
  setDifficulty,
  addToUserSequence,
  resetUserSequence,
  increaseScore,
  setIsPlaying,
  setIsGameOver,
  resetGame,
} = gameSlice.actions;

export default gameSlice.reducer;

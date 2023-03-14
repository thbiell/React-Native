import { Difficulty } from './Difficulty';
import { Colors } from './Colors';

const Sequencer = {
    generateSequence: (difficulty) => {
        let sequence = [];
        let possibleColors = [Colors.green, Colors.red, Colors.yellow, Colors.blue];
        let maxIndex = 0;

        switch (difficulty) {
            case Difficulty.EASY:
                maxIndex = 3;
                break;


            case Difficulty.MEDIUM:
                maxIndex = 7;
                possibleColors = [Colors.green, Colors.red, Colors.yellow, Colors.blue];
                break;
            case Difficulty.HARD:
                maxIndex = 15;
                possibleColors = [Colors.green, Colors.red, Colors.yellow, Colors.blue, Colors.purple];
                break;
            default:
                break;
        }

        for (let i = 0; i <= maxIndex; i++) {
            const randomIndex = Math.floor(Math.random() * possibleColors.length);
            sequence.push(possibleColors[randomIndex]);
        }

        return sequence;
    },
};

export { Sequencer };

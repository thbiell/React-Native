import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput, Text, Platform } from 'react-native';
import { playNote } from '../utils/sound';
import { playSequence } from '../utils/sequencer';
import styles from '../Styles/styles';

export function MainScreen() {

  // Declaração dos estados utilizados no componente
  const [sequence, setSequence] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);

  // Array com as notas válidas
  const validNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  // Tamanho dos botões para dispositivos móveis
  const buttonSize = Platform.OS === 'ios' || Platform.OS === 'android' ? 45 : undefined;

  // Função que toca a sequência de notas
  const handlePlaySequence = async () => {
    setIsPlaying(true);
    await playSequence(sequence, playNote);
    setIsPlaying(false);
  };

  // Função que toca uma nota quando o botão correspondente é pressionado
  const handleNotePress = async (note, index) => {
    if (isPlaying) return;
    setActiveButtonIndex(index);
    await playNote(note);
    setActiveButtonIndex(-1);
  };

  // Função que limpa a sequência de notas
  const handleClearSequence = () => {
    setSequence('');
  };

  // Função que atualiza o estado "sequence" quando o usuário digita uma nova sequência de notas
  const handleSequenceChange = (newSequence) => {
    setSequence(newSequence);
  };

  // Efeito colateral que toca a sequência de notas quando o estado "isPlaying" é atualizado
  useEffect(() => {
    if (!isPlaying) return;
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex === sequence.length) {
        clearInterval(intervalId);
        setActiveButtonIndex(-1);
        setIsPlaying(false);
        return;
      }

      const currentNote = sequence[currentIndex].toUpperCase();
      if (!validNotes.includes(currentNote)) {
        currentIndex++;
        return;
      }

      setActiveButtonIndex(validNotes.indexOf(currentNote));
      playNote(currentNote);

      currentIndex++;
    }, 500);

    return () => clearInterval(intervalId);
  }, [sequence, isPlaying]);

  // Função que renderiza os botões de notas
  const renderNoteButtons = () => {
    return validNotes.map((note, index) => (
      <TouchableOpacity
        style={[
          styles.button,
          activeButtonIndex === index ? styles.activeButton : null,
          isPlaying ? { borderColor: 'white' } : {},
          { width: buttonSize, height: buttonSize }
        ]}
        key={note}
        onPress={() => handleNotePress(note, index)}
      >
        <Text style={[styles.buttonText, activeButtonIndex === index ? styles.activeButtonText : null]}>{note}</Text>
      </TouchableOpacity>
    ));
  };

  // Retorno do componente
  return (
    <View style={[styles.container, localStyles.container]}>
      <View style={localStyles.notesContainer}>
        {renderNoteButtons()}
      </View>
      <TextInput
        style={styles.sequenceInput}
        onChangeText={handleSequenceChange}
        value={sequence}
        placeholder="Digite a sequência"
      />
      <View style={localStyles.othersContainer}>
        <TouchableOpacity
          style={[styles.button, styles.playButton]}
          onPress={handleClearSequence}
        >
          <Text style={[styles.buttonText, styles.playButtonText]}>Limpar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.playButton]}
          onPress={() => setIsPlaying(true)}
          disabled={isPlaying || sequence.length === 0}
        >
          <Text style={[styles.buttonText, styles.playButtonText]}>Tocar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.validNotesText}>Entradas válidas: {validNotes.join(', ')}</Text>
    </View>
  );
};
// Estilizações locais
const localStyles = {
  container: {
    justifyContent: 'center',
  },
  notesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginVertical: 80,
    gap: 10,
  },
  othersContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
};


//CCGGAAGG FFEEDDC GGFFEED GGFFEED CCGGAAGG FFEE DD C
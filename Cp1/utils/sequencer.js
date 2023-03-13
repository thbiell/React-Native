export const validNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

export const playSequence = async (sequence, playNote) => {
  const notes = sequence.trim().split('');
  const pauseDuration = 300;

  for (const note of notes) {
    if (validNotes.includes(note.toUpperCase())) {
      await playNote(note.toUpperCase());
    } else {
      await new Promise(resolve => setTimeout(resolve, pauseDuration));
    }
    await new Promise(resolve => setTimeout(resolve, pauseDuration));
  }
};

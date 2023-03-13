import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#aabee9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '10%',
    gap: 10,
  },
  button: {
    backgroundColor: '#58728a',
    borderRadius: 15,
    padding: '3.5%',
    
  },
  playButton: {
    backgroundColor: '#58728a',
    borderRadius: 10,
    padding: '1%',
    margin: '1%',
    marginTop: '1%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    
  },
  sequenceInput: {
    height: '5%',
    width: '45%',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    marginBottom: 20,
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#58728a',
  },
  
  validNotesText: {
    fontSize: 16,
    marginBottom: '10%',
    marginVertical: 5,
  },
  playButtonText:{
    color: '#fff',
    textAlign: 'center',
  },
  activeButton: {
    backgroundColor: 'black',
    borderWidth: 3,
    borderColor: 'black',
  },
  activeButtonText: {
    color: '#fff',
  },
});

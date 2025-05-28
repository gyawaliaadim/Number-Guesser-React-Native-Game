import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

type ButtonProps = {
  handleLinkPress: () => void;
  text: string;

};

const Button: React.FC<ButtonProps> = ({ handleLinkPress, text }) => {
  return (
        <TouchableOpacity onPress={handleLinkPress} style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({

    
  button: {
    backgroundColor: Colors.tertiory,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
    width: 150,
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
})
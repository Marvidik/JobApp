import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

export default function NiceInputField({source,placeholder,decision}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={decision}
        // Add any other TextInput props you need
      />
      {source &&<Image
        source={source}
        style={styles.image}
      />}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  image: {
    width: 20, // Adjust the width as needed
    height: 20, // Adjust the height as needed
    marginHorizontal: 5, // Adjust the margin as needed
  },
});

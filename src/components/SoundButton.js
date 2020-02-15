import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import { Audio } from "expo-av";

const SoundButton = props => {
  const [isPlaying, setPlaying] = useState(false);

  const playSound = async pathToSound => {
    setPlaying(true);
    //Play sound

    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require("../../assets/sound/test.m4a"));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  };

  return (
    <ThemeProvider>
      <Button
        buttonStyle={styles.buttonStyle}
        title={props.title}
        type="outline"
        loading={isPlaying}
        onPress={playSound}
      />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginHorizontal: 20,
    marginVertical: 20,
    width: 50,
    height: 50
  }
});

export default SoundButton;

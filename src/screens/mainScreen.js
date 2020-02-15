import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";

import SoundButton from "../components/SoundButton";

const MainScreen = () => {
  return (
    <ThemeProvider>
      <View style={styles.viewStyle}>
        <SoundButton soundBite="test" title="play test" />
        <SoundButton soundBite="test" title="play test" />
        <SoundButton soundBite="test" title="play test" />
        <SoundButton soundBite="test" title="play test" />
        <SoundButton soundBite="test" title="play test" />
        <SoundButton soundBite="test" title="play test" />
        <SoundButton soundBite="test" title="play test" />
        <SoundButton soundBite="test" title="play test" />
        <SoundButton soundBite="test" title="play test" />
        <SoundButton soundBite="test" title="play test" />
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  }
});

export default MainScreen;

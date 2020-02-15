import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainScreen from "./src/screens/mainScreen";

const navigator = createStackNavigator(
  {
    Main: MainScreen
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      title: "Soundboard"
    }
  }
);

export default createAppContainer(navigator);

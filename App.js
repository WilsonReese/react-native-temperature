import { ImageBackground, Text, View } from "react-native";
import { s } from "./App.style";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import hotBackground from "./assets/hot.png"

export default function App() {
  return (
    <ImageBackground style={s.backgroundImage} source={hotBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <Text>Temperature</Text>
            <Text>Input</Text>
            <Text>Button</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

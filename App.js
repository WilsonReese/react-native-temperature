import { ImageBackground, Text, View } from "react-native";
import { s } from "./App.style";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import hotBackground from "./assets/hot.png";
import { Input } from "./components/Input/Input";
import { useState } from "react";
import { DisplayTemperature } from "./components/DisplayTemperature/DisplayTemperature";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");

  return (
    <ImageBackground style={s.backgroundImage} source={hotBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <View style={{height: 80}}>
              <DisplayTemperature temperature={inputValue} unit={currentUnit} />
            </View>
            <Input unit={currentUnit} onChange={setInputValue} defaultValue={0} />
            <Text>Button</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

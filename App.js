import { Text } from "react-native";
import { s } from "./App.style";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.root}>
        <Text>App is ready to go.</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

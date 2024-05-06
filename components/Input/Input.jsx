import { Text, TextInput, View } from "react-native";
import { s } from "./Input.style";

export function Input( { defaultValue, onChange }) {
  return (
    <View style={s.root}>
      <TextInput
        style={s.input}
        placeholder="Enter temperature"
        maxLength={10}
        defaultValue={defaultValue.toString()}
        onChangeText={ (text) => {
            onChange(text)
        }}
      />
      <Text style={s.unit}>°C</Text>
    </View>
  );
}

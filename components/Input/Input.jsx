import { Text, TextInput, View } from "react-native";
import { s } from "./Input.style";

export function Input() {
  return (
      <TextInput style={s.input} placeholder="Enter temperature"/>
  );
}

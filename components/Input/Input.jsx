import { Text, TextInput, View } from "react-native";
import { s } from "./Input.style";

export function Input({ defaultValue, onChange, unit }) {
	return (
		<View style={s.root}>
			<TextInput
				style={s.input}
				placeholder="Enter temperature"
				maxLength={4}
				defaultValue={defaultValue.toString()}
				onChangeText={(text) => {
					onChange(text);
				}}
			/>
			<Text style={s.unit}>{unit}</Text>
		</View>
	);
}

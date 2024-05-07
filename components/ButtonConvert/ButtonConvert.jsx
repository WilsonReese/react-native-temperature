import { Text, TouchableOpacity } from "react-native";
import { s } from "./ButtonConvert.style";

export function ButtonConvert({unit}) {
	return (
		<TouchableOpacity style={s.button}>
			<Text style={s.buttonText}>Convert to {unit}</Text>
		</TouchableOpacity>
	);
}

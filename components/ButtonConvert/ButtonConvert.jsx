import { Text, TouchableOpacity } from "react-native";
import { s } from "./ButtonConvert.style";
import { getOppositeUnit } from "../../utils/temperature";

export function ButtonConvert({ unit, onPress }) {
	return (
		<TouchableOpacity style={s.button} onPress={onPress} >
			<Text style={s.buttonText}>Switch to {getOppositeUnit(unit)} to {unit}</Text>
		</TouchableOpacity>
	);
}

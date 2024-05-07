import { ImageBackground, Text, View } from "react-native";
import { s } from "./App.style";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import hotBackground from "./assets/hot.png";
import { Input } from "./components/Input/Input";
import { useState } from "react";
import { DisplayTemperature } from "./components/DisplayTemperature/DisplayTemperature";
import { convertTemperatureTo, getOppositeUnit } from "./utils/temperature";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";

export default function App() {
	const [inputValue, setInputValue] = useState(0);
	const [currentUnit, setCurrentUnit] = useState("°C");
	const oppositeUnit = getOppositeUnit(currentUnit)

	function getConvertedTemperature() {
		if (isNaN(inputValue)) {
			return "";
		} else {
			return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1);
		}
	}

	return (
		<ImageBackground style={s.backgroundImage} source={hotBackground}>
			<SafeAreaProvider>
				<SafeAreaView style={s.root}>
					<View style={s.workspace}>
						<View style={{ height: 80 }}>
							<DisplayTemperature
								unit={oppositeUnit}
								temperature={getConvertedTemperature()}
							/>
						</View>
						<Input
							unit={currentUnit}
							onChange={setInputValue}
							defaultValue={0}
						/>
						<ButtonConvert unit={currentUnit} />
					</View>
				</SafeAreaView>
			</SafeAreaProvider>
		</ImageBackground>
	);
}

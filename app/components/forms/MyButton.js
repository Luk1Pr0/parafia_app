import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { colors, btnColors, space, misc, font } from "../../config/variables";

const MyButton = ({ title, color }) => {
	return (
		<View
			style={
				color === btnColors.success ?
					[styles.container, styles.success]
					:
					[styles.container, styles.danger]
			}
		>
			<Text
				style={color === btnColors.success ? [styles.text, styles.success] : [styles.text]}
			>
				{title}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'transparent',
		padding: space.small,
		borderRadius: misc.borderRadius,
	},
	text: {
		textAlign: 'center',
		fontWeight: '600',
		fontSize: font.medium
	},
	success: {
		backgroundColor: colors.primary,
		color: colors.tertiary,
	},
	danger: {
	}
});

export default MyButton;
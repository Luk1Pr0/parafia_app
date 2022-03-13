import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { colors, shadow, space, misc, font } from '../../config/variables';

const FormCard = ({ name, navigation, formCount, id }) => {

	const handlePress = () => {
		navigation.push('Input Form', { name });
	}

	return (
		<TouchableOpacity
			// Add additional margin to the last form so that it is in view
			style={id !== formCount ? styles.touchable : [styles.touchable, styles.lastElement]}
			onPress={handlePress}
			activeOpacity={0.9}
		>
			<Text style={styles.text}>{name}</Text>

			<Image
				source={require('../../assets/chevron_right.png')}
				resizeMode='contain'
				style={styles.chevron}
			/>

		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	touchable: {
		marginVertical: space.small,
		height: 100,
		borderRadius: misc.borderRadius,
		textAlign: 'center',
		backgroundColor: colors.primary,
		position: 'relative',
		overflow: 'hidden',
		alignItems: 'flex-start',
		...shadow,
	},
	text: {
		color: colors.tertiary,
		paddingLeft: space.large,
		paddingTop: space.medium,
		fontSize: font.medium,
		fontWeight: '600',
	},
	chevron: {
		position: 'absolute',
		top: 0,
		right: -18,
		height: 100,
		width: 100,
		zIndex: -1,
	},
	lastElement: {
		marginBottom: 120 + space.medium,
		...shadow,
	}
});

export default FormCard;
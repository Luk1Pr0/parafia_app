import { StyleSheet, View, Text, Image, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { colors, space, shadowBottom, font } from '../config/variables';

const FormHeader = ({ navigation, options, progress, route }) => {

	const handlePress = () => {
		navigation.goBack();
	}

	const formName = route.params.name;


	return (

		<SafeAreaView style={styles.safeAreaContainer}>

			<View style={styles.container}>

				{/* Go back button */}
				<TouchableOpacity style={styles.touchable} onPress={handlePress}>
					<Image
						source={require('../assets/chevron.png')}
						resizeMode='contain'
						style={styles.chevron}
					/>
					<Text style={styles.label}>Back</Text>
				</TouchableOpacity>

				{/* Header title */}
				<Text style={styles.title}>{formName}</Text>

				{/* Header logo */}
				<View style={styles.imageContainer}>
					<Image
						source={require('../assets/icon_home_white.png')}
						resizeMode='contain'
						style={styles.image}
					/>
				</View>

			</View>

		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safeAreaContainer: {
		backgroundColor: colors.primary,
		...shadowBottom,
	},
	container: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		marginBottom: space.small,
		paddingHorizontal: space.small,
	},
	title: {
		color: colors.tertiary,
		fontWeight: 'bold',
		fontSize: font.large,
		textAlign: 'center',
		width: '70%',

	},
	imageContainer: {
		width: '15%',
		alignItems: 'flex-end',

	},
	image: {
		width: 35,
		height: 35,
	},
	touchable: {
		width: '15%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	chevron: {
		alignSelf: 'center',
		width: 18,
		height: 18,
	},
	label: {
		color: colors.tertiary,
		fontSize: font.medium,
		fontWeight: '600',
		textAlign: 'center',
	}
});

export default FormHeader;
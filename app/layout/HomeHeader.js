import { StyleSheet, View, Text, Image, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { colors, space, shadowBottom, font } from '../config/variables';

const FormHeader = ({ route }) => {

	const formName = route.name;

	return (

		<SafeAreaView style={styles.safeAreaContainer}>

			<View style={styles.container}>

				<TouchableOpacity style={styles.touchable}>

				</TouchableOpacity>

				<Text style={styles.title}>{formName}</Text>

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
		alignItems: Platform.OS === 'android' ? 'flex-start' : 'center',
		marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		paddingBottom: space.small,
		paddingHorizontal: space.small,
	},
	title: {
		color: colors.tertiary,
		fontWeight: 'bold',
		fontSize: font.large,
		textAlign: 'center',
		width: '60%',
	},
	imageContainer: {
		width: '20%',
		alignItems: 'flex-end',
	},
	image: {
		width: 35,
		height: 35,
	},
	touchable: {
		width: '20%',
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export default FormHeader;
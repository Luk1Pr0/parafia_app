import { StyleSheet, ScrollView, Image, View } from 'react-native';

// Variables
import { space } from '../../config/variables';

const HomeScreen = () => {

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
			<Image style={styles.image} source={require('../../assets/biuletyn.png')} resizeMode='contain' />
			<Image style={styles.image} source={require('../../assets/biuletyn.png')} resizeMode='contain' />
			<View style={styles.placeholder}></View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		paddingVertical: space.medium,
	},
	image: {
		width: '100%',
		height: 500,
		marginTop: space.small,
	},
	placeholder: {
		height: 120 + space.medium,
	}
});

export default HomeScreen;
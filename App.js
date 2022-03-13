import { StyleSheet, View, Button, StatusBar, Platform } from 'react-native';

// Native navigation container
import { NavigationContainer } from '@react-navigation/native';

// Layout
import BottomNav from './app/layout/BottomNav';

export default App = () => {

	return (
		<NavigationContainer style={styles.container}>

			<BottomNav />

		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});

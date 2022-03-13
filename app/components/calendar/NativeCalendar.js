import { StyleSheet, View, Text } from 'react-native';

const NativeCalendar = () => {

	return (
		<View style={styles.container}>
			<Text>CALENDAR</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'dodgerblue',
	}
});

export default NativeCalendar;
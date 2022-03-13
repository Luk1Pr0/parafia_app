import { StyleSheet, View, Text } from 'react-native';

// Components
import NativeCalendar from '../../components/calendar/NativeCalendar';
import { space } from '../../config/variables';

const CalendarScreen = () => {
	return (
		<View style={styles.container}>
			<NativeCalendar />
		</View >
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: space.medium,
	}
})

export default CalendarScreen;
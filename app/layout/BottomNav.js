import { StyleSheet, View, Image, Text, Platform, StatusBar } from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

// Screens
import CalendarScreen from "../screens/calendar/CalendarScreen";
import HomeScreen from "../screens/home/HomeScreen";
import FormsScreen from "../screens/forms/FormsScreen";

// Layout
import HomeHeader from './HomeHeader';

// Variables
import { colors, misc, shadowCenter, space } from '../config/variables';

const BottomNav = () => {

	return (
		<BottomTab.Navigator safeAreaInsets={{ bottom: 0 }}
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: styles.bottomNav,
				header: (props) => <HomeHeader {...props} />,
			}}
			initialRouteName='Home'
		>

			<BottomTab.Screen name='Calendar' component={CalendarScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{
							backgroundColor: focused ? colors.primary : 'transparent',
							...styles.iconContainer
						}}>
							<Image
								style={{
									tintColor: focused ? 'rgb(255, 255, 255)' : colors.primary,
									...styles.icon
								}}
								resizeMode='contain'
								source={require('../assets/icon_calendar.png')} />
						</View>
					)
				}}
			/>

			<BottomTab.Screen name='Home' component={HomeScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{
							backgroundColor: focused ? colors.primary : 'transparent',
							...styles.iconContainer
						}}>
							<Image
								style={{
									tintColor: focused ? 'rgb(255, 255, 255)' : colors.primary,
									...styles.icon
								}}
								resizeMode='contain'
								source={require('../assets/icon_home.png')} />
						</View>
					)
				}} />

			<BottomTab.Screen name='Forms' component={FormsScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								backgroundColor: focused ? colors.primary : 'transparent',
								...styles.iconContainer
							}}
						>
							<Image
								style={{
									tintColor: focused ? 'rgb(255, 255, 255)' : colors.primary,
									...styles.icon
								}}
								resizeMode='contain'
								source={require('../assets/icon_forms.png')} />
						</View>
					)
				}} />
		</BottomTab.Navigator>
	)
}

const styles = StyleSheet.create({
	bottomNav: {
		height: 70,
		marginHorizontal: space.medium,
		position: 'absolute',
		bottom: 30,
		borderRadius: misc.borderRadius,
		...shadowCenter,
	},
	iconContainer: {
		borderRadius: 5,
	},
	icon: {
		width: 30,
		height: 30,
		margin: space.small,
	}
});

export default BottomNav;
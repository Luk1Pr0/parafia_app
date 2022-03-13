import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const StackNav = createStackNavigator();

// Components
import FormCard from '../../components/forms/FormCard';

// Screen
import InputScreen from './InputScreen';

// Layout
import HomeHeader from '../../layout/HomeHeader';
import FormHeader from '../../layout/FormHeader';

// Variables
import { space } from '../../config/variables';

const formsArray = [
	{
		id: 1,
		name: 'Zamow msze',
	},
	{
		id: 2,
		name: 'Zapisy do parafii',
	},
	{
		id: 3,
		name: 'Zapisy na sprzatanie',
	},
	{
		id: 4,
		name: 'Zapisy na adoracje',
	},
	{
		id: 5,
		name: 'Zapisy na wolontariat',
	}
]

const FormsScreen = () => {

	const formCount = formsArray.length;

	return (
		<StackNav.Navigator>

			<StackNav.Screen
				name='Formularze'
				options={{
					header: (props) => <HomeHeader {...props} />,
				}}
				children={({ navigation }) => (
					<FlatList
						style={styles.flatList}
						data={formsArray}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => <FormCard {...item} navigation={navigation} formCount={formCount} />}
					/>
				)} />

			<StackNav.Screen
				name='Input Form'
				component={InputScreen}
				options={({ navigation, route }) => ({
					header: () => <FormHeader navigation={navigation} route={route} />
				})}
			/>

		</StackNav.Navigator >
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	flatList: {
		padding: space.medium,
	},
});

export default FormsScreen;
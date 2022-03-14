import { StyleSheet, View, Text, Button, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, ScrollView, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

// Components
import MyButton from '../../components/forms/MyButton';

// Variables
import { btnColors, colors, font, misc, space } from '../../config/variables';

const InputScreen = ({ route, navigation }) => {

	// State
	const [date, setDate] = useState(new Date());

	const [form, setForm] = useState({
		fullName: '',
		message: '',
		userCount: '',
		dateTime: date,
	});

	const selectedForm = route.params.name.toLowerCase();

	// Hide keyboard if user presses outside of it
	const screenPress = () => {
		Keyboard.dismiss();
	}

	// Handle submit or cancel button
	const handlePress = (type) => {

		if (type === 'goBack' && form.fullName === '') {
			// Go back 
			navigation.goBack();
		}
		else if (type === 'goBack' && form.fullName !== '') {
			// Alert user that there are unsubmitted inputs
			Alert.alert(
				"Are you sure?",
				"You have an unsubmitted form",
				[
					{
						text: "Cancel",
						onPress: () => console.log("Cancel Pressed"),
						style: "cancel"
					},
					{
						text: "OK", onPress: () => navigation.goBack()
					}
				]
			);
		}
		else {
			// Submit form
			console.log('form submitted', form);
		}
	}

	// Change the respective state depending on which input user enters data in
	const handleChangeInput = (content, type) => {

		switch (type) {
			case 'fullName':
				setForm({
					...form,
					fullName: content,
				})
				break;

			case 'message':
				setForm({
					...form,
					message: content,
				})
				break;

			case 'userCount':
				setForm({
					...form,
					userCount: content,
				})
				break;

			case 'dateTime':
				setForm({
					...form,
					dateTime: content,
				})
				break;

			default: null
				break;
		}
	}

	return (
		<ScrollView>
			<TouchableWithoutFeedback onPress={screenPress}>
				<View style={styles.container}>

					<TextInput
						style={styles.input}
						placeholder='Full Name'
						keyboardAppearance={'dark'}
						keyboardType={'default'}
						importantForAutofill={'yes'}
						autoCapitalize={'words'}
						textContentType='name'
						returnKeyType={'next'}
						value={form.fullName}
						onChangeText={(e) => handleChangeInput(e, 'fullName')}
					/>

					<TextInput
						style={
							selectedForm === 'zamow msze'
								? styles.input
								: { display: 'none' }
						}
						placeholder='Intencja'
						keyboardAppearance={'dark'}
						keyboardType={'default'}
						importantForAutofill={'yes'}
						multiline={true}
						numberOfLines={5}
						textContentType={'none'}
						returnKeyType={'next'}
						value={form.message}
						onChangeText={(e) => handleChangeInput(e, 'message')}
					/>

					<TextInput
						style={
							selectedForm === 'zapisy na sprzatanie'
								? styles.input
								: { display: 'none' }
						}
						placeholder='Liczba osob'
						keyboardAppearance={'dark'}
						keyboardType={'number-pad'}
						importantForAutofill={'yes'}
						autoCapitalize={'words'}
						value={form.userCount.toString()}
						onChangeText={(e) => handleChangeInput(e, 'userCount')}
					/>

					<DateTimePicker
						value={form.dateTime}
						minimumDate={new Date()}
						minuteInterval={15}
						mode={'datetime'}
						display={'inline'}
						onChange={(e, selectedDate) => handleChangeInput(selectedDate, 'dateTime')}
					/>

					<View style={styles.btnContainer} >

						<TouchableOpacity style={styles.btnStyle} onPress={handlePress}>
							<MyButton title={'Submit'} color={btnColors.success} />
						</TouchableOpacity>

						<TouchableOpacity style={styles.btnStyle} onPress={() => handlePress('goBack')}>
							<MyButton title={'Cancel'} color={btnColors.danger} />
						</TouchableOpacity>

					</View>

				</View>
			</TouchableWithoutFeedback>
		</ScrollView >
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: space.medium,
	},
	text: {
		fontSize: font.large,
		textAlign: 'center',
		marginBottom: space.large,
	},
	input: {
		borderWidth: 2,
		borderColor: colors.primary,
		borderRadius: misc.borderRadius,
		padding: space.small,
		fontSize: font.medium,
		marginBottom: space.medium,
	},
	dateTimePicker: {
	},
	btnContainer: {
		flexDirection: 'row',
	},
	btnStyle: {
		flex: 1,
	}
})

export default InputScreen;
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { Text, TextInput, View } from './Themed';

type LabelInputProps = {
	title?: string;
	input?: React.RefObject<any>;
	placeholder?: string;
	onChangeText?: (text: string) => void;
};

const LabelInput = (props: LabelInputProps) => {
	const { title, input, placeholder, ...rest } = props;
	const theme = useColorScheme();

	return (
		<View style={styles.container}>
			<Text style={styles.label}>{title}</Text>
			<TextInput
				{...rest}
				placeholder={placeholder}
				ref={input}
				style={styles.input}
			/>
			<Pressable onPress={() => input?.current?.clear()}>
				<AntDesign
					name="closecircle"
					size={18}
					color={Colors[theme].grayHighlight}
				/>
			</Pressable>
		</View>
	);
};

export default LabelInput;

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16,
	},
	label: {
		fontSize: 17,
		width: 60,
	},
	input: {
		flex: 1,
		padding: 20,
		fontSize: 17,
	},
});

import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import LabelInput from '../components/LabelInput';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
	navigation,
}: RootTabScreenProps<'TabOne'>) {
	const nameInputRef = React.useRef<TextInput>(null);

	return (
		<View style={styles.container}>
			<LabelInput
				title={'Naam'}
				input={nameInputRef}
				placeholder={'Voer je naam in'}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

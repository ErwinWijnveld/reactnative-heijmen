import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Container from '../components/Container';

import EditScreenInfo from '../components/EditScreenInfo';
import InputTable from '../components/InputTable';
import IosSwitch from '../components/IosSwitch';
import LabelInput from '../components/LabelInput';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
	navigation,
}: RootTabScreenProps<'TabOne'>) {
	const nameInputRef = React.useRef<TextInput>(null);
	const [activeDay, setActiveDay] = useState('Ma');

	return (
		<View style={styles.container}>
			<Container>
				<LabelInput
					title={'Naam'}
					input={nameInputRef}
					placeholder={'Voer je naam in'}
				/>
				<IosSwitch
					options={['Ma', 'Di', 'Wo', 'Do', 'Vr']}
					onChange={(option) => setActiveDay(option)}
					presetPadding={40}
				/>

				<InputTable day={activeDay} />
			</Container>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

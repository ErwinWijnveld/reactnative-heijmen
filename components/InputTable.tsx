import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type InputTableProps = {
	children?: React.ReactNode;
	day: string;
};

const InputTable = (props: InputTableProps) => {
	return (
		<View>
			<Text>{props?.day}</Text>
		</View>
	);
};

export default InputTable;

const styles = StyleSheet.create({});

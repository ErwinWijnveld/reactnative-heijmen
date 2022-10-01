import React from 'react';
import { Text, View } from 'react-native';

type ContainerProps = {
	children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
	return <View style={{ paddingHorizontal: 20 }}>{props?.children}</View>;
};

export default Container;

import React, { useEffect } from 'react';
import {
	Animated,
	Dimensions,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

const WIDTH = Dimensions.get('window').width;

type IosSwitchProps = {
	options: string[];
	presetPadding: number;
	onChange: (value: string) => void;
};

const IosSwitch = (props: IosSwitchProps) => {
	const [floater, setFloater] = React.useState(0);
	const left = React.useRef(new Animated.Value(3)).current;

	const theme = useColorScheme();

	const calculateLeft = () => {
		const switchWidth = (WIDTH - props?.presetPadding) / props.options.length;
		switch (floater) {
			case 0:
				return 3;

			case props.options.length - 1:
				return switchWidth * floater - 3;

			default:
				return switchWidth * floater;
		}
	};

	useEffect(() => {
		Animated.timing(left, {
			toValue: calculateLeft(),
			useNativeDriver: true,
			duration: 150,
		}).start();
	}, [floater]);

	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: Colors[theme].grayHighlightLight },
			]}
		>
			<Animated.View
				style={[
					styles.floater,
					{
						width: (WIDTH - props?.presetPadding) / props.options.length,
						left: 0,
						transform: [{ translateX: left }],
					},
				]}
			/>
			{props?.options.map((option, index) => (
				<Pressable
					style={styles.switchItem}
					key={index}
					onPress={() => {
						props.onChange(option);
						setFloater(index);
					}}
				>
					<Text
						style={[
							styles.text,
							{
								fontWeight: index === floater ? '500' : 'normal',
								paddingLeft: index === 0 ? 3 : 0,
								paddingRight: index === props.options.length - 1 ? 3 : 0,
							},
						]}
					>
						{option}
					</Text>
				</Pressable>
			))}
		</View>
	);
};

export default IosSwitch;

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: 10,
		position: 'relative',
		height: 32,
	},
	text: {
		fontSize: 13,
		textAlign: 'center',
	},
	floater: {
		position: 'absolute',
		top: 3,
		backgroundColor: '#fff',
		height: 26,
		borderRadius: 7,
		shadowColor: 'rgba(0, 0, 0, 0.16)',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.2,
		shadowRadius: 8,
	},
	switchItem: {
		flex: 1,
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
	},
});

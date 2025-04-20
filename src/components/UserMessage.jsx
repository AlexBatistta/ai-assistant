import React from 'react'
import { View, Text } from 'react-native';

export const UserMessage = ({ content }) => {
	return (
		<View className="flex-row justify-end">
			<View className="relative max-w-[70%] mb-3">
				{/* Burbuja */}
				<View className="rounded-lg py-3 px-5 bg-blueRobot rounded-tl-none rounded-br-none">
					<Text className="text-white">{content}</Text>
				</View>
				{/* Triángulo */}
				<View className="absolute right-[-6px] bottom-2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-blueRobot" />
			</View>
		</View>
	)
}

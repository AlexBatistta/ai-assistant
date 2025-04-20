import React from 'react'
import { View, Text } from 'react-native';

export const AIMessage = ({ content }) => {
	return (
		<View className="flex-row justify-start">
			<View className="relative max-w-[70%] mb-3">
				{/* Burbuja */}
				<View className="rounded-lg py-3 px-5 bg-gray-300 rounded-tr-none rounded-bl-none">
					<Text className="text-black">{content}</Text>
				</View>
				{/* Triángulo */}
				<View className="absolute left-[-6px] bottom-2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-gray-300" />
			</View>
		</View>
	);
}

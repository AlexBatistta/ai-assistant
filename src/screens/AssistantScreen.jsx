import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MicrophoneIcon } from "../components/Icons";
import { useState } from "react";
import { placeholderMessages } from "../constants/placeholderMessages";
import { blue } from "../constants/colors";

export function AssistantScreen() {
	const insets = useSafeAreaInsets();
	const [messages, setMessages] = useState(placeholderMessages);
	return (
		<View className="flex-1 justify-around items-center px-10 bg-white" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
			<Link asChild href={"/"}>
				<Pressable className="flex-row justify-center items-center gap-5">
					<Image style={{ width: 75, height: 75, resizeMode: "center" }} source={require("./../../assets/img/logo.png")}></Image>
					<Text className="text-3xl font-semibold mt-6">AI Assistant</Text>
				</Pressable>
			</Link>
			<View className="w-full gap-10 flex-1 py-5">
				<ScrollView className=" flex-1 bg-gray-100 rounded-lg p-5" showsVerticalScrollIndicator={false}>
					{
						messages.map((message, index) => {
							return (
								<View key={index} className={`flex-row ${message.role === "user" ? "justify-end" : "justify-start"}`}>
									<View className="relative max-w-[70%]">
										{/* Burbuja */}
										<View className={`rounded-lg py-3 px-5 ${message.role === "user" ? "bg-blueRobot rounded-tl-none rounded-br-none" : "bg-gray-300  rounded-tr-none rounded-bl-none"} `}>
											<Text className={`${message.role === "user" ? "text-white" : "text-black"}`}>
												{message.content}
											</Text>
										</View>
										{/* Triángulo */}
										{message.role === "user" ? (
											<View className="absolute right-[-6px] bottom-2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-blueRobot" />
										) : (
											<View className="absolute left-[-6px] bottom-2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-gray-300" />
										)}
									</View>
								</View>

							);
						})
					}
				</ScrollView>
				<View className="flex-row justify-between">
					<TextInput className="flex-1 border-2 rounded-lg border-gray-300" />
					<Pressable className="flex justify-center items-center pl-10 pr-5">
						<MicrophoneIcon size={30} color={blue} />
					</Pressable>
				</View>

			</View>

		</View>
	);
}
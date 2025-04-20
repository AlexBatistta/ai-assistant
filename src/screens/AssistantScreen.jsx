import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MicrophoneIcon } from "../components/Icons";
import { useState } from "react";
import { placeholderMessages } from "../constants/placeholderMessages";
import { blue } from "../constants/colors";
import { UserMessage } from "../components/UserMessage";
import { AIMessage } from "../components/AIMessage";
import { FlatList } from "react-native";

export function AssistantScreen() {
	const insets = useSafeAreaInsets();
	const [messages, setMessages] = useState(placeholderMessages);
	return (
		<View className="flex-1 justify-around items-center px-10 bg-white" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
			<Link asChild href={"/"}>
				<Pressable className="flex-row justify-center items-center gap-5 pt-5">
					<Image style={{ width: 75, height: 75, resizeMode: "center" }} source={require("./../../assets/img/logo.png")}></Image>
					<Text className="text-3xl font-semibold mt-6">AI Assistant</Text>
				</Pressable>
			</Link>
			<View className="w-full gap-10 flex-1 py-5">
				<FlatList
					data={messages}
					keyExtractor={(item) => item.id.toString()}
					showsVerticalScrollIndicator={false}
					className="flex-1 bg-gray-100 rounded-lg p-5"
					renderItem={({ item }) => {
						return item.role === "user" ? (
							<UserMessage content={item.content} />
						) : (
							<AIMessage content={item.content} />
						);
					}}
				/>
				<View className="flex-row justify-between">
					<TextInput className="flex-1 border-2 rounded-lg border-gray-300" />
					<Pressable className="flex justify-center items-center pl-10 pr-5">
						<MicrophoneIcon size={30} color={blue} />
					</Pressable>
				</View>

			</View>

		</View >
	);
}
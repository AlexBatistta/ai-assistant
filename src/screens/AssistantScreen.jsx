import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MicrophoneIcon } from "../components/Icons";

export function AssistantScreen() {
	const insets = useSafeAreaInsets();
	return (
		<View className="flex-1 justify-around items-center px-10 bg-white" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
			<Link asChild href={"/"}>
				<Pressable className="flex justify-start">
					<Image style={{ width: 100, height: 100, resizeMode: "center" }} source={require("./../../assets/img/logo.png")}></Image>
				</Pressable>
			</Link>
			<View className="w-full gap-10 flex-1 py-5">
				<ScrollView className=" flex-1 bg-gray-100 rounded-lg p-5" showsVerticalScrollIndicator={false}>
				</ScrollView>
				<View className="flex-row justify-between">
					<TextInput className="flex-1 border-2 rounded-lg border-gray-300" />
					<Pressable className="flex justify-center items-center pl-10 pr-5">
						<MicrophoneIcon size={30} color="#3b74ce" />
					</Pressable>
				</View>

			</View>

		</View>
	);
}
import { Image, Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1 justify-around items-center bg-white sm:flex-row" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View className="items-center gap-10">
        <Image style={{ width: 200, height: 200, resizeMode: "center" }} source={require("./../../assets/img/robot.png")}></Image>
        <Text className="text-5xl font-semibold">AI Assistant</Text>
      </View>
      <Link asChild href={"/assistant"}>
        <Pressable className="bg-blue-600 rounded-full flex justify-center items-center ">
          <Text className="px-20 py-5 text-white text-2xl">Ask me something</Text>
        </Pressable>
      </Link>
    </View>
  );
}

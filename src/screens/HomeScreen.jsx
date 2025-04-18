import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { Screen } from "../components/Screen";

export function HomeScreen() {
  return (
    <Screen>
      <Text>AI Assistant</Text>
      <Link asChild href={"/assistant"}>
        <Pressable className="bg-blue-600 rounded-full flex justify-center items-center">
          <Text className="px-20 py-5 text-white text-3xl">Ask me something</Text>
        </Pressable>
      </Link>

    </Screen>
  );
}

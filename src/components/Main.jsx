import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MicrophoneIcon } from "./Icons";

export function Main() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text className="text-blue-700 font-semibold">
        React Native with Native-Wind
      </Text>
      <MicrophoneIcon />
    </View>
  );
}

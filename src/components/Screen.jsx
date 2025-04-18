import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Screen({ children }) {
	const insets = useSafeAreaInsets();
	return <View className="flex-1 justify-center items-center bg-white pt-4" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>{children}</View>;
}
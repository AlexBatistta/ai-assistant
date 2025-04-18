import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../../global";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-blue-100">
        <StatusBar style="dark" />
        <Slot />
      </View>
    </SafeAreaProvider>
  );
}

import { WebView } from "react-native-webview";

export default function WebViewDemo() {
  return (
      <WebView source={{ uri: "https://reactnative.dev/" }} />
  );
}
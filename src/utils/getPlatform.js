import { Platform } from "react-native";

export const getPlatform = () => {
  switch (Platform.OS) {
    case "android":
      return "android";

    case "ios":
      return "ios";

    case "windows":
      return "windows";

    default:
      return "web";
  }
};

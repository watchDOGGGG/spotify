import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./navigations/app_navigation";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

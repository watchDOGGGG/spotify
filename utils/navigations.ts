import { InappNavigationProp } from './../consts/interface';
import { GestureResponderEvent } from "react-native";
import { SignUpScreenNavigationProp, WelcomeScreenNavigationProp } from "../consts";

export function handleSignUpPress(e: GestureResponderEvent, navigation:WelcomeScreenNavigationProp) {
  navigation.navigate("SignUp");
}

export function handleSignupRoute(e: GestureResponderEvent, navigation:SignUpScreenNavigationProp) {
  navigation.navigate("Category");
}

export function navigateToGreatePick(e: GestureResponderEvent, navigation:InappNavigationProp) {
  navigation.navigate("GreatPick");
}

export function navigateToHome(e: GestureResponderEvent, navigation:InappNavigationProp) {
  navigation.navigate("Home");
}
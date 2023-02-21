import { ReactElement } from "react";
import { Pressable, Text, View } from "react-native";
import { ActionButtonProps, IconButtonProps } from "../consts";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";

export function GreenActionButton({
  title,
  props,
  onpress,
}: ActionButtonProps): ReactElement {
  return (
    <Pressable
      {...props}
      style={tw`bg-[#66d46f] w-[80%] rounded-8 p-3`}
      onPress={onpress}
    >
      <Text style={tw`text-black text-center font-bold text-lg`}>{title}</Text>
    </Pressable>
  );
}

export function IconButtons({
  title,
  props,
  onpress,
  icon,
  style
}: IconButtonProps): ReactElement {
  return (
    <Pressable
      {...props}
      style={tw`border border-white w-[80%] rounded-8 p-3 flex flex-row ${style}`}
      onPress={onpress}
    >
      <View style={tw`flex flex-col justify-center`}>{icon}</View>
      <Text
        style={tw`text-white text-center font-bold text-lg items-center w-[90%]`}
      >
        {title}
      </Text>
    </Pressable>
  );
}

export function WhiteActionButton({
  title,
  props,
  onpress,
  style
}: ActionButtonProps): ReactElement {
  return (
    <Pressable
      {...props}
      style={tw`bg-white w-[50%] rounded-8 p-3 ${style}`}
      onPress={onpress}
    >
      <Text style={tw`text-black text-center font-bold text-lg`}>{title}</Text>
    </Pressable>
  );
}

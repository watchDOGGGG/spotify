import React, { ReactElement } from "react";
import { TextAreaProps } from "../consts";
import tw from "twrnc";
import { Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export function TextArea({
  props,
  style,
  onchange,
  value,
  placeholder,
}: TextAreaProps): ReactElement {
  return (
    <TextInput
      value={value}
      onChange={onchange}
      {...props}
      style={tw`text-white  text-left rounded-2 bg-gray-600 w-full p-3 font-bold ${style}`}
      placeholder={placeholder}
    />
  );
}

export function SearchTextArea({
  props,
  style,
  onchange,
  value,
  placeholder,
}: TextAreaProps): ReactElement {
  return (
    <View style={tw`flex flex-row rounded-2 bg-white w-full ${style} p-2`}>
      <View style={tw`flex flex-col justify-center`}>
        <Feather name="search" size={24} color="black" />
      </View>
      <View style={tw`flex flex-col justify-start w-full`}>
        <TextInput
          value={value}
          onChange={onchange}
          {...props}
          style={tw`text-black text-left font-bold w-[90%] ml-3`}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}

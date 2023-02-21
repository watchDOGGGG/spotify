import { View, Text, FlatList } from "react-native";
import React, { ReactElement } from "react";
import tw from "twrnc";
import { ContainerProps } from "../consts";

const content: string[] = ["1"];

export function UnscrollContainer({
  children,
  props,
}: ContainerProps): ReactElement {
  return (
    <View {...props} style={tw`w-full h-full bg-black`}>
      {children}
    </View>
  );
}

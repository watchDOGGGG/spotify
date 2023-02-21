import { View, Text, FlatList } from "react-native";
import React, { ReactElement } from "react";
import tw from "twrnc";
import { ContainerProps } from "../consts";

const content: string[] = ["1"];

export function InnerContainer({
  children,
  props,
}: ContainerProps): ReactElement {
  return (
    <View {...props} style={tw`w-full h-full bg-black`}>
      <FlatList
        data={content}
        style={{ flex: 1 }}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <View style={tw`w-full h-full p-3 mt-10`}>{children}</View>}
      />
    </View>
  );
}

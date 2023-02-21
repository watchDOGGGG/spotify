import React, { ReactElement } from "react";
import { View, Text, Image } from "react-native";
import tw from "twrnc";
import { AvataProps } from "../consts";
import { SmallText } from "./text";

export function AvatarWithName({ source, name }: AvataProps): ReactElement {
  return (
    <View>
      <View style={tw`items-center`}>
        <Image
          source={{ uri: source }}
          style={[tw`rounded-20`, { flex: 1, width: 90, height: 90 }]}
        />
      </View>
      <SmallText
        style="capitalize mt-1 text-white text-sm text-center"
        text={name}
      />
    </View>
  );
}

export function Avatar({ source }: AvataProps): ReactElement {
  return (
    <View style={tw``}>
        <Image
          source={{ uri: source }}
          style={[tw`rounded-20`, { flex: 1, width: 90, height: 90 }]}
        />
      </View>
  );
}

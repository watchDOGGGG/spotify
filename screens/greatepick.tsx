import { View, Text } from "react-native";
import React from "react";
import { GreatPickNavigation, GreatPickRouteProp } from "../consts";
import { UnscrollContainer } from "../containers";
import tw from "twrnc";
import { Avatar, MeduimText } from "../components";

export function Greatepick({
  navigation,
}: {
  navigation: GreatPickNavigation;
  route: GreatPickRouteProp;
}) {
  return (
    <UnscrollContainer>
      <View style={tw`h-full flex flex-col justify-center`}>
       <View style={tw`flex flex-row justify-center`}>
       <View style={tw`w-[80%] flex flex-row`}>
            {images.map((src, index) => {
              return <Avatar style={"relative "} source={src} key={index} name="" />;
            })}
        </View>
       </View>
        <MeduimText text="Great picks!" style="mt-6" />
      </View>
    </UnscrollContainer>
  );
}

const images = [
  "https://guardian.ng/wp-content/uploads/2022/01/IMG-20220101-WA0011-e1641065721785.jpg",
  "https://cdn.punchng.com/wp-content/uploads/2021/02/03091450/buchi.jpeg",
  "https://media.premiumtimesng.com/wp-content/files/2020/05/Taaoma.jpg",
  "https://xclusiveloaded.com/wp-content/uploads/2022/04/Josh2funny.jpg",
  "https://guardian.ng/wp-content/uploads/2020/12/Mr-Macaroni.jpg",
];

{
  /* <Avatar source={image} name={""} key={index} /> */
}

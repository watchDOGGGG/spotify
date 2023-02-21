import { View, Text, FlatList, Image, GestureResponderEvent } from "react-native";
import React,{ReactElement} from "react";
import { InnerContainer } from "../containers";
import tw from "twrnc";
import { AvatarWithName, SearchTextArea, TItleText, WhiteActionButton } from "../components";
import { creatorsList, handleSignupRoute, navigateToGreatePick, navigateToHome } from "../utils";
import { InappNavigationProp, InappRouteProp } from "../consts";

export function Category({navigation}:{navigation:InappNavigationProp, route:InappRouteProp}):ReactElement{
  const [text, setText] = React.useState<string>("");

  const HandleChange = (txt: string) => {
    setText(txt);
  };
  return (
    <InnerContainer>
      <View style={tw``}>
        <TItleText
          text="Choose 3 or more content creators you like."
          style={"text-left"}
        />
        <SearchTextArea
          onchange={HandleChange}
          placeholder="search"
          value={text}
          style={"mt-4"}
        />
      </View>
      <View style={tw`w-full justify-start`}>
        <FlatList
          columnWrapperStyle={tw`flex-wrap`}
          numColumns={3}
          data={creatorsList}
          scrollEventThrottle={1900}
          contentContainerStyle={{ padding: 30 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View style={tw`mt-7 flex-grow`}>
              <AvatarWithName source={item.image} name={item.name} />
            </View>
          )}
        />
      </View>
      <View
        style={tw`absolute bottom-[10%] bg-black bg-opacity-50 h-20 w-[100%] left-0 right-0 justify-center items-center`}
      >
        <WhiteActionButton
          style={"self-center"}
          title={"Create account"}
          onpress={(e: GestureResponderEvent) =>
            navigateToGreatePick(e, navigation)
          }
        />
      </View>
    </InnerContainer>
  );
}

import { View, Text, GestureResponderEvent } from "react-native";
import React, { ReactElement } from "react";
import { Authcontainer } from "../containers";
import {
  SmallText,
  TextArea,
  TItleText,
  WhiteActionButton,
} from "../components";
import {
  SignUpScreenNavigationProp,
  SignUpScreenRouteProp,
  signupText,
  signupText2,
  signupText3,
} from "../consts";
import tw from "twrnc";
import { handleSignupRoute } from "../utils";

export function Signup({
  navigation,
}: {
  navigation: SignUpScreenNavigationProp;
  route: SignUpScreenRouteProp;
}): ReactElement {
  const [text, setText] = React.useState("");

  const HandleTextChange = (text: string) => {
    setText(text);
  };

  return (
    <Authcontainer>
      <View style={tw`flex flex-col `}>
        <TItleText text="What's your name?" style="text-left" />
        <TextArea
          onchange={HandleTextChange}
          value={text}
          placeholder="prince randy"
        />
        <SmallText
          text="This appears on your spotify profile"
          style={"text-left mt-3"}
        />
        <View style={tw`border-b-[0.6px] border-white w-full mt-7`}></View>
        <SmallText text={signupText} style={"text-left mt-5"} />
        <SmallText
          text={"Terms of Use"}
          style={"text-left mt-5 text-[#66d46f]"}
        />
        <SmallText text={signupText2} style={"text-left mt-5"} />
        <SmallText
          text={"Privacy Policy"}
          style={"text-left mt-5 text-[#66d46f]"}
        />
        <View style={tw`flex flex-row mt-5`}>
          <SmallText text={signupText3} style={"text-left "} />
        </View>
        <WhiteActionButton
          style={"mt-40 self-center"}
          title={"Create account"}
          onpress={(e: GestureResponderEvent) =>
            handleSignupRoute(e, navigation)
          }
        />
        <SmallText
          text={"Protected By Recaptcha"}
          style={"mt-5 text-gray-700 text-sm"}
        />
      </View>
    </Authcontainer>
  );
}

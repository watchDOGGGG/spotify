import React, { ReactElement } from "react";
import { View, Text, FlatList, ImageBackground, Image, GestureResponderEvent } from "react-native";
import tw from "twrnc";
import { Fscontainer } from "../containers";
import Img1 from "../assets/1.jpg";
import { FontAwesome } from "@expo/vector-icons";
import { GreenActionButton, IconButtons, MeduimText, TItleText } from "../components";
import {
  WelcomeScreenNavigationProp,
  WelcomeScreenRouteProp,
  welcomeText,
  welcomeText2,
} from "../consts";
import { handleSignUpPress } from "../utils";

const welcomeRoute = ["1"];

export function Welcome({
  navigation,
}: {
  navigation: WelcomeScreenNavigationProp;
  route: WelcomeScreenRouteProp;
}): ReactElement {
  return (
    <Fscontainer>
      <View style={tw`h-full`}>
        <ImageBackground
          source={Img1}
          style={{ flex: 1, justifyContent: "center" }}
          resizeMode="cover"
        >
          <View style={tw`flex flex-col justify-end h-full relative`}>
            <View
              style={[
                tw`bg-black h-full flex-col justify-end opacity-70 absolute w-full`,
              ]}
            ></View>
            <View style={tw`h-[50%] absolute flex flex-row justify-center`}>
              <View style={tw`w-full`}>
                <View style={tw`flex flex-col`}>
                  <View style={tw`items-center`}>
                    <FontAwesome name="spotify" size={44} color="white" />
                    <TItleText style="" text={welcomeText} />
                    <TItleText style="" text={welcomeText2} />
                  </View>
                </View>

                <View style={tw`bg-black w-full h-full`}>
                  <FlatList
                    data={welcomeRoute}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                      <View style={tw`items-center mt-6 flex flex-col justify-center`}>
                        <GreenActionButton
                          title="Sign for free"
                          onpress={(e:GestureResponderEvent)=>handleSignUpPress(e,navigation)}
                        />
                        <IconButtons
                          title="Continue With Google"
                          icon={
                            <FontAwesome
                              name={"google"}
                              size={20}
                              color="white"
                            />
                          }
                          style="mt-4"
                          onpress={(e:GestureResponderEvent)=>handleSignUpPress(e,navigation)}
                        />
                        {/*   */}
                        <IconButtons
                          title="Continue With Apple"
                          icon={
                            <FontAwesome
                              name={"apple"}
                              size={20}
                              color="white"
                            />
                          }
                          style="mt-4"
                          onpress={(e:GestureResponderEvent)=>handleSignUpPress(e,navigation)}
                        />
                         <MeduimText text="Log in" style="mt-7"/>
                      </View>
                    )}
                  />
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Fscontainer>
  );
}


import React, {ReactElement } from "react";
import { TextProps } from "../consts";
import tw from 'twrnc'
import {Text} from 'react-native'

export function TItleText ({text, props, style}: TextProps):ReactElement {
    return (
        <Text {...props} style={tw`text-white text-[24px] text-center font-bold ${style}`}>
            {text}
        </Text>
    )
}

export function MeduimText ({text, props, style}: TextProps):ReactElement {
    return (
        <Text {...props} style={tw`text-white text-[20px] text-center font-bold ${style}`}>
            {text}
        </Text>
    )
}

export function SmallText ({text, props, style}: TextProps):ReactElement {
    return (
        <Text {...props} style={tw`text-white text-[15px] text-center font-normal ${style}`}>
            {text}
        </Text>
    )
}
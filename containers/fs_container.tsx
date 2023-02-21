import { View, Text } from 'react-native'
import React, {ReactElement } from "react";
import tw from 'twrnc'
import { ContainerProps } from '../consts';

export function Fscontainer({children, props}:ContainerProps):ReactElement {
  return (
    <View {...props} style={tw`w-full h-full`}>
      {children}
    </View>
  )
}
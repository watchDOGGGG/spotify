import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface TextProps{
    text: string,
    style:string,
    [key: string]: any
}

export interface ContainerProps {
    children:  ReactNode | ReactElement,
    [key:string]:any
}

export interface ActionButtonProps {
    title: string,
    onpress: Function,
    [key:string]:any

}

export interface IconButtonProps{
    title: string,
    icon:ReactElement|ReactNode,
    [key:string]:any,
    style:string

}

export interface TextAreaProps{
    onchange:Function,
    value:string,
    placeholder:string,
    [key:string]:any,
}

export interface CategoriesProps {
    image:string,
    id:any,
    name:string
}
export interface AvataProps{
    source: string,
    name:string,
    style:string
}

export type StackParamList = {
    Welcome: undefined;
    Home: undefined;
    Profile: { userId: string };
    Settings: { theme: 'light' | 'dark' };
    SignUp:undefined;
    Category:undefined;
    GreatPick:undefined;
  }



export type WelcomeScreenNavigationProp = StackNavigationProp<StackParamList, 'Welcome'>;
export type WelcomeScreenRouteProp = RouteProp<StackParamList, 'Welcome'>;

export type SignUpScreenNavigationProp = StackNavigationProp<StackParamList, 'SignUp'>;
export type SignUpScreenRouteProp = RouteProp<StackParamList, 'SignUp'>;

export type InappNavigationProp = StackNavigationProp<StackParamList, 'Category'>;
export type InappRouteProp = RouteProp<StackParamList, 'Category'>;

export type GreatPickNavigation = StackNavigationProp<StackParamList, 'GreatPick'>;
export type GreatPickRouteProp = RouteProp<StackParamList, 'GreatPick'>;


/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
    namespace ReactNavigation {
    }
}

export type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
    Home: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList,
    Screen>;

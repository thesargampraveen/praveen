

import { View, Text } from "react-native";
import  React, { FC } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splashscreen from "@features/auth/splashscreen";

const Stack = createNativeStackNavigator();


const Navigation:FC =()=>{
    return(
        <NavigationContainer>
         <Stack.Navigator initialRouteName="splashscreen"
         screenOptions={{
            headerShown:false,
         }}
         >
            <Stack.Screen name="splashscreen" component={splashscreen} />
         </Stack.Navigator>
       </NavigationContainer>
    )
}

export  default Navigation;
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import BookDetail from "../screens/BookDetail";
import Tabs from "../components/tabs"; 

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={theme} independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Home'}>
                <Stack.Screen name="Home" component={Tabs} />
                <Stack.Screen name="BookDetail" component={BookDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
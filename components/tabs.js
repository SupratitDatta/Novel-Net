import React from "react";
import { Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/HomePage";
import SettingPage from "../screens/SettingPage";
import NotificationPage from "../screens/NotificationPage";
import SearchPage from "../screens/SearchPage";
import { icons, COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { height: "10%", backgroundColor: COLORS.black },
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.white : COLORS.gray;

                    switch (route.name) {
                        case "Home":
                            return (
                                <Image source={icons.dashboard_icon} resizeMode="contain"
                                    style={{ tintColor: tintColor, width: 25, height: 25 }}
                                />
                            );

                        case "Search":
                            return (
                                <Image source={icons.search_icon} resizeMode="contain"
                                    style={{ tintColor: tintColor, width: 25, height: 25 }}
                                />
                            );

                        case "Notification":
                            return (
                                <Image source={icons.notification_icon} resizeMode="contain"
                                    style={{ tintColor: tintColor, width: 25, height: 25 }}
                                />
                            );

                        case "Setting":
                            return (
                                <Image source={icons.menu_icon} resizeMode="contain"
                                    style={{ tintColor: tintColor, width: 25, height: 25 }}
                                />
                            );

                        default:
                            return null;
                    }
                }
            })}
        >
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Search" component={SearchPage} />
            <Tab.Screen name="Notification" component={NotificationPage} />
            <Tab.Screen name="Setting" component={SettingPage} />
        </Tab.Navigator>
    );
};

export default Tabs;
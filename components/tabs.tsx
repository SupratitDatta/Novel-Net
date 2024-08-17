import React from "react";
import { Image, ImageStyle } from 'react-native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/HomePage";
import SettingPage from "../screens/SettingPage";
import NotificationPage from "../screens/NotificationPage";
import SearchPage from "../screens/SearchPage";
import { COLORS } from "../constants/theme.ts";
import icons from "../constants/icons.ts";

type TabBarIconProps = {
    focused: boolean;
    color: string;
    size: number;
};

const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }): BottomTabNavigationOptions => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { height: "10%", backgroundColor: COLORS.black },
                tabBarIcon: ({ focused }: TabBarIconProps) => {
                    const tintColor = focused ? COLORS.white : COLORS.gray;

                    const iconStyle: ImageStyle = { tintColor: tintColor, width: 25, height: 25 };

                    switch (route.name) {
                        case "Home":
                            return (
                                <Image source={icons.dashboard_icon} resizeMode="contain" style={iconStyle} />
                            );

                        case "Search":
                            return (
                                <Image source={icons.search_icon} resizeMode="contain" style={iconStyle} />
                            );

                        case "Notification":
                            return (
                                <Image source={icons.notification_icon} resizeMode="contain" style={iconStyle} />
                            );

                        case "Setting":
                            return (
                                <Image source={icons.menu_icon} resizeMode="contain" style={iconStyle} />
                            );

                        default:
                            return null;
                    }
                },
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
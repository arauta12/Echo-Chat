import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";

import { LocationProvider } from "../contexts/LocationContext";
import { SocketProvider } from "../contexts/SocketContext";
import { NearbyUsersProvider } from "../contexts/NearbyUserContext";
import ChatScreen from "../screens/chat/ChatScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
import { Home } from "react-native-feather";
import { User } from "react-native-feather";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <LocationProvider>
      <SocketProvider>
        <NearbyUsersProvider>
          <NavigationIndependentTree>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={{
                  headerShown: false,
                  tabBarLabelStyle: {
                    fontSize: 15,
                  },
                  tabBarHideOnKeyboard: true,
                }}>
                <Tab.Screen
                  name="Home"
                  component={ChatScreen}
                  options={{
                    tabBarIcon: ({ focused, color, size }) => {
                      return <Home width={size} stroke={color} />;
                    },
                  }}
                />
                <Tab.Screen
                  name="Profile"
                  component={SettingsScreen}
                  options={{
                    tabBarIcon: ({ focused, color, size }) => {
                      return <User width={size} stroke={color} />;
                    },
                  }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </NavigationIndependentTree>
        </NearbyUsersProvider>
      </SocketProvider>
    </LocationProvider>
  );
};

export default AppNavigator;

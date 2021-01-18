import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import TypeChooseScreen from "../screens/TypeChooseScreen";
import AboutDonateScreen from "../screens/AboutDonate";
import {
  DEFAULT_BLUE,
  TAB_ICON_BLACK,
  TAB_ICON_PURPLE,
  WHITE
} from "../../constants/colors";
import { Image, View } from "react-native";
import { ICON_BIG, ICON_SMA } from "../../constants/styles";
import icons from "../../assets/icons";
import DonateScreen from "../screens/Donate";
import LoginStudentScreen from "../screens/LoginStudent";
import LoginTeacherScreen from "../screens/LoginTeacher";
import HomeStudentScreen from "../screens/HomeStudentScreen";
import { ICON_MAX, ICON_MIN } from "../../constants/dimensions";
import TeachersListScreen from "../screens/TeachersList";

const StudentTabs = createBottomTabNavigator();
const TeacherTabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const ListLine = ({ color }) => (
  <View
    style={{
      height: 3,
      flexDirection: "row",
      justifyContent: "space-between"
    }}
  >
    <View style={{ width: 3, borderRadius: 1.5, backgroundColor: color }} />
    <View
      style={{
        flex: 1,
        marginLeft: 3,
        borderRadius: 1.5,
        backgroundColor: color
      }}
    />
  </View>
);

const ListIcon = ({ tintColor }) => (
  <View
    style={{
      width: ICON_MAX * 1.0,
      height: ICON_MAX * 0.9,
      justifyContent: "space-between"
    }}
  >
    <ListLine color={tintColor} />
    <ListLine color={tintColor} />
    <ListLine color={tintColor} />
  </View>
);

const StudentScreens = () => (
  <StudentTabs.Navigator
    screenOptions={({ route }) => ({
      headerBackTitle: "",
      headerTruncatedBackTitle: "",
      headerBackImage: () => (
        <Image
          style={[ICON_SMA, { marginLeft: 20 }]}
          source={icons.arrowLeft}
          resizeMode="contain"
        />
      ),
      headerStyle: {
        backgroundColor: DEFAULT_BLUE,
        borderBottomColor: WHITE,
        borderBottomWidth: 1,
        shadowColor: "transparent"
      },
      headerTintColor: WHITE,
      headerHideShadow: true,
      tabBarIcon: ({ focused, color, size }) => {
        const iconSelec =
          route.name === "HomeStudent" ? icons.homeIcon : icons.profile;

        return route.name === "ListTeachers" ? (
          <ListIcon tintColor={color} />
        ) : (
          <Image
            source={iconSelec}
            style={[ICON_BIG, { tintColor: color }]}
            resizeMode="contain"
          />
        );
      }
    })}
    tabBarOptions={{
      activeTintColor: TAB_ICON_PURPLE,
      inactiveTintColor: TAB_ICON_BLACK
    }}
  >
    <StudentTabs.Screen
      name="HomeStudent"
      component={TeachersListScreen}
      options={{ tabBarLabel: "Início" }}
    />
    <StudentTabs.Screen
      name="ListTeachers"
      component={HomeStudentScreen}
      options={{ tabBarLabel: "Chats" }}
    />
    <StudentTabs.Screen
      name="ProfileStudent"
      component={HomeStudentScreen}
      options={{ tabBarLabel: "Perfil" }}
    />
  </StudentTabs.Navigator>
);

const RootNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerBackTitle: "",
      headerTruncatedBackTitle: "",
      headerBackImage: () => (
        <Image
          style={[ICON_SMA, { marginLeft: 20 }]}
          source={icons.arrowLeft}
          resizeMode="contain"
        />
      ),
      headerStyle: {
        backgroundColor: DEFAULT_BLUE,
        borderBottomColor: WHITE,
        borderBottomWidth: 1,
        shadowColor: "transparent"
      },
      headerTintColor: WHITE,
      headerHideShadow: true
    }}
  >
    <Stack.Screen
      name="Choose"
      component={TypeChooseScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AboutDonate"
      component={AboutDonateScreen}
      options={{ headerTitle: "Sobre as Doações" }}
    />
    <Stack.Screen
      name="Donate"
      component={DonateScreen}
      options={{ headerTitle: "Faça Sua Doação" }}
    />
    <Stack.Screen
      name="LoginStudent"
      component={LoginStudentScreen}
      options={{ headerTitle: "Login Estudante" }}
    />
    <Stack.Screen
      name="LoginTeacher"
      component={LoginTeacherScreen}
      options={{ headerTitle: "Login Professor" }}
    />
    <Stack.Screen
      name="HomeStudent"
      component={StudentScreens}
      options={{ headerTitle: "Olá, aluno" }}
    />
  </Stack.Navigator>
);

export default RootNavigator;

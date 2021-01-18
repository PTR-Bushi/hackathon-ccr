import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "../../assets/icons";
import { WHITE } from "../../constants/colors";
import { DEF_SEPARATION, DEV_WIDTH } from "../../constants/dimensions";
import {
  BUTTON_CHOOSE_LOWER,
  BUTTON_CHOOSE_UPPER,
  DEF_HORIZONTAL_SEPARATOR,
  DEF_SCREEN,
  ICON_BIG,
  ICON_SMA,
  TEXT_BIG,
  TEXT_SMA
} from "../../constants/styles";

const ChooseButton = ({ onPress, style, text, icon }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Text style={{ fontSize: 10, color: WHITE, marginBottom: 10 }}>{text}</Text>
    <Image style={ICON_BIG} source={icon} resizeMode="contain" />
  </TouchableOpacity>
);

const TypeChooseScreen = ({ navigation }) => {
  return (
    <View style={DEF_SCREEN}>
      {/* UPPER TEXT */}
      <View
        style={{
          flex: 0.25,
          width: DEV_WIDTH,
          paddingHorizontal: DEF_SEPARATION,
          marginVertical: DEF_SEPARATION
        }}
      >
        <Text style={TEXT_BIG}>Como você deseja entrar?</Text>
      </View>
      {/* BUTTONS */}
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ChooseButton
          onPress={() => navigation.navigate("LoginTeacher")}
          text={"PROFESSOR"}
          icon={icons.teacher}
          style={BUTTON_CHOOSE_UPPER}
        />
        <View style={DEF_HORIZONTAL_SEPARATOR} />
        <ChooseButton
          onPress={() => navigation.navigate("LoginStudent")}
          text={"ALUNO"}
          icon={icons.student}
          style={BUTTON_CHOOSE_LOWER}
        />
      </View>
      {/* BOTTOM TEXT */}
      <View
        style={{
          flex: 0.3,
          width: DEV_WIDTH,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableOpacity
          style={{
            margin: -5,
            marginTop: -20,
            padding: 5,
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Text
            style={[TEXT_SMA, { marginRight: 5 }]}
            onPress={() => navigation.navigate("AboutDonate")}
          >
            Quero ajudar o projeto
          </Text>
          <Image
            source={icons.arrowRight}
            style={ICON_SMA}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TypeChooseScreen;

import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icons from "../../assets/icons";
import images from "../../assets/images";
import { BUTTON_BIG, DEV_WIDTH } from "../../constants/dimensions";
import {
  BUTTON_TEXT_WIDE,
  DEF_INPUT,
  DEF_SCREEN,
  ICON_SMA,
  TEXT_SMA
} from "../../constants/styles";

const LoginTeacherScreen = ({ navigation }) => {
  const [values, setValues] = useState(["", ""]);

  const fillValues = () => setValues(["user@example.com", "12345678"]);

  return (
    <View style={[DEF_SCREEN, { justifyContent: "center" }]}>
      {/* LOGO */}
      <Image
        source={images.logo}
        style={{ height: BUTTON_BIG, width: BUTTON_BIG * 1.8 }}
        resizeMode="cover"
      />
      {/* LOGIN FORM */}
      <View style={DEF_INPUT}>
        <TextInput
          defaultValue={values[0]}
          placeholder="E-mail"
          autoCapitalize="words"
          onFocus={fillValues}
        />
      </View>
      <View style={DEF_INPUT}>
        <TextInput
          defaultValue={values[1]}
          placeholder="Senha"
          secureTextEntry
        />
      </View>
      <TouchableOpacity>
        <Text
          style={[
            TEXT_SMA,
            { width: DEF_INPUT.width, textAlign: "right", marginTop: 5 }
          ]}
        >
          Esqueceu sua senha?
        </Text>
      </TouchableOpacity>
      {/* LOGIN BUTTON */}
      <TouchableOpacity
        style={[BUTTON_TEXT_WIDE, { marginVertical: 15 }]}
        onPress={() => navigation.navigate("HomeTeacher")}
      >
        <Text style={TEXT_SMA}>ENTRAR</Text>
      </TouchableOpacity>
      {/* BOTTOM TEXT */}
      <View
        style={{
          flex: 0.5,
          width: DEV_WIDTH,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableOpacity
          style={{
            margin: -5,
            padding: 5,
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Image source={icons.plus} style={ICON_SMA} resizeMode="contain" />
          <Text style={[TEXT_SMA, { marginLeft: 5 }]}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginTeacherScreen;

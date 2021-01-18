import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import images from "../../assets/images";
import { WHITE } from "../../constants/colors";
import { BUTTON_BIG, SMALL_CORNER } from "../../constants/dimensions";
import {
  BUTTON_TEXT_WIDE,
  DEF_INPUT,
  DEF_SCREEN,
  TEXT_SMA
} from "../../constants/styles";

const AboutDonateScreen = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState(["", "", ""]);

  const fillValues = () => setValues(["Pedro", "123.456.789-00", "R$ 100,00"]);

  return (
    <View style={DEF_SCREEN}>
      <View style={DEF_INPUT}>
        <TextInput
          defaultValue={values[0]}
          placeholder="NOME"
          autoCapitalize
          onFocus={fillValues}
        />
      </View>
      <View style={DEF_INPUT}>
        <TextInput
          defaultValue={values[1]}
          placeholder="CNPJ / CPF"
          keyboardType="number-pad"
        />
      </View>
      <View style={DEF_INPUT}>
        <TextInput
          defaultValue={values[2]}
          placeholder="VALOR"
          keyboardType="number-pad"
        />
      </View>
      <TouchableOpacity
        style={[BUTTON_TEXT_WIDE, { marginVertical: 15 }]}
        onPress={() => {
          setShow(true);
        }}
      >
        <Text style={TEXT_SMA}>Gerar código</Text>
      </TouchableOpacity>
      {!!show && (
        <View
          style={{
            margin: 15,
            backgroundColor: WHITE,
            borderRadius: SMALL_CORNER,
            padding: SMALL_CORNER / 2
          }}
        >
          <Image
            source={images.qrcode}
            style={{
              width: BUTTON_BIG,
              height: BUTTON_BIG
            }}
            resizeMode="contain"
          />
        </View>
      )}
      {!!show && (
        <TouchableOpacity style={[BUTTON_TEXT_WIDE, { marginVertical: 15 }]}>
          <Text style={TEXT_SMA}>Emitir Comprovante</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AboutDonateScreen;

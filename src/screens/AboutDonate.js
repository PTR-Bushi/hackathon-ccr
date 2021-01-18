import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  BUTTON_TEXT_WIDE,
  DEF_HORIZONTAL_SEPARATOR,
  DEF_SCREEN,
  TEXT_BIG,
  TEXT_SMA
} from "../../constants/styles";

const DonateScreen = ({ navigation }) => {
  return (
    <View style={DEF_SCREEN}>
      {/* UPPPER TEXT */}
      <View style={{ margin: 10, marginLeft: 50, alignSelf: "flex-end" }}>
        <Text style={TEXT_BIG}>Adote um universitário</Text>
      </View>
      <View style={DEF_HORIZONTAL_SEPARATOR} />
      <View style={{ margin: 10, marginLeft: 50, alignSelf: "flex-end" }}>
        <Text style={TEXT_SMA}>
          "Visto que, os universitários estão dispostos a contribuir com a
          sociedade dando aulas de reforço para crianças da escola pública. A
          Sinapse é um aplicativo que conecta o aluno da escola publica com um
          universitário e assim, poderão solucionar juntos as dificuldades de
          aprendizado deste aluno. Precisamos do apoio de toda comunidade!
          Nossos universitários ganham uma ajudar de custo para poder realizar
          essa missão comunitária."
        </Text>
      </View>
      <View style={DEF_HORIZONTAL_SEPARATOR} />
      <TouchableOpacity
        style={BUTTON_TEXT_WIDE}
        onPress={() => navigation.navigate("Donate")}
      >
        <Text style={[TEXT_SMA, { fontWeight: "normal" }]}>
          Realizar Uma Doação
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={BUTTON_TEXT_WIDE}
        onPress={() => navigation.navigate("Meet")}
      >
        <Text style={[TEXT_SMA, { fontWeight: "normal" }]}>
          Conhecer Universitários
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DonateScreen;

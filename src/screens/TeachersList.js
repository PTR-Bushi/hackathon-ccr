import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import icons from "../../assets/icons";
import { TAB_ICON_BLACK } from "../../constants/colors";
import { TEACHERS_LIST } from "../../constants/mockups";
import { DEF_INPUT, DEF_SCREEN, ICON_SMA } from "../../constants/styles";

const TeacherCard = ({ name, university, course, areas = [] }) => (
  <TouchableOpacity
    style={[
      DEF_INPUT,
      {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
      }
    ]}
  >
    <View>
      <Text>
        {name}, {course} - {university}
      </Text>
      <Text>
        Área(s): {areas[0]}
        {areas.length > 1 ? `, ${areas[1]}` : ""}
      </Text>
    </View>
    <Image
      source={icons.arrowRight}
      style={[ICON_SMA, { tintColor: TAB_ICON_BLACK }]}
      resizeMode="contain"
    />
  </TouchableOpacity>
);

const TeachersListScreen = () => {
  return (
    <View style={DEF_SCREEN}>
      <FlatList
        data={TEACHERS_LIST}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <TeacherCard
            name={item.name}
            university={item.university}
            course={item.course}
            areas={item.areas}
          />
        )}
      />
    </View>
  );
};

export default TeachersListScreen;

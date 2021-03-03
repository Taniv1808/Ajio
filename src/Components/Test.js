import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, Image, Button, FlatList } from "react-native";
import navigationStrings from "../Navigation/navigationStrings";
import { Detail } from "../Screens";
Detail;

export default function Test(props) {
  const navigation = useNavigation();
  const { onAdd, data } = props;
   let  item  = data;

  // console.warn(item)

  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(navigationStrings.DETAIL, { array: item })
          }
        >
          <Image
            source={{ uri: data.image1 }}
            style={{ width: 170, height: 220,margin:6}}
          />
        </TouchableOpacity>

        <Text style={{ marginLeft: 65 }}>{data.name}</Text>
        <Text style={{ marginLeft: 65}}>{data.price}</Text>
        <TouchableOpacity
          style={{ marginLeft: 50 }}
          onPress={() => {
            onAdd();
          }}
        >
          <Text
            style={{
              borderWidth: 1,
              width: 90,
              padding: 5,
              backgroundColor: "grey",
              borderRadius: 5,
            }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

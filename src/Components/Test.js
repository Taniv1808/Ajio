import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, Image, Button, FlatList,StyleSheet } from "react-native";
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
            style={styles.mainImages}
          />
        </TouchableOpacity>

        <Text style={styles.mainNames}>{data.name}</Text>
        <Text style={styles.mainNames}>Rs.{data.price}</Text>
        <TouchableOpacity
          style={styles.mainAdd}
          onPress={() => {
            onAdd(data);
          }}
        >
          <Text
            style={styles.mainCart}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Test Stylesheet
const styles=StyleSheet.create({
  mainImages:{
     width: 170,
     height: 220,
     margin:6
    },
  mainNames:{
     marginLeft: 65 
    },
  mainAdd:{ 
    marginLeft: 50
   },
  mainCart:{
    borderWidth: 1,
    width: 90,
    padding: 5,
    backgroundColor: "grey",
    borderRadius: 5,
  }

})
import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Test from "../../Components/Test";
import imagePath from "../../constants/imagePath";

export default class Detail extends Component {
  render() {
    let item = this.props.route.params.array
    // console.warn(item)
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={imagePath.arrow}
            style={{ width: 30, height: 30, marginTop: 50, marginLeft: 30 }}
          />
        </TouchableOpacity>
        <Image
          source={imagePath.search}
          style={{ width: 30, height: 30, marginLeft: 220, marginTop: -30 }}
        />
        <Image
          source={imagePath.wishlist}
          style={{ width: 35, height: 35, marginLeft: 270, marginTop: -33 }}
        />
        <Image
          source={imagePath.bag}
          style={{ width: 26, height: 26, marginLeft: 320, marginTop: -33 }}
        />
        <ScrollView>
          <Image style={{height:420,width:350}} source={{uri:item.image1}}/>
                <Text style={{fontSize:20,marginTop:20,marginLeft:50,color:'grey'}}>{item.name}</Text>                
                <Text style={{fontSize:20,marginTop:6,marginLeft:50}}>{item.price}</Text>
                <Text style={{marginLeft:50}}>Price inclusive of all taxes.</Text>
                <Text style={{marginLeft:50,marginTop:20,borderWidth:1,width:260,padding:8,height:50}}>Extra Upto 25% off on 1500 and Above.</Text>
        </ScrollView>

        <View style={{ flexDirection: "row" }}>
          <Image
            source={imagePath.whatsapp}
            style={{
              width: 40,
              height: 40,
              resizeMode: "contain",
              marginLeft: 30,
              marginBottom: 10,
              backgroundColor: "#dcdcdc",
            }}
          />
          <Image
            source={imagePath.wishlist}
            style={{
              width: 40,
              height: 40,
              marginLeft: 40,
              resizeMode: "contain",
              marginBottom: 13,
              backgroundColor: "#dcdcdc",
            }}
          />
          <TouchableOpacity
            style={{ marginLeft: 90, borderWidth: 1, padding: 5 }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginRight: -3,
                padding: 1,
              }}
            >
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

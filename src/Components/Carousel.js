import React from "react";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";

export default function Carousel(props) {
  const {} = props;
  return (
    <ScrollView
      horizontal={true}
      style={{ flexDirection: "row", marginTop:10}}
      showsHorizontalScrollIndicator={false}
    >
      <View
        style={{
          backgroundColor: `orange`,
          padding: 10,
          margin: 10,
          marginRight: 0,
          borderRadius: 5,
        }}
      >
        <Image
          style={{ height: 60, width: 50 }}
          source={{
            uri:
              "https://images.unsplash.com/photo-1552252059-9d77e4059ad1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
          }}
        ></Image>
        <Text style={{ color: "white", textAlign: "center" }}>MEN</Text>
      </View>
      <View
        style={{
          backgroundColor: `red`,
          padding: 10,
          margin: 10,
          marginRight: 0,
          borderRadius: 5,
        }}
      >
        <Image
          style={{ height: 60, width: 50 }}
          source={{
            uri:
              "https://www.coverstory.co.in/media/cms/home/category/work.jpg",
          }}
        ></Image>
        <Text style={{ color: "white", textAlign: "center" }}>WOMEN</Text>
      </View>
      <View
        style={{
          backgroundColor: `blue`,
          padding: 10,
          margin: 10,
          marginRight: 0,
          borderRadius: 5,
        }}
      >
        <Image
          style={{ height: 60, width: 50 }}
          source={{
            uri:
              "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
        ></Image>
        <Text style={{ color: "white", textAlign: "center" }}>KIDS</Text>
      </View>
      <View
        style={{
          backgroundColor: `black`,
          padding: 10,
          margin: 10,
          marginRight: 0,
          borderRadius: 5,
          
        }}
      >
        <Image
          style={{ height: 60, width: 50 }}
          source={{
            uri:
              "https://i.pinimg.com/474x/47/f2/1e/47f21e63dcab0476e0e9ee4e5f64a845.jpg",
          }}
        ></Image>
        <Text style={{ color: "white", textAlign: "center" }}>HOME</Text>
      </View>
      <View
        style={{
          backgroundColor: `orange`,
          padding: 10,
          margin: 10,
          marginRight: 0,
          borderRadius: 5,
        }}
      >
        <Image
          style={{ height: 60, width: 50 }}
          source={{
            uri:
              "https://images.unsplash.com/photo-1552252059-9d77e4059ad1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
          }}
        ></Image>
        <Text style={{ color: "white", textAlign: "center" }}>MEN</Text>
      </View>
      <View
        style={{
          backgroundColor: `red`,
          padding: 10,
          margin: 10,
          marginRight: 0,
          borderRadius: 5,
        }}
      >
        <Image
          style={{ height: 60, width: 50 }}
          source={{
            uri:
              "https://www.coverstory.co.in/media/cms/home/category/work.jpg",
          }}
        ></Image>
        <Text style={{ color: "white", textAlign: "center" }}>WOMEN</Text>
      </View>
      <View
        style={{
          backgroundColor: `blue`,
          padding: 10,
          margin: 10,
          marginRight: 0,
          borderRadius: 5,
        }}
      >
        <Image
          style={{ height: 60, width: 50 }}
          source={{
            uri:
              "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
        ></Image>
        <Text style={{ color: "white", textAlign: "center" }}>KIDS</Text>
      </View>
      <View
        style={{
          backgroundColor: `black`,
          padding: 10,
          margin: 10,
          marginRight: 0,
          borderRadius: 5,
        }}
      >
        <Image
          style={{ height: 60, width: 50 }}
          source={{
            uri:
              "https://i.pinimg.com/474x/47/f2/1e/47f21e63dcab0476e0e9ee4e5f64a845.jpg",
          }}
        ></Image>
        <Text style={{ color: "white", textAlign: "center" }}>HOME</Text>
      </View>
    </ScrollView>
  );
}

// import Carousel from 'react-native-snap-carousel';
// import React, {Component} from 'react'
// import {View,Dimensions, StyleSheet, Text, Image, SafeAreaView, ScrollView} from 'react-native';

// const sliderWidth = Dimensions.get('window').width + 380;
// const itemWidth = Math.round(sliderWidth *0.5)
// export default class MyCarousel extends Component {

//     state={
//        entries: [
//             {
//               imgUrl: require('../../assets/image/carousel.jpg')
//             },
//             {
//                imgUrl: require('../../assets/image/carousel1.jpg')
//             },
//             {
//               imgUrl: require('../../assets/image/carousel2.jpg')
//             },
//             {
//                 imgUrl: require('../../assets/image/carousel.jpg')
//               },
//               {
//                  imgUrl: require('../../assets/image/carousel1.jpg')
//               },
//               {
//                 imgUrl: require('../../assets/image/carousel.jpg')
//               },
//               {
//                  imgUrl: require('../../assets/image/carousel1.jpg')
//               },
//           ]
//     }
 
//     _renderItem = ({item, index}) => {
//         return (
//             <View style={style.slide}>
//                 <Image source={item.imgUrl} style={{width:400, height:300}}/>
//             </View>
//         );
//     }
 
//     render () {
//         return (
//             <Carousel
              
//               data={this.state.entries}
//               renderItem={this._renderItem}
//               sliderWidth={sliderWidth}
//               itemWidth={itemWidth}
//             />
//         );
//     }
// }



// const style = StyleSheet.create({
//     slide: {},
//     title:{},
// })
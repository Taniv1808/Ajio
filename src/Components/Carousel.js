import React from "react";
import { View, Image, ScrollView, Text, TouchableOpacity,StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export default function Carousel(props) {
  const {} = props;
  return (
    <ScrollView
      horizontal={true}
      style={styles.mainCarousel}
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
          style={styles.carouselImages}
          source={{
            uri:
              "https://images.unsplash.com/photo-1552252059-9d77e4059ad1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
          }}
        ></Image>
        <Text style={styles.carouselText}>MEN</Text>
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
          style={styles.carouselImages}
          source={{
            uri:
              "https://www.coverstory.co.in/media/cms/home/category/work.jpg",
          }}
        ></Image>
        <Text style={styles.carouselText}>WOMEN</Text>
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
          style={styles.carouselImages}
          source={{
            uri:
              "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
        ></Image>
        <Text style={styles.carouselText}>KIDS</Text>
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
          style={styles.carouselImages}
          source={{
            uri:
              "https://i.pinimg.com/474x/47/f2/1e/47f21e63dcab0476e0e9ee4e5f64a845.jpg",
          }}
        ></Image>
        <Text style={styles.carouselText}>HOME</Text>
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
          style={styles.carouselImages}
          source={{
            uri:
              "https://images.unsplash.com/photo-1552252059-9d77e4059ad1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
          }}
        ></Image>
        <Text style={styles.carouselText}>MEN</Text>
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
          style={styles.carouselImages}
          source={{
            uri:
              "https://www.coverstory.co.in/media/cms/home/category/work.jpg",
          }}
        ></Image>
        <Text style={styles.carouselText}>WOMEN</Text>
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
          style={styles.carouselImages}
          source={{
            uri:
              "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
        ></Image>
        <Text style={styles.carouselText}>KIDS</Text>
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
          style={styles.carouselImages}
          source={{
            uri:
              "https://i.pinimg.com/474x/47/f2/1e/47f21e63dcab0476e0e9ee4e5f64a845.jpg",
          }}
        ></Image>
        <Text style={styles.carouselText}>HOME</Text>
      </View>
    </ScrollView>
  );
}

// Carousel Stylesheet
const styles=StyleSheet.create({
      mainCarousel:{ 
        flexDirection: "row", 
        marginTop:10
      },
      carouselImages:{ 
        height: 60, 
        width: 50 
      },
      carouselText:{ 
        color: "white", 
        textAlign: "center" 
      },
})
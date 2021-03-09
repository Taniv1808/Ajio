import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Carousel from "../../Components/Carousel";
import Test from "../../Components/Test";
import Shopping from "../../Components/Test";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../Navigation/navigationStrings";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArray: [
        {
          id: 1,
          image1:
            "https://www.shopperwear.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/p/l/plus-size-clothing-men-shirts-long-sleeve-2017-new-spring-solid-color-slim-fit-shirt-cotton-casual-shirt-men-clothes-extra-image-4.jpg",
          name: "LEVIS",
          price: 2500,
        },
        {
          id: 2,
          image1:
            "https://assets.ajio.com/medias/sys_master/root/20210228/GIlV/603abd1daeb269698174762f/blackberrys_green_checked_slim_fit_shirt.jpg",
          name: "Tom Hiddle",
          price: 4500,
        },
        {
          id: 3,
          image1:
            "https://assets.ajio.com/medias/sys_master/root/20210228/9yxW/603abcdbf997dd5c400113b6/marks_&_spencer_cream_textured_shirt_with_flap_pockets.jpg",
          name: "NETPLAY",
          price: 1500,
        },
        {
          id: 4,
          image1:
            "https://assets.ajio.com/medias/sys_master/root/20210228/mw4e/603ab854aeb2696981743fd4/marks_&_spencer_gold_slim_fit_crew-_neck_t-shirt.jpg",
          name: "ADIDAS",
          price: 2500,
        },
        {
          id: 5,
          image1:
            "https://assets.ajio.com/medias/sys_master/root/20210228/EOgH/603abd49aeb26969817478d3/the_kaftan_company_beige_kaftans_with_short_sleeves.jpg",
          name: "ZARA",
          price: 5500,
        },
        {
          id: 6,
          image1:
            "https://assets.ajio.com/medias/sys_master/root/20210228/hqhB/603abcc17cdb8c1f14525e90/the_kaftan_company_pink_floral_print_skater_dress.jpg",
          name: "CHANNEL",
          price: 7500,
        },
        {
          id: 7,
          image1:
            "https://assets.ajio.com/medias/sys_master/root/20210225/FcUK/60374f97aeb26969816fe78d/united_colors_of_benetton_navy_blue_mid-rise_joggers_with_drawstring_fastening.jpg",
          name: "UCB",
          price: 3500,
        },
        {
          id: 8,
          image1:
            "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "BURBERRY",
          price: 1000,
        },
      ],
      iterator: 1,
      counter: 0,
      emptyArray: [],
    };
  }
  addCart = (item) => {
    let { counter, emptyArray } = this.state;
    let newCart = [...emptyArray, ...[item]];
    let index = emptyArray.findIndex((data) => data.id == item.id);
    if (!(index == -1)) {
      alert('Already added')
      this.setState({

      });
    }else{
    this.setState({
      emptyArray: newCart,
      counter: counter + 1,
    });}
  };
  componentDidMount = () => {
    let { emptyArray } = this.state;
    this.focusListner = this.props.navigation.addListener("focus", () => {
      // alert("Item added");
      console.log(this.props);
      if (this.props.route.params) {
        this.addCart(this.props.route.params.product);
      }
    });
  };
  componentWillUnmount() {
    if (this.focusListner) {
      this.focusListner();
    }
  }
  render() {
    let { imageArray, counter,emptyArray } = this.state;
    const{navigation}=this.props
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", marginTop: 70 }}>
          <TouchableOpacity>
            <Image
              source={imagePath.lines}
              style={{ width: 30, height: 30, marginLeft: 10 }}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 125, fontSize: 20, fontWeight: "bold" }}>
            AJIO
          </Text>
          <TouchableOpacity>
            <Image
              source={imagePath.bell}
              style={{ width: 28, height: 28, marginLeft: 60 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(navigationStrings.CART, {
                taniv: emptyArray,
              })
            }
          >
            <Image
              source={imagePath.cart}
              style={{ width: 35, height: 35, marginLeft: 10 }}
            />
            <Text
              style={{
                position: "absolute",
                zIndex: 234,
                left: 30,
                backgroundColor: "red",
                borderRadius: 100,
                textAlign:'center',
                width:15,
                height:18
              
              }}
            >
              {counter}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            borderWidth: 1,
            borderRadius: 5,
            width: 250,
            marginLeft: 60,
            height: 40,
            marginBottom: 8,
          }}
        >
          <Image
            source={imagePath.search}
            style={{ width: 20, height: 20, marginTop: 10 }}
          />
          <TextInput
            placeholder="Search by Product,Brand & more.."
            style={{ marginTop: -25, marginLeft: 19 }}
          ></TextInput>
        </View>

        <ScrollView>
          <Carousel />

          <View>
            <Image
              source={{
                uri:
                  "https://i.pinimg.com/originals/b9/44/1f/b9441fa10a673e22eadb3e1ea86b1d04.jpg",
              }}
              style={{ width: "100%", height: 400 }}
            />
            <Image
              source={{
                uri:
                  "https://assets.ajio.com/medias/sys_master/images/images/h2f/h8a/30349149405214/04022021-d-unisex-experienceajio-sectionheader.jpg",
              }}
              style={{ width: "100%", height: 40 }}
            />
            <Image
              source={{
                uri:
                  "https://assets.ajio.com/medias/sys_master/images/images/hd8/hfe/30350643429406/04022021-d-unisex-experienceajio-signup-upto500.jpg",
              }}
              style={{ width: "100%", height: 40 }}
            />
            <Image
              source={{
                uri:
                  "https://assets.ajio.com/medias/sys_master/images/images/hc3/ha8/30618001014814/17022021-d-unisex-newseason-extra20.jpg",
              }}
              style={{ width: "100%", height: 100, marginTop: 10 }}
            />
          </View>

          <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 90 }}>
            DEALS OF THE DAY
          </Text>
          {/* {imageArray.map((value, index) => {
            return (
              <Test
                key={String(index)}
                data={value}
                onAdd={this.addCart}
              ></Test>
            );
          })} */}
          <FlatList
            data={imageArray}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
            renderItem={({ item }) => <Test data={item} onAdd={this.addCart} />}
          />

          <View
            style={{
              backgroundColor: "#dcdcdc",
              marginTop: 7,
              backgroundColor: "red",
            }}
          >
            <Image
              source={{
                uri:
                  "https://assets.ajio.com/medias/sys_master/images/images/hd4/h64/30832502407198/01032021-D-unisex-flashdeals-home-under1499.jpg",
              }}
              style={{ width: "100%", height: 100, marginTop: 1 }}
            />
            <Image
              source={{
                uri:
                  "https://assets.ajio.com/medias/sys_master/images/images/h80/h0b/30349157990430/04022021-d-unisex-brands-exploremore-sectionheader.jpg",
              }}
              style={{ width: 390, height: 20 }}
            />
            <Image
              source={{
                uri:
                  "https://assets.ajio.com/medias/sys_master/images/images/h1f/hef/30779031322654/01032021-d-unisex-whatshot-levis-deepikacampaign.jpg",
              }}
              style={{ width: "100%", height: 150 }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Homepage;

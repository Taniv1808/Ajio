import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, Image, Button, FlatList ,TextInput} from "react-native";
import navigationStrings from "../Navigation/navigationStrings";

export default function AddCart(props){
    const{data}=props
    return(
        <View>
        <View style={styles.images}>
            <Image source={{uri:data.image1}} style={styles.images2}/>
            <View style={styles.text}>
            <Text style={styles.text1}>{data.name}</Text>
            <Text style={styles.text2}>Rs.{data.price}</Text>
            </View>
        </View>
        <TouchableOpacity>
    <Text style={styles.del}>DELETE</Text>
        </TouchableOpacity>
        </View>
    )
}

// add to cart stylesheet
const styles=StyleSheet.create({
    images:{
    backgroundColor:'white',
    marginTop:10,
    flexDirection:'row',
    marginVertical:-20,
    marginBottom:8,
    
    },
    
    images2:{
        width:150,
        height:180,
        marginLeft:10,
        marginVertical:5
    },
    text:{
        flexDirection:'column',
        marginTop:40
    },
    text1:{
        marginLeft:20,
        marginVertical:30
    },
    text2:{
        marginLeft:23,
        marginTop:-20
    },
    del:{
        marginLeft:23,
        marginTop:-4,
        marginLeft:290,
        color:'blue',
        }
})

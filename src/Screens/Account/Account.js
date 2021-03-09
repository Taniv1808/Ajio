import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Alert} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../Navigation/navigationStrings';
imagePath
navigationStrings

export default class Account extends Component{

    state={
        selectedImage:'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png'
    }

    selectImage = () => {
        Alert.alert(
            "Profile Image",
            "Select appropriate Image for your Profile",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Gallery",
                    onPress: this.getImageUsingGallery,
                },
                {
                    text: "Camera",
                    onPress: this.getImageUsingCamera
                }
            ],
            { cancelable: false }
        );
    }


    getImageUsingCamera = async () => {
        let picker = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        })
        if (picker.cancelled === true) {
            return;
        }
        this.setState({
            selectedImage: picker.uri
        })
    }

    getImageUsingGallery = async () => {
        let picker = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        })
        if (picker.cancelled === true) {
            return;
        }
        this.setState({
            selectedImage: picker.uri
        })

    }

    render(){
        const{navigation}=this.props
        return(
            <>
            <Text style={styles.accountText}>My Account</Text>
            <TouchableOpacity style={{alignItems:'center',marginTop:10}}>
                <Image source={{uri:this.state.selectedImage}} style={styles.accountImage}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.selectImage} style={{alignItems:'center',marginTop:10}}>
                <Text style={styles.textsize}>Add Image</Text>
            </TouchableOpacity>
            <ScrollView>
                <View style={styles.accountdata}>
            <Text style={styles.order}>Orders</Text>
            <Image source={imagePath.side} style={styles.lastImage}/>
            </View>
            <View style={styles.accountdata}>
            <Text style={styles.extra}>Customer Care</Text>
            <Image source={imagePath.side} style={styles.lastImage}/>
            </View>
            <View style={styles.accountdata}>
            <Text style={styles.extra}>Invite Friends</Text>
            <Image source={imagePath.side} style={styles.lastImage}/>
            </View>
            <View style={styles.accountdata}>
            <Text style={styles.extra}>Ajio Wallet</Text>
            <Image source={imagePath.side} style={styles.lastImage}/>
            </View>
            <View style={styles.accountdata}>
            <Text style={styles.extra}>Saved Cards</Text>
            <Image source={imagePath.side} style={styles.lastImage}/>
            </View>
            <View style={styles.accountdata}>
            <Text style={styles.extra}>My Rewards</Text>
            <Image source={imagePath.side} style={styles.lastImage}/>
            </View>
            <View style={styles.accountdata}>
            <Text style={styles.extra}>Address</Text>
            <Image source={imagePath.side} style={styles.lastImage}/>
            </View>
            <View style={styles.accountdata}>
            <Text style={styles.extra}>Notifications</Text>
            <Image source={imagePath.side} style={styles.lastImage}/>
            </View>
            <View style={styles.accountdata}>
            <Text style={styles.extra}>How to Return</Text>
            <Image source={imagePath.side} style={styles.lastImage}/>
            </View>
            <View style={styles.accountdata}>
            <Text style={styles.extra}>How Do I Redeem my Coupon?</Text>
            <Image source={imagePath.side} style={styles.lastImage}/>
            </View>
            <View style={styles.accountdata}>
            <Text style={styles.extra}>Terms & Conditions</Text>
            <Image source={imagePath.side} style={styles.lastImage}/>
            </View>
            <View style={styles.accountdata}>
            <Text style={styles.extra}>Promotions Terms & Conditions</Text>
            <Image source={imagePath.side} style={styles.lastImage}/>
            </View>
            <View style={styles.accountdata}>
            <Text style={styles.extra}>Return & Refund Policy</Text>
            <Image source={imagePath.side} style={styles.lastImage}/>
            </View>
            <View style={styles.accountdata}>
            <Text style={styles.extra}>Who We Are</Text>
            <Image source={imagePath.side} style={styles.lastImage}/>
            </View>
            <View style={styles.accountdata}>
            <Text style={{
            backgroundColor:'white',
            fontSize:17,
            width:334,
            marginLeft:10,
            marginTop:4,
            height:40,
            padding:7,
            marginBottom:9
        }}>Join Our Team</Text>
            <Image source={imagePath.side} style={styles.lastImage}/>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.LOGIN)}>
                <Text style={styles.lastButton}>Logout</Text>
            </TouchableOpacity>
            
            </ScrollView>
            </>
        )
    }
}

// Account stylesheet
const styles=StyleSheet.create({
        accountText:{
            marginTop:60,
            textAlign:'center',
            fontSize:30
        },
        accountImage:{
            width:80,
            height:80,
            borderRadius:20
        
        },
        textsize:{
            fontSize:20,
            borderWidth:1,
            width:100,
            textAlign:'center',
            backgroundColor:'#dcdcdc',
            borderRadius:10,
            marginBottom:10
        },
        accountdata:{
            flexDirection:'row'
        },
        order:{
            backgroundColor:'white',
            fontSize:17,
            width:334,
            marginLeft:10,
            marginTop:10,
            height:40,
            padding:7
        },
        extra:{
            backgroundColor:'white',
            fontSize:17,
            width:334,
            marginLeft:10,
            marginTop:4,
            height:40,
            padding:7
        },
        lastImage:{
            width:20,
            height:20,
            marginLeft:-30,
            marginTop:15
        },
        lastButton:{
            textAlign:'center',
            borderWidth:1,
            width:190,
            marginLeft:30,
            marginTop:10,
            marginBottom:10,
            borderRadius:10,
            height:40,
            width:290,
            textAlign:'center',
            padding:9,

            
        }

})
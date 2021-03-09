import React ,{ Component } from "react";
import { render } from "react-dom";
import { Image } from "react-native";
import {View,Text,Share,Linking} from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import imagePath from "../../constants/imagePath";
import openMap from 'react-native-open-maps';
// import {openInbox,openComposer} from 'react-native-email-link'


export default class Checkout extends Component{
    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'order Id: 383889',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }

    _goToYosemite=()=> {
        openMap({ latitude: 30.719155, longitude: 76.810193 });
    }

dialCall = () => {
 
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${1234567890}';
    }
    else {
      phoneNumber = 'telprompt:${1234567890}';
    }
 
    Linking.openURL(phoneNumber);
  };
   openEmail=()=>{
    Linking.openURL('mailto:parveen@gmail.com?subject=Your Order&body=Thanks to order us')
   }
    render(){
        const { navigation } = this.props;
        return(
            <View>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
               <Image source={imagePath.arrow} style={{marginHorizontal:20,marginVertical:50,width:30,height:30}}/>
               </TouchableOpacity>
               <Text style={{marginTop:53,fontWeight:'bold',fontSize:20}}>Order Confirmation</Text>
               </View>
                   <View style={{marginTop:-10}}>
               <Text style={{marginLeft:45,color:'grey',fontSize:12}}>Secure Payment | Genuine Products | Easy Returns </Text>
               </View>
               <View style={{backgroundColor:'white',marginTop:20,width:300,height:170,marginLeft:30,borderRadius:10}}>
               <View style={{flexDirection:'row'}}>
                   <Text style={{marginLeft:20,fontSize:20,marginTop:10}}>Home Delivery</Text>
                   <TouchableOpacity>
                   <Text style={{marginLeft:45,color:'blue',marginTop:15}}>Change Address</Text>
                   </TouchableOpacity>
               </View>
               <Text style={{marginTop:10,marginLeft:20,fontWeight:'bold'}}>Taniv Goyal</Text>
               <Text style={{marginTop:10,marginLeft:20,color:'grey'}}>1470B/6,jyoti Nagar,KURUKSHETRA.</Text>
               <Text style={{marginTop:5,marginLeft:20,color:'grey'}}>HARYANA-136118</Text>
               <View style={{flexDirection:'row'}}>
               <Text style={{marginTop:5,marginLeft:20,color:'grey'}}>Phone:</Text>
               <Text style={{marginTop:5}}> 9416183301</Text>
               </View>
               </View>
               <View style={{flexDirection:'row'}}>
               <Text style={{marginTop:10,marginLeft:10,fontSize:16,backgroundColor:'white',width:338,height:40,padding:6}}>Expected Delivery</Text>
               <Image source={imagePath.down} style={{width:20,height:20,marginLeft:-50,marginTop:15}}/>
               </View>
               <View style={{flexDirection:'row'}}>
               <Text style={{marginTop:10,marginLeft:10,fontSize:16,backgroundColor:'white',width:338,height:40,padding:6}}>Order Details</Text>
               <Image source={imagePath.down} style={{width:20,height:20,marginLeft:-50,marginTop:15}}/>
               </View>
               <View style={{flexDirection:'row'}}>
               <Text style={{marginTop:10,marginLeft:10,fontSize:16,backgroundColor:'white',width:338,height:40,padding:6}}>Payment</Text>
               <Image source={imagePath.down} style={{width:20,height:20,marginLeft:-50,marginTop:15}}/>
               </View>
               <Text style={{marginLeft:14,color:'grey',fontSize:13,marginTop:10}}>We have served 7 Million+ happy customers across India. </Text>
               <View style={{flexDirection:'row',marginTop:50,marginLeft:14}}>
                   <TouchableOpacity onPress={this.onShare}>
                   <Image source={imagePath.share} style={{width:40,height:40,resizeMode:'contain'}}/>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={this.dialCall}>
                   <Image source={imagePath.phone} style={{width:40,height:40,marginLeft:50,resizeMode:'contain'}}/>
                   </TouchableOpacity>
                   <TouchableOpacity  onPress={this.openEmail}>
                   <Image source={imagePath.mail} style={{width:50,height:50,marginLeft:50,resizeMode:'contain'}}/>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={this._goToYosemite}>
                   <Image source={imagePath.locate} style={{width:50,height:50,marginLeft:50,resizeMode:'contain'}}/>
                   </TouchableOpacity>
               </View>
            </View>
        )
    }
}
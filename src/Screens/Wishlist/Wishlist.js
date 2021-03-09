import React,{Component} from 'react';
import {View,Text} from 'react-native'

export default class Wishlist extends Component{
    render(){
        return(
            <View style={{alignItems:'center',marginTop:60}}>
                <Text style={{fontSize:36}}>My Wishlist</Text>
            </View>
        )
    }
}
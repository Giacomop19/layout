import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import portrait from '../../assets/img/portrait.png'

const Card = () => {
  return (
    <View style={styles.container}>
        <View style={styles.circle}>
            <AntDesign name='check' style={styles.logo} size={25}></AntDesign>
        </View>
        <View style={styles.text_box}>
            <Text style={styles.text1}>Transfer Success!</Text>
            <Text style={styles.text2}>Your transfer was completed succesfully</Text>
            <Text style={styles.text3}>1000000<Text style={{color : "grey"}}>€</Text></Text>
        </View>
        <View style={styles.img_box}>
            <Image source={portrait} style={styles.img}/>
        </View>

        
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container : {
        height : 500,
        width : '95%',
        borderWidth : 1,
        borderColor : 'grey',
        borderRadius : 20,
        shadowColor : "grey",
        shadowOffset : {
            width :1 ,
            height :3
        },
        elevation :10,
        shadowOpacity : 1,
        backgroundColor : "white",
        alignItems : 'center',
        // justifyContent : "center"
        
    },
    circle : {
        backgroundColor: 'blue',
        borderRadius: '50%',
        width: 50,
        height: 50,
        alignItems : "center",
        justifyContent : "center",
        // marginBottom : 300,
        marginTop : 50,
        marginBottom: 20


    },
    logo : {
        color : "white"
    
    },
    text_box : {
        flexDirection : 'column',
    },
    text1 : {
        justifyContent: "center",
        alignItems : "center",
        textAlign : "center",
        color : "black",
        fontWeight : "bold",
        fontSize : 16,

    },
    text2 : {
        justifyContent: "center",
        alignItems : "center",
        textAlign : "center",
        color: "grey",
        fontWeight : "400",
        fontSize : 13,
        marginTop : 5

    },
    text3 : {
        justifyContent: "center",
        alignItems : "center",
        textAlign : "center",
        fontSize : 30,
        marginTop : 20,

        


    },
    img : {
        width : 60,
        height :60,
        borderRadius : 50
        
    },
    img_box : {
        width: "90%",
        marginTop : 50
        
        
    }
})
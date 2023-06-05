import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'


const Home = () => {
  return (
    <View style={styles.container}>
        <Card></Card>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container : {
        flex : 1,
        height : '100%',
        width : '100%',
        // justifyContent : 'center',
        alignItems : 'center',
        paddingTop : 50,
        

    }
})
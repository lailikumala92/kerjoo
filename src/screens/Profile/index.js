import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Profile = ({navigation}) => {
    return (
        <>
        <Text style={style.dashboard}>Profile Information</Text>
        <TouchableOpacity style={style.card}>
            <View style={style.detail}>
                <Text style={style.title}>Username</Text>
                <Text >Laili Kumala</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.card}>
            <View style={style.detail}>
                <Text style={style.title}>Email</Text>
                <Text >lailikumala92@gmail.com</Text>
            </View>
        </TouchableOpacity>
        <View style={style.card}>
            <TouchableOpacity 
            onPress={()=> navigation.navigate('Login')}>
                <Text style={style.logout}>Logout</Text>
            </TouchableOpacity>
        </View>
    </>
    )
}

export default Profile

const style = StyleSheet.create({
    dashboard: {
        display: 'flex',
        marginTop: 80,
        marginBottom: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'green'
    },
    card: {
        width: '94%',
        height: 60,
        borderRadius: 6,
        backgroundColor: '#fff',
        marginLeft: 10,
        marginBottom: 15,
        elevation: 5,
      },
      detail: {
        marginLeft: 20,
        marginTop: 10
      },
      title: {
          fontWeight: 'bold',
          fontSize: 15,
      },
      logout: {
        fontWeight: 'bold',
        fontSize: 17,
        alignItems: 'center',
        textAlign: 'center',
        lineHeight: 60,
        color: 'red'
      }
      
})

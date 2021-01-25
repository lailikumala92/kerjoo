import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const Dashboard = ({navigation}) => {
    return (
        <>
            <Text style={style.dashboard}>Dashboard</Text>
            <View style={style.card}>
                <TouchableOpacity 
                onPress={()=> navigation.navigate('Login')}>
                    <Text style={style.title}>Absen Masuk</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={style.card}>
                <Text style={style.title}>Absensi Keluar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.card}>
                <Text style={style.title}>Absensi Istirahat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.card}>
                <Text style={style.title}>Absensi Selesai Istirahat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.card}>
                <Text style={style.title}>Absen Mulai Lembur</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.card}>
                <Text style={style.title}>Absensi Selesai Lembur</Text>
            </TouchableOpacity>
        </>
            
    )
}

export default Dashboard

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
      title: {
          fontWeight: 'bold',
          fontSize: 17,
          alignItems: 'center',
          textAlign: 'center',
          lineHeight: 60
      }
})

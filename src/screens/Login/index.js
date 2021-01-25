import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity,  ScrollView, TextInput, Alert, BackHandler} from 'react-native';


const Login = ({navigation}) => {
    const inputPassword = React.useRef();
    const [email, setUserEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
   
    
    const onSubmit = () => {
        
    }

    return (
       <>
        <ScrollView style={{backgroundColor: '#e9eef7'}} keyboardShouldPersistTaps='always'>
        <View>
        
        <Text style={style.login}>Login</Text>
        
        </View>
        <View style={style.inputItem}>
          <TextInput
            style={style.input}
            value={email}
            placeholder=" Enter Your Email"
            autoCapitalize={'none'}
            onChangeText={(e) => setUserEmail(e)}
            onSubmitEditing={() => setPassword.current.focus()}
            returnKeyType="next"
          />
          </View>
          <View style={style.inputItem}>
          <TextInput
            style={style.input}
            value={password}
            placeholder=" Enter Your Password"
            autoCapitalize={'none'}
            onChangeText={(e) => setPassword(e)}
            onSubmitEditing={() => onSubmit()}
            
          />
            
        </View>
        <View style={style.card}>
            <TouchableOpacity 
                onPress={()=> navigation.navigate('Dashboard')}>
                <Text style={style.title}>Login</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
       </>
    )
}

export default Login

const style = StyleSheet.create({
    login: {
        display: 'flex',
        marginTop: 80,
        marginBottom: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'green'
    },
    inputItem: {
        padding: 5,
        borderWidth: 0,
        borderColor: '#333',
        marginVertical: 5,
        borderRadius: 5,
        marginTop: 10
      },
      input: {
        backgroundColor: '#e9eef7',
        height:50,
        width: '95%',
        marginLeft:10,
        backgroundColor: '#fff'
      },
      card: {
        width: '94%',
        height: 60,
        borderRadius: 6,
        backgroundColor: '#fff',
        marginLeft: 10,
        marginBottom: 15,
        marginTop: 80,
        elevation: 5,
        backgroundColor: "green",
        
      },
      title: {
          fontWeight: 'bold',
          fontSize: 17,
          alignItems: 'center',
          textAlign: 'center',
          lineHeight: 60,
          color: "#fff"
      }
})

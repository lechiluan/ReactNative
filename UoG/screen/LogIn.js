import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import react from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

import UserInput from "../Components/UserInput";

const LogIn = () => {
    return(
        <View style={styles.LogIn}>
            <Image style={styles.image}source={require('../assets/Logo.png')} />
            <Text style={styles.title}>Login</Text>
            {/* <Text style={styles.username}>Username</Text>
            <TextInput style={styles.input} />
            <Text style={styles.password}>Password</Text>
            <TextInput style={styles.input} /> */}
            
            <UserInput name="UserName"/>
            <UserInput name="Password"/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            
            <Text>
                Don't have an account? <Text style={{color:'green'}}>Register</Text>
            </Text>
            <Text style={{color: 'red'}}>Forgot Password</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    LogIn: {
        // flex: 1,  
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    image: {
        width: 250,
        height: 150,
        marginVertical: 30, // trên dưới 
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'purple',
        marginBottom: 30,
    },
    username: {
        width: "100%",
        marginTop: 20,
        fontWeight: '500',
    },
    password: {
        width: "100%",
        marginTop: 20,
        fontWeight: '500',
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        width: "100%",
        height: 40,
        marginBottom: 30,
    },
    button: {
        backgroundColor: 'blue',
        width: "60%",
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        marginTop: 30,
    },
    buttonText: {
        color: 'white',
    },
});

export default LogIn;

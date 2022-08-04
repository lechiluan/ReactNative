import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import UserInput from "../Components/UserInput";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view' //ScrollView

const ForgotPassword = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState('');
    
    const handleSubmit = async () => {
        setLoading(true);
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email) {
            alert('Please fill out all fields');
            setLoading(false);
            return;
        }
        else if(reg.test(email) === false) {
            alert('Please enter a valid email');
            setLoading(false);
            return;
        }
        // else to send data to the server
        try {
            alert('Sending is successful');
        }
        catch (error) {
            alert('Email is incorrect');
        }
    };
    return(
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={styles.ForgotPassword}>
                <Image style={styles.image}source={require('../assets/Logo.png')} />
                <Text style={styles.title}>Forgot Password </Text>
                
                <UserInput 
                    name="Email"
                    value={email}
                    setValue={setEmail}
                    autocompleteType="email"
                />
                
                <TouchableOpacity style={styles.button} onPress={() => handleSubmit()} >
                    <Text style={styles.buttonText}>{loading ? "Sending..." : "Send code to Email"}</Text>
                </TouchableOpacity>

                <Text>
                    Don't have an account? <Text onPress={() => navigation.navigate("SignUp")} style={{color:'blue'}}>Sign Up</Text>
                </Text>
            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    ForgotPassword: {
        // flex: 1,  
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    image: {
        width: 250,
        height: 150,
        marginVertical: 30,  
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
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
        width: "100%",
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
    },
});

export default ForgotPassword;
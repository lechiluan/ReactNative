import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import UserInput from "../Components/UserInput";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view' //ScrollView

const SignUp = ({ navigation }) => {
    // Create const for the state of the inputs
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState('');

    const [hidePass, setHidePass] = useState(true);
    const showPassword = () => {
        setHidePass(hidePass ? false : true);}
    const [hideConfirmPass, setHideConfirmPass] = useState(true);
    const showConfirmPassword = () => {
        setHideConfirmPass(hideConfirmPass ? false : true);}
    

    const handleSubmit = async () => {
        setLoading(true);
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regPhone = /^[0-9\b]+$/;

        if(!fullName || !email || !password || !confirmPassword || !phone) {
            alert('Please fill out all fields');
            setLoading(false);
            return;
        }
        else if(reg.test(email) === false) {
            alert('Please enter a valid email');
            setLoading(false);
            return;
        }
        else if(regPhone.test(phone) === false) {
            alert('Please enter a valid phone number');
            setLoading(false);
            return;
        }
        else if(password.length < 6) { 
            alert('Password must be at least 6 characters');
            setLoading(false);
            return; 
        }
        else if(password !== confirmPassword) { 
            alert('Passwords do not match');
            setLoading(false);
            return;
        }
        // else to send data to the server
        try {
            alert('Sign Up is successful');
        }
        catch (error) {
            alert('Sign Up is failed');
        }
    };
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={styles.SignUp}>
                <Image style={styles.image} source={require('../assets/Logo.png')} />
                <Text style={styles.title}>Sign Up</Text>

                <UserInput
                    name="Full Name"
                    value={fullName}
                    setValue={setFullName}
                    autocompleteType="word"
                />
                <UserInput
                    name="Email"
                    value={email}
                    setValue={setEmail}
                    autocompleteType="email"
                />
                <UserInput 
                    name="Password" 
                    secureTextEntry={hidePass?true:false} 
                    value={password}  
                    setValue={setPassword}
                    autocompleteType="password"
                />
                <View style={styles.logoInput}>
                    <TouchableOpacity onPress={() => showPassword()}>
                    <Text>{hidePass? "👀":"⛔"}</Text>
                    </TouchableOpacity>
                </View>
                <UserInput
                    name="Confirm Password"
                    value={confirmPassword}
                    secureTextEntry={hideConfirmPass?true:false}
                    setValue={setConfirmPassword}
                    autocompleteType="password"
                />
                <View style={styles.logoInput}>
                    <TouchableOpacity onPress={() => showConfirmPassword()}>
                    <Text>{hideConfirmPass? "👀":"⛔"}</Text>
                    </TouchableOpacity>
                </View>
                <UserInput
                    name="Phone Number"
                    value={phone}
                    setValue={setPhone}
                    keyboardType="numeric"
                />

                <TouchableOpacity style={styles.button} onPress={() => handleSubmit()} >
                    <Text style={styles.buttonText}>{loading ? "Waiting..." : "Sign Up"}</Text>
                </TouchableOpacity>

                <Text style={styles.login}>
                    Do have an account? <Text onPress={() => navigation.navigate("LogIn")} style={{ color: 'blue' }}>Log In</Text>
                </Text>
            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    SignUp: {
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
    login: {
        marginBottom: 20,
    },
    logoInput: {
        position: "relative",
        top: -45,
        right: -130,
    }
});

export default SignUp;
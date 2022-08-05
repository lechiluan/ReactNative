import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import UserInput from "../Components/UserInput";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view' //ScrollView

const LogIn = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const [hidePass, setHidePass] = useState(true);
    const showPassword = () => {
        setHidePass(hidePass ? false : true);}

    const handleSubmit = async () => {
        setLoading(true);
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email || !password) {
            alert('Please fill out all fields');
            setLoading(false);
            return;
        }
        else if(reg.test(email) === false) {
            alert('Please enter a valid email');
            setLoading(false);
            return;
        }
        else if(password.length < 6) { 
            alert('Password must be at least 6 characters');
            setLoading(false);
            return; 
        }
        // else to send data to the server
        try {
            alert('Log In is successful');
        }
        catch (error) {
            alert('Username or password is incorrect');
        }
    };
    return(
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={styles.LogIn}>
                <Image style={styles.image}source={require('../assets/Logo.png')} />
                <Text style={styles.title}>Log In</Text>
                
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
                <TouchableOpacity style={styles.button} onPress={() => handleSubmit()} >
                    <Text style={styles.buttonText}>{loading ? "Waiting..." : "Log In"}</Text>
                </TouchableOpacity>
                            
                <Text>
                    Don't have an account? <Text onPress={() => navigation.navigate("SignUp")} style={{color:'blue'}}>Sign Up</Text>
                </Text>
                <Text onPress={() => navigation.navigate("ForgotPassword")} style={{color: 'red'}}>Forgot Password</Text>
            </View>
        </KeyboardAwareScrollView>
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
    logoInput: {
        position: "relative",
        top: -45,
        right: -130,
    }
});

export default LogIn;
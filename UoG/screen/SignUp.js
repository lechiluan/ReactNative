import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import react from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import UserInput from "../Components/UserInput";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view' //ScrollView


const SignUp = ({navigation}) => {
    return(
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={styles.SignUp}>
                <Image style={styles.image}source={require('../assets/Logo.png')} />
                <Text style={styles.title}>Sign Up</Text>
                
                <UserInput name="Full Name"/>        
                <UserInput name="UserName"/>
                <UserInput name="Password"/> 
                <UserInput name="Confirm Password"/>        
                <UserInput name="Email"/>
                <UserInput name="Phone Number"/>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                            
                <Text style={styles.login}>
                    Do have an account? <Text onPress={() => navigation.navigate("LogIn")} style={{color:'blue'}}>Log In</Text> 
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
    }
});

export default SignUp;
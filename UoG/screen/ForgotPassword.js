import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import react from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import UserInput from "../Components/UserInput";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view' //ScrollView

const ForgotPassword = ({navigation}) => {
    return(
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={styles.ForgotPassword}>
                <Image style={styles.image}source={require('../assets/Logo.png')} />
                <Text style={styles.title}>Forgot Password </Text>
                
                <UserInput name="Phone Number"/>        
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Send to SMS</Text>
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
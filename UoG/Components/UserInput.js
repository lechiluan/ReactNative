import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import react from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';


const UserInput = ({name}) => {
    return (
        <View>
            <Text style={styles.labels}>{name}</Text>
            <TextInput style={styles.input} />
            
        </View>
    );
};

const styles = StyleSheet.create({
   input: {     
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    width: 300,
    height: 30,
    marginBottom: 20,
   },
   label: {
    width: "100%",
    marginTop: 10,
    fontWeight: '500',
    }, 
});

export default UserInput;
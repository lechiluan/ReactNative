import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import react from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

const UserInput = ({name}) => {
    return (
        <View>
            <Text style={styles.username}>{name}</Text>
            <TextInput style={styles.input} />

        </View>
    );
};

const styles = StyleSheet.create({
   input: {     
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    width: 300,
    height: 40,
    marginBottom: 30,
   },
});

export default UserInput;
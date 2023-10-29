import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import { FIRABASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [loading, setloading] = useState(false);
    const auth = FIRABASE_AUTH;

    const signIn = async () => { 
        setloading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        }catch (error: any){
            console.log(error);
            alert('Registro falhou: '+ error.message)
        }finally {
            setloading(false);
        }
    }

    const signUp = async () => { 
        setloading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert("Cadastrado");
        }catch (error: any){
            console.log(error);
            alert('Registro falhou: '+ error.message)
        }finally {
            setloading(false);
        }
    }


    return (
        <View style= {styles.container}>
            <KeyboardAvoidingView behavior='padding'>
            <TextInput value={email} style={styles.input}placeholder="Email"autoCapitalize='none'onChangeText={(text) => setEmail(text)}></TextInput>

            <TextInput secureTextEntry={true} value={password} style={styles.input}placeholder="password"autoCapitalize='none'onChangeText={(text) => setpassword(text)}></TextInput>

            { loading? <ActivityIndicator size="large" color="0000ff" />
            : <>
            <Button title='Login' onPress={signIn} />
            <Button title='Criar conta' onPress={signUp} />         
            </>}
            </KeyboardAvoidingView>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        marginVertical: 4,
        height: 50,  
        borderWidth: 1,
        borderRadius: 4,
        padding: 10, 
        backgroundColor: '#fff',
        
    }
});
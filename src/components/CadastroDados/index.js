import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { Button, Image, Input } from 'react-native-elements';
import { useState } from 'react';

export default function CadastroDados({navigation}) {

    const [Nome,setNome] = useState();
    const [Email,setEmail] = useState();
    const [Telefone,setTelefone] = useState();


    function ProximoPassoCadastro(){
        const NovoUsuario = {
            nome: Nome,
            email: Email,
            telefone: Telefone,
          };
      
          navigation.navigate("CadastroSeguranca", {
            usuario: NovoUsuario,
          });
      
    }

    const [loaded] = useFonts({
        PoppinsExtraBold: require("../../assets/fonts/Poppins-ExtraBold.ttf"),
        PoppinsRegular: require("../../assets/fonts/Poppins-Regular.ttf"),
        PoppinsMedium: require("../../assets/fonts/Poppins-Medium.ttf")

      });
    
      if (!loaded) {
        return null;
      }



    return (
        <View style={styles.container}>
            <View style={{alignSelf:'flex-start', paddingStart:25}}>
                <Text style={{fontSize: 30, fontFamily:"PoppinsExtraBold"}}>Cadastro</Text>
                <Text  style={{fontSize: 16, fontFamily:"PoppinsMedium"}}>informações pessoais e de contato</Text>
            </View>
            
            <View>
                <Text style={{fontSize: 20, fontFamily:"PoppinsExtraBold", color:"#000000"}}>nome completo</Text>
                <Input
                    placeholder='Digite seu nome'
                    inputContainerStyle={{borderBottomWidth: 0}}
                    inputStyle={{fontFamily:"PoppinsRegular",height: 55}}
                    onChangeText={(nome) => setNome(nome)}
                    containerStyle={{width: 350, backgroundColor:"#F0F1F5", borderRadius: 10, height: 50}}
                    style={{alignSelf:"center"}}
                />
            </View>
            <View>
                <Text style={{fontSize: 20, fontFamily:"PoppinsExtraBold", color:"#000000"}}>e-mail</Text>
                <Input
                    placeholder='Digite seu e-mail'
                    inputStyle={{fontFamily:"PoppinsRegular", height: 55}}
                    onChangeText={(email) => setEmail(email)}
                    inputContainerStyle={{borderBottomWidth: 0}}
                    containerStyle={{width: 350, backgroundColor:"#F0F1F5", borderRadius: 10,height: 50}}
                    style={{alignSelf:"center"}}

                />
            </View>
            <View>
                <Text style={{fontSize: 20, fontFamily:"PoppinsExtraBold", color:"#000000"}}>telefone</Text>
                <Input
                    placeholder='(xx)x.xxxx-xxxx'
                    onChangeText={(telefone) => setTelefone(telefone)}
                    inputContainerStyle={{borderBottomWidth: 0}}
                    inputStyle={{fontFamily:"PoppinsRegular",height: 55}}
                    containerStyle={{width: 350, backgroundColor:"#F0F1F5", borderRadius: 10, height: 50}}
                    style={{alignSelf:"center"}}
                />
            </View>
            <Button
                buttonStyle= {{
                    backgroundColor: "#1DB954",
                    borderRadius:10,
                    width: 350
                }}
                style={{alignSelf:"center"}}
                title="Próxima etapa"
                raised="true"
                onPress={()=>{ProximoPassoCadastro()}}
                containerStyle={{
                    borderRadius:10
                }}
                titleStyle={{color:"#FFF", fontFamily:"PoppinsExtraBold"}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});
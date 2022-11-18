import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { Button, Image, Input } from 'react-native-elements';

export default function CadastroSeguranca({navigation}) {
    const [loaded] = useFonts({
        PoppinsExtraBold: require("../../assets/fonts/Poppins-ExtraBold.ttf"),
        PoppinsRegular: require("../../assets/fonts/Poppins-Regular.ttf"),
        PoppinsMedium: require("../../assets/fonts/Poppins-Medium.ttf"),
        PoppinsSemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf")

      });
    
      if (!loaded) {
        return null;
      }
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho.flex}>
                <Text style={styles.cabecalho.titulo1}>Cadastro</Text>
                <Text  style={styles.cabecalho.titulo2}>Informações de segurança</Text>
            </View>
            
            <View>
                <Text style={styles.input.label}>Senha</Text>
                <Input
                    secureTextEntry={true}
                    placeholder='Digite sua senha'
                    inputContainerStyle={styles.input.inputContainerStyle}
                    inputStyle={styles.input.inputStyle}
                    containerStyle={styles.input.containerStyle}
                    style={styles.input.style}
                />
            </View>
            <View>
                <Text style={styles.input.label}>Confirme sua senha</Text>
                <Input
                    secureTextEntry={true}
                    placeholder='Digite a confirmação de senha'
                    inputContainerStyle={styles.input.inputContainerStyle}
                    inputStyle={styles.input.inputStyle}
                    containerStyle={styles.input.containerStyle}
                    style={styles.input.style}
                />
            </View>
            <View style={{flexBasis: 150, justifyContent: "space-evenly"}}>
                <Button
                    buttonStyle= {styles.button.buttonFinalizarStyle}
                    title="Finalizar cadastro"
                    raised="true"
                    onPress={()=>{navigation.navigate("CodigoVerificacao")}}
                    containerStyle={styles.button.containerStyle}
                    titleStyle={styles.button.titleFinalizarStyle}
                />
                <Button
                    buttonStyle= {styles.button.buttonAnteriorStyle}
                    type="outline"
                    raised="true"
                    containerStyle={styles.button.containerStyle}
                    onPress={() => {navigation.navigate("CadastroDados")}}
                    title="Etapa anterior"
                    titleStyle={styles.button.titleAnteriorStyle}
                />
            </View>
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
    cabecalho:{
        flex:{
            alignSelf:'flex-start', 
            paddingStart:25
        },
        titulo1:{
            fontSize: 30, 
            fontFamily:"PoppinsExtraBold"
        },
        titulo2:{
            fontSize: 16, 
            fontFamily:"PoppinsMedium"
        }
    },

    input:{
        label:{
            fontSize: 20, 
            fontFamily:"PoppinsExtraBold", 
            color:"#000000"
        },
        inputStyle:{
            fontFamily:"PoppinsRegular", 
            height: 55
        },
        inputContainerStyle:{
            borderBottomWidth: 0
        },
        containerStyle:{
            width: 350, 
            backgroundColor:"#F0F1F5", 
            borderRadius: 10,
            height: 50
        },
        style:{
            alignSelf:"center" 
        }
    },

    button:{
        buttonFinalizarStyle:{
            backgroundColor: "#1DB954",
            borderRadius:10
        },
        buttonAnteriorStyle:{
            backgroundColor: "#fff",
            borderRadius:10,
            width: 340,
            borderColor:"#1DB954",
            borderWidth: 1
        },
        containerStyle:{
            borderRadius:10
        },
        titleFinalizarStyle:{
            color:"#FFF", 
            fontFamily:"PoppinsExtraBold"
        },
        titleAnteriorStyle:{
            color:"#1DB954", 
            fontFamily:"PoppinsExtraBold"
        }
    }
});
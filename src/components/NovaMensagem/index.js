import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { Button, Icon, Image, Input } from 'react-native-elements';

export default function NovaMensagem({navigation}) {
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
            <View style={styles.flexConteudo}>
                <Text style={styles.tituloPagina}>Nova mensagem</Text>
            </View>
            
            <View>
                <Text style={styles.labelCampos}>Mensagem</Text>
                <Input
                    placeholder='Sua mensagem...'
                    inputContainerStyle={styles.inputMensagem.inputContainerStyle}
                    inputStyle={styles.inputMensagem.inputStyle}
                    containerStyle={styles.inputMensagem.containerStyle}
                    style={styles.inputMensagem.style}
                />
            </View>
            <View>
                <Text style={styles.labelCampos}>Anexo</Text>
                <Input
                    placeholder='anexar um arquivo'
                    inputContainerStyle={styles.inputAnexo.inputContainerStyle}
                    inputStyle={styles.inputAnexo.inputStyle}
                    containerStyle={styles.inputAnexo.containerStyle}
                    style={styles.inputAnexo.style}
                    rightIcon={
                        <Icon
                            name="upload"
                            size={25}
                            type="font-awesome"
                            color="#1DB954"
                            
                        />
                    }
                />
            </View>
            <Button
                buttonStyle= {styles.button.buttonStyle}
                style={styles.button.style}
                title="Publicar"
                raised="true"
                onPress={()=>navigation.navigate("AdmCondominio")}
                containerStyle={styles.button.containerStyle}
                titleStyle={styles.button.titleStyle}
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
    flexConteudo:{
        alignSelf:'flex-start', paddingStart:25
    },
    tituloPagina:{
        fontSize: 30, 
        fontFamily:"PoppinsExtraBold"
    },
    labelCampos:{
        fontSize: 20, 
        fontFamily:"PoppinsExtraBold", 
        color:"#000000"
    },
    inputMensagem:{
        inputContainerStyle:{
            borderBottomWidth: 0
        },
        inputStyle:{
            fontFamily:"PoppinsRegular"
        },
        containerStyle:{
            width: 350, 
            backgroundColor:"#F0F1F5", 
            borderRadius: 10, 
            height: 150
        },
        style:{
            alignSelf:"center"
        }
    },
    inputAnexo:{
        inputContainerStyle:{
            borderBottomWidth: 0, 
            alignItems: 'center'
        },
        inputStyle:{
            fontFamily:"PoppinsRegular",
            height: 55
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
        buttonStyle:{
            backgroundColor: "#1DB954",
            borderRadius:10,
            width: 350
        },
        style:{
            alignSelf:"center"
        },
        containerStyle:{
            borderRadius:10
        },
        titleStyle:{
            color:"#FFF", 
            fontFamily:"PoppinsExtraBold"
        }
    }
});
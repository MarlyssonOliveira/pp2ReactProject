import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { Image, Input, Icon, Avatar, SpeedDial, Card, Button  } from 'react-native-elements';
import { useState } from 'react';

export default function Home() {
    const [open, setOpen] = useState(false);
    const [loaded] = useFonts({
        PoppinsExtraBold: require("../../assets/fonts/Poppins-ExtraBold.ttf"),
        PoppinsRegular: require("../../assets/fonts/Poppins-Regular.ttf"),
        PoppinsMedium: require("../../assets/fonts/Poppins-Medium.ttf")

      });
    
      if (!loaded) {
        return null;
      }
    return (
        <>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 350}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 240}}>
                        <Avatar
                            rounded
                            size="medium"
                            source={require('../../assets/images/user.jpg')}
                        />
                        <Text  style={{fontSize: 18, fontFamily:"PoppinsExtraBold"}}>Ola Usuario logado</Text>
                    </View>
                    <Icon
                        name='settings'
                        type='ionicon'
                        color='#000'
                        size={24}
                    />
                </View>
                
                <View>
                    <Input
                        leftIcon={{ type: 'ionicon', name: 'search' }}
                        placeholder='Pesquisar condomínios...'
                        inputContainerStyle={{borderBottomWidth: 0}}
                        inputStyle={{fontFamily:"PoppinsSemiBold",height: 50}}
                        containerStyle={{width: 350, backgroundColor:"#F0F1F5", borderRadius: 10, height: 50}}
                        style={{alignSelf:"center"}}
                    />
                </View>

                <View>
                    <Text  style={{fontSize: 20, fontFamily:"PoppinsExtraBold"}}>Condomínios que gerencio</Text>
                    {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
                    <View>
                        <Card containerStyle={{padding:0, width:250, height:150, border: 0, marginTop:15, marginEnd: 20, margin:0, borderRadius: 10}}>
                            <Card.Image source={require('../../assets/images/predio.jpg')} style={{flexDirection: 'column-reverse', borderRadius: 10}}>
                                <View backgroundColor="#EFF3FF" style={{borderBottomEndRadius:10,borderBottomStartRadius:10}}>
                                    <Text style={{fontSize: 18, fontFamily:"PoppinsExtraBold", paddingStart: 5}}>condomínio 01</Text>
                                    <Text style={{marginTop: 5, marginBottom:15, paddingStart: 5, color: "#ADADAD"}}>25 moradores</Text>
                                </View>
                            </Card.Image>
                        </Card>
                    </View>
                </View>
                <View>
                    <Text  style={{fontSize: 20, fontFamily:"PoppinsExtraBold"}}>Condomínios que faço parte</Text>
                    <View>
                    <Card containerStyle={{padding:0, width:250, height:150, border: 0, marginTop:15, marginEnd: 20, margin:0, borderRadius: 10}}>
                        <Card.Image source={require('../../assets/images/predio.jpg')} style={{flexDirection: 'column-reverse', borderRadius: 10}}>
                            <View backgroundColor="#EFF3FF" style={{borderBottomEndRadius:10,borderBottomStartRadius:10}}>
                                <Text style={{fontSize: 18, fontFamily:"PoppinsExtraBold", paddingStart: 5}}>condomínio 01</Text>
                                <Text style={{marginTop: 5, marginBottom:15, paddingStart: 5, color: "#ADADAD"}}>25 moradores</Text>
                            </View>
                        </Card.Image>
                    </Card>
                    </View>
                </View>

                
            </View>
        {/* Speed Dial */}

            <SpeedDial
            isOpen={open}
            icon= {{ name: 'add', color: '#fff'}}
            iconContainerStyle= {(open == true) ? {backgroundColor:"#FFFFFF"} : {backgroundColor:"#1DB954"}}
            openIcon={{ name: 'close', color: '#1DB954' }}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}
            >
                <SpeedDial.Action
                    style={{width:40}}
                    buttonStyle={{width:55, height: 55,backgroundColor:"#1DB954"}}
                    icon={{ name: 'house', color: '#fff', size:35  }}
                    iconContainerStyle= {{backgroundColor:"#1DB954",width:55, height: 55,}}
                    title="Meu apartamento"
                    onPress={() => console.log('Add Something')}
                />
                <SpeedDial.Action
                    style={{width:40}}
                    buttonStyle={{width:55, height: 55,backgroundColor:"#1DB954"}}
                    icon={{ name: 'add', color: '#fff', size:35 }}
                    iconContainerStyle= {{backgroundColor:"#1DB954", width:55, height: 55}}
                    title="Novo condomínio" 
                    onPress={() => console.log('Delete Something')}
                />
            </SpeedDial>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
    },
});
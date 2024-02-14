import { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider'
import { ModalPassword } from '../../components/modal'

let charset = "abcdefhijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWYZ0123456789"

export function Home() {

  const [size, setSize] = useState(10)  //1-nome parametro, 2-acao do state, 3valor inicial
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setmodalVisible] = useState(false)

  function generatePassword() {
    let password = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)  //Aqui passo a senha gerada paar dentro desse estado
    setmodalVisible(true)

  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#ff0000'
          minimumTrackTintColor='#000'
          thumbTintColor='#392de9'  //Cor da bolinha
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}//to fized uso para tirar as casas decimais
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={()=>setmodalVisible(false)}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    //Preenche a tela inteira, ou porém o que ele conseguir
    backgroundColor: "#F3F3F3",
    justifyContent: "center",  //Alinha verticalmente
    alignItems: "center" //Alinha horizontalmente
  },
  logo: {
    marginBottom: 60
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%", //Aqui pega 80% da tela que ele conseguir, o traço do slider
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 6
  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText: {
    color: "#fff",
    fontSize: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

import { StyleSheet, Text, View, Image } from 'react-native';
import Slider from '@react-native-community/slider'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>20 caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#ff0000'
          minimumTrackTintColor='#000'
          thumbTintColor='#392de9'  //Cor da bolinha
        />
      </View>

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
  }
});

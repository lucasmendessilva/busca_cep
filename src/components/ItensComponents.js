import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ItensComponent = props => {
  return (
    <View style={estilo.container}>
      <View style={estilo.Vcep}>
        <Text style={estilo.Tcep}>{props.cep}</Text>
      </View>
      <View style={estilo.Vendereco}>
        <Text>{props.endereco}</Text>
        <Text>{props.bairro}</Text>
      </View>
      <View style={estilo.Vcidade}>
        <Text>{props.cidade}</Text>
        <Text>{props.estado}</Text>
      </View>
    </View>
  );
};

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    borderWidth: 10,
    borderColor: '#ccc',
  },
  Vcep: {
    alignItems: 'center',
  },
  Tcep: {
    fontSize: 25,
    color: 'red',
  },
  Vendereco: {
    alignItems: 'center',
  },
  Vcidade: {
    alignItems: 'center',
  },
});

export default ItensComponent;

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ItensComponent = props => {
  return (
    <View>
      <View>
        <Text>{props.cep}</Text>
      </View>
      <View>
        <Text>{props.endereco}</Text>
        <Text>{props.bairo}</Text>
      </View>
      <View>
        <Text>{props.cidade}</Text>
        <Text>{props.estado}</Text>
      </View>
    </View>
  );
};

const estilo = StyleSheet.create({
  cep: {
    alignItems: 'center',
    fontSize: 30,
  },
  endereco: {
    justifyContent: 'center',
  },
  cidade: {
    justifyContent: 'center',
  },
});

export default ItensComponent;

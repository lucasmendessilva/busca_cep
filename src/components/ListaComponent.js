import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import ItensComponents from './ItensComponents';

const url = 'http://viacep.com.br/ws/14711000/json/';

class ListaComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {listaItens: []};
  }

  async UNSAFE_componentWillMount() {
    const lista = [];
    const itens = await axios.get(url);
    lista.push(itens.data);
    this.setState({listaItens: lista});
    console.log(itens);
  }

  render() {
    return (
      <View>
        {this.state.listaItens.map(item => (
          <ItensComponents
            key={item.cep}
            cep={item.cep}
            endereco={item.logradouro}
            bairro={item.bairro}
            cidade={item.localidade}
            estado={item.uf}
          />
        ))}
      </View>
    );
  }
}

export default ListaComponent;

// {
//   this.state.listaItens.map(item => (
//     <ItensComponent
//       key={item.cep}
//       cep={item.cep}
//       endereco={item.logradouro}
//       bairro={item.bairro}
//       cidade={item.localidade}
//       estado={item.uf}
//     />
//   ));
// }

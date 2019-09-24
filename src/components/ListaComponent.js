import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import ItensComponents from './ItensComponents';

const urls = [
  'http://viacep.com.br/ws/14711000/json/',
  'http://viacep.com.br/ws/14711040/json/',
  'http://viacep.com.br/ws/14711576/json/',
];

// 'http://viacep.com.br/ws/14711010/json/',
//   'http://viacep.com.br/ws/14711020/json/',

class ListaComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {listaItens: []};
  }

  async UNSAFE_componentWillMount() {
    const lista = [];
    for (let x = 0; x < urls.length; x++) {
      const itens = await axios.get(urls[x]);
      lista.push(itens.data);
      this.setState({listaItens: lista});
    }
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

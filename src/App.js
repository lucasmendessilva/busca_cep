import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import ListaComponent from './components/ListaComponent';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <ListaComponent />
      </ScrollView>
    );
  }
}

export default App;

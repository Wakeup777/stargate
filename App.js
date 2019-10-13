import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {Header, ImageCard, Layout} from './src/components/uikit';
import {url} from './constants';

export default class App extends Component {
  state = {
    title: 'STAR GATE',
    data: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({data});
    } catch (e) {
      throw e;
    }
  };

  render() {
    const {title, data} = this.state;
    return (
      <View>
        <Header title={this.state.title} />
         <Layout>
            {data.map(item => (
              <ImageCard data={item} key={item.id} />
            ))}
          </Layout>
      </View>
    );
  }
}

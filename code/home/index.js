import React, {StyleSheet, View, Text} from 'react-native';
import {
  UIScene,
  UISimpleRow,
} from 'ui-kit';

class Home extends React.Component {

  static defaultProps = {
    controlList: [
      {name: 'Button', nextScene: 'Button'},
      {name: 'TabBar', nextScene: 'TabBar'},
      {name: 'Form', nextScene: 'Form'},
      {name: 'Popover', nextScene: 'Popover'},
      {name: 'Overlay', nextScene: 'Overlay'},
      {name: 'ListView', nextScene: 'ListView'},
    ]
  };

  state = {};

  componentDidMount () {
  }

  render () {
    return (
      <UIScene
        header="组件列表">
        {this.props.controlList.map((item, index) => {
          return <UISimpleRow key={index} title={item.name} nextScene={item.nextScene}></UISimpleRow>
        })}
      </UIScene>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  }
});

export default Home;
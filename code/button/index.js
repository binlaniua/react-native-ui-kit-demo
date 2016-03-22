import React, {StyleSheet, View, Text} from 'react-native';

import {
  UIScene,
  UIBtn,
  UIIconBtn,
  UITimerBtn,
  UIButtonGroup,
} from 'ui-kit';

import Card from '../card';

class ButtonView extends React.Component {

  static defaultProps = {
    btnList: ['btn1', 'btn2', 'btn3']
  };

  state = {
    index: 0,
  };

  componentDidMount () {
  }

  render () {
    return (
      <UIScene
        header="按钮"
        hasBack={true}>

        <Card title="Button">
          <UIBtn
            text="Click Me"/>
        </Card>

        <Card title="Horizontal Icon Button">
          <UIIconBtn
            image={require('./image/icon_user.png')}
            text="Click Me"/>
        </Card>

        <Card title="Vertical Icon Button">
          <UIIconBtn
            direction="v"
            image={require('./image/icon_user.png')}
            text="Click Me"/>
        </Card>

        <Card title="Timer Button">
          <UITimerBtn
            time={10}
            text="Click Me"
            disableText="Wait"/>
        </Card>

        <Card title="Button Group">
          <Text>{`click index ${this.state.index}`}</Text>
          <UIButtonGroup style={{width: 200}} onChange={(index) => this.setState({index})} btnList={this.props.btnList}/>
        </Card>
      </UIScene>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  }
});

export default ButtonView;
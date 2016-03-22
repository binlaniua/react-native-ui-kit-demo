import React, {StyleSheet, View} from 'react-native';

import {
  UIScene,
} from 'ui-kit';

class ButtonView extends React.Component {

  static defaultProps = {};

  state = {};

  componentDidMount () {
  }

  render () {
    return (
      <UIScene
        header="按钮"
        hasBack={true}>
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
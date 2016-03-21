import React, {StyleSheet, View} from 'react-native';

import {
  QMScene
} from 'ui-kit';

class ButtonView extends React.Component {

  static defaultProps = {};

  state = {};

  componentDidMount () {
  }

  render () {
    return (
      <QMScene
        header="按钮"
        hasBack={true}>
      </QMScene>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  }
});

export default ButtonView;
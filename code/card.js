import React, {StyleSheet, View, Text} from 'react-native';

class Card extends React.Component {

  static defaultProps = {
    title: ''
  };

  state = {};

  componentDidMount () {
  }

  render () {
    return (
      <View
        style={styles.container}>
        <Text>{this.props.title}</Text>
        <View style={styles.wrapper}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    padding: 10,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Card;
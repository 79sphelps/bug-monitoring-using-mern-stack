import React from 'react';
/*
export default function HelloWorld() {
  return (
    <h1>Hello World!</h1>
  );
}
*/
export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ addressee: 'Universe' });
    }, 100);
  }

  render() {
    return (
      <h1>Hello {this.state.addressee}!</h1>
    );
  }
}

HelloWorld.propTypes = {
  addressee: React.PropTypes.string,
};

HelloWorld.defaultProps = {
  addressee: '',
};
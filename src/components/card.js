import React from 'react';

class Card extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      left: '<',
      right: '>',
    }
  }

  onClick() {
    //move
  }

  render() {
    return (
      <div className="card">
        <span>{this.state.left}</span>
        <span>{this.props.text}</span>
        <span>{this.state.right}</span>
      </div>
    );
  }
}

export default Card;

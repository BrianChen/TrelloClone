import React from 'react';

import Card from './card';

class Column extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [
        "text1",
        "text2"
      ],
      name: this.props.name
    }

    this.addCard = this.addCard.bind(this);
    this.renderCards = this.renderCards.bind(this);
  }

  addCard() {
    debugger;
    let newCardText = prompt("Add a new card", "New Task");

    let newCardState = this.state.cards;

    newCardState.push(newCardText);

    this.setState({
      cards: newCardState,
    });
  }

  renderCards() {
    return this.state.cards.map((card, index) => {
      return <Card id={index} text={card} />
    });
  }

  render() {
    const cards = this.renderCards();

    return (
      <div className={`column ${this.props.clsName}`}>
        <span>{this.state.name}</span>
        {cards}
        <span onClick={this.addCard}>+ Add a cards</span>
      </div>
    );
  }
}

export default Column;

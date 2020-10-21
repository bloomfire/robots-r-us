import React from 'react';
// import data from '../data';

export default class Card extends React.Component {
    render() {
        let cardId = this.props.card.id;
        let key = this.props.key;

        return (
            <div className="element" key={key}>
                {cardId}
            </div>
        );
    }
}

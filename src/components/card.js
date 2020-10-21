import React from 'react';
import FollowButton from './follow-button';
// import data from '../data';

export default class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonClicked: false,
        };
    }
    render() {
        let card = this.props.card;
        let id = this.props.id;

        return (
            <div className="card" key={id}>
                <img src={card.avatar} alt="Robot" className="profile-img" />
                <div className="full-name">
                    {card.first_name}
                    {card.last_name}
                </div>
                <FollowButton />
                {card.title}
                {card.email}
            </div>
        );
    }
}

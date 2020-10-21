import React from 'react';
import FollowButton from './follow-button';
import ProfileImg from './profile-img';
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
            <div className="element" key={id}>
                <ProfileImg />
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

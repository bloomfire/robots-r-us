import React from 'react';
import './FollowButton.css';

class FollowButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Follow', buttonClass: 'Follow' };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let text = this.state.text === 'Follow' ? 'Following' : 'Follow';
        let buttonClass = text;
        this.setState({
            text: text,
            buttonClass: buttonClass,
        })
    }

    render() {
        return (
            <button
                onClick={this.handleClick}
                className={this.state.buttonClass}
            >
                {this.state.text}
            </button>
        )
    }
}

export default FollowButton;
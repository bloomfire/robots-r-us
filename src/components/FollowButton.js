import React from 'react';

class FollowButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Follow' };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let text = this.state.text === 'Follow' ? 'Following' : 'Follow'
        this.setState({ text: text })
    }

    render() {
        return (
            <button
                onClick={this.handleClick}
                style={{
                    background: 'green',
                }}
            >
                {this.state.text}
            </button>
        )
    }
}

export default FollowButton;
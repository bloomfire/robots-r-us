import React from 'react';

export default class FollowButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonClicked: false,
        };
    }
    render() {
        return (
            <button
                className={
                    this.state.buttonClicked === false
                        ? 'follow-button'
                        : 'following-button'
                }
                onClick={() => {
                    if (this.state.buttonClicked === false) {
                        this.setState({
                            buttonClicked: true,
                        });
                    } else {
                        this.setState({
                            buttonClicked: false,
                        });
                    }
                }}
            >
                {this.state.buttonClicked === false ? 'Follow' : 'Following'}
            </button>
        );
    }
}

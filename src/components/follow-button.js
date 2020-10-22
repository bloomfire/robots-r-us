import React from 'react';

export default class FollowButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonClicked:
                localStorage.getItem(`robot${this.props.id}`) === 'true',
        };
    }

    componentDidMount() {
        if (!localStorage.getItem(`robot${this.props.id}`)) {
            localStorage.setItem(`robot${this.props.id}`, false);
        }
    }

    render() {
        console.log(localStorage.getItem(`robot${this.props.id}`));
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
                        localStorage.setItem(`robot${this.props.id}`, true);
                    } else {
                        this.setState({
                            buttonClicked: false,
                        });
                        localStorage.setItem(`robot${this.props.id}`, false);
                    }
                }}
            >
                {this.state.buttonClicked === false ? 'Follow' : 'Following'}
            </button>
        );
    }
}

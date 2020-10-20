import React from 'react';

class FollowButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isFollowed: false};
        this.toggleFollow = this.toggleFollow.bind(this);
      }

    toggleFollow() {
        this.setState(state => ({
          isFollowed: !state.isFollowed
        }));
      }

    render() {
        return <div class="FollowButton">
            <button onClick={this.toggleFollow}
                style={{
                    borderRadius: "3px",
                    backgroundColor: this.state.isFollowed ? "#008001" : "#FFFFFF",
                    color: this.state.isFollowed ? "#FFFFFF" : "#000000",
                    borderWidth: "1px",
                }}>
                {this.state.isFollowed ? 'Following' : 'Follow'}
            </button>
        </div>
    }
}

export default FollowButton;
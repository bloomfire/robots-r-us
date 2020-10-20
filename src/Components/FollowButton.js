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
            <button onClick={this.toggleFollow}>
                {this.state.isFollowed ? 'Following' : 'Follow'}
            </button>
        </div>
    }
}

export default FollowButton;
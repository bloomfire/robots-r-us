import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default class Following extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            following: this.props.following,
        }
    }


    render() {
        return (
            <Button onClick={() => {
                !this.state.follow ? this.setState({
                    following: true,
                }, () => { }) : this.setState({
                    following: false,
                }, () => { })
            }} variant={(this.state.following === true)? "success" : "outline-success"} > { (this.state.following === false) ? "Follow" : "Following"}</Button >
        )
    }
}
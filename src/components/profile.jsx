import React from 'react';
import "../App.css";
import Card from 'react-bootstrap/Card';
import FollowBtn from './followButton'
import '../styling/card.css'

export default class Profile extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            following: false
        }
    }

    render() {
        const profile = this.props.profile;

        return (
            <Card style={{ width: '18rem' }} bg="light" border="info" className="mb-2" >
                <Card.Img variant="top" src={profile.avatar ? profile.avatar : "https://vignette.wikia.nocookie.net/kingdomheartsfanon/images/a/a9/Walle1.gif/revision/latest/scale-to-width-down/150?cb=20131108025542"} class="img-fluid img-thumbnail" />
                <Card.Body>
                    <Card.Title className='card-title-text'>{profile.first_name + " " + profile.last_name}</Card.Title>
                    <Card.Text className='card-text'>
                        {profile.title}
                    </Card.Text>
                    <Card.Text className='card-email'>
                        {profile.email}
                    </Card.Text>
                    <FollowBtn following={this.state.following}/>
                </Card.Body>
            </Card>
        )
    }
}

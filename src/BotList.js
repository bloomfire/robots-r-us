import data from './data'
import React, { useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import FollowButton from './FollowButton'
import "./App.css"

const BotList = () => {
    // for sorting by last name later
    // const [info, setInfo] = useState(data)
    return (
        <div>
            {data.map((bot) => {
                return (
                    <div key={bot.id} className="botCard">
                        <Card style={{  width: "18rem", backgroundColor: "#fff" }} className="innerCard">
                            <Card.Body>
                                <Card.Img variant="bottom" src={bot.avatar ? bot.avatar : "https://i.imgur.com/r8nO62Vs.jpg"} className="botImg"/>
                                <Card.Title>
                                    <div className="nameText">
                                        <h3>{bot.first_name} {bot.last_name}</h3> 
                                    </div>
                                </Card.Title>

                                <FollowButton />
                                
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="emailText">
                                        {bot.email ? (
                                            <h4>{bot.email}</h4>
                                        ) : (
                                            <h4>"I has No Email"</h4>
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        {bot.title ? <h5>{bot.title}</h5> : <h5>"what am I doing?"</h5>}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}


export default BotList
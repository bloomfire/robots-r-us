import data from './data'
import React, { useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const BotList = () => {
    // const [info, setInfo] = useState(data)
    return (
        <div>
            {data.map((bot) => {
                return (
                    <div key={bot.id} className="botCard">
                        <Card style={{  width: "18rem", backgroundColor: "#fff" }} className="innerCard">
                            <Card.Body>
                                <Card.Img variant="bottom" src={bot.avatar ? bot.avatar : "https://i.imgur.com/r8nO62Vs.jpg"} className="botImg"/>
                                {/*  Need follow button*/}
                                <Card.Title>
                                    <div className="nameText">
                                        <h3>{bot.first_name} {bot.last_name}</h3> 
                                    </div>
                                </Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        {bot.email ? (
                                            <a href={bot.email}>{bot.email}</a>
                                        ) : (
                                            "I has No Email"
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        {bot.title ? bot.title : "what am I doing?"}
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
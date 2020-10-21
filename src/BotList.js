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
                        <Card style={{ width: "18rem" }}>
                            <Card.Body>
                                <Card.Title>
                                    <div className="nameText">
                                        {bot.first_name} {bot.last_name}
                                    </div>
                                </Card.Title>
                                <ListGroup>
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
                                <Card.Img src={bot.avatar ? bot.avatar : "https://i.imgur.com/r8nO62V.jpg"}/>
                                {/*  Need follow button*/}
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}


export default BotList
import React from 'react'
import Card from '@material-ui/core/Card'
import { CardMedia } from '@material-ui/core'
import { Button } from '@material-ui/core'

const PlayerCard = (props) => {

    const {id, first_name, last_name, email, title, avatar} = props
    
    const [isToggled, setIsToggled] = React.useState('true')
    
    const toggle = React.useCallback(() => setIsToggled(!isToggled), [isToggled, setIsToggled])
    

    
    let buttonMarkup = isToggled ? (<Button
    style={{backgroundColor: 'red'}}>Follow?</Button>) : (<Button style={{backgroundColor: 'green'}}>Following!</Button>)
    
    
    
      return (
        <>
          <Card
          style={cardStyle}
            >
              <CardMedia
              component='img'
              src={avatar}
              />
              <Button onClick={toggle}>  
              {buttonMarkup}
              </Button>
    
              <h3>Name: {first_name} {last_name}</h3>
              <h2>Title: {title}</h2>
            <h3>Email: {email}</h3>
              <br/>
    
          </Card>
        </>
      )
    }
    
    export default PlayerCard
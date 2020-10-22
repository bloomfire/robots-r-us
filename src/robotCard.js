import React from 'react'
import Card from '@material-ui/core/Card'
import { CardMedia } from '@material-ui/core'
import { Button } from '@material-ui/core'

const PlayerCard = (props) => {

    const {first_name, last_name, email, title, avatar} = props
    
    const [isToggled, setIsToggled] = React.useState('true')
    
    const toggle = React.useCallback(() => setIsToggled(!isToggled), [isToggled, setIsToggled])
    


    const avatarChecker = (avatar) => {
      if (avatar === null){
        return `https://via.placeholder.com/300`
      }
      else {
        return avatar
      }
    }
    
    const avatarMarkup = avatarChecker(avatar)

    const titleChecker = (title) => {
      if (title === null){
        return 'No Title Given'
      }
      else {
        return title
      }
    }

    const titleMarkup = titleChecker(title)

    const emailChecker = (email) => {
      if (email === null){
        return 'No Email Given'
      } else {
        return email
      }
    }
  
    const emailMarkup = emailChecker(email)

    const backgroundColorChecker = (isToggled) => {
      if (isToggled === true){
        return 'lightblue'
      } else {
        return 'orange'
      }
    }

    const backgroundColorMarkup = backgroundColorChecker(isToggled)
    console.log(backgroundColorMarkup)



    let cardStyle = {
      height: '525px',
      width: '300px',
      backgroundColor: {backgroundColorMarkup},
    }
    
    let robotImage = {
      width: '300px',
      height: '300px',
    }

    
    let buttonMarkup = isToggled ? (<Button
    style={{backgroundColor: 'red'}}>Follow?</Button>) : (<Button style={{backgroundColor: 'green'}}>Following!</Button>)
    

    
    
      return (
        <>
          <Card
          style={cardStyle}
            >
              <CardMedia
              component='img'
              src={avatarMarkup}
              style={robotImage}
              />
              <Button onClick={toggle}>  
              {buttonMarkup}
              </Button>

              <h3>Name: {first_name} {last_name}</h3>
              <h2>Title: {titleMarkup}</h2>
            <h3>Email: {emailMarkup}</h3>
              <br/>
    
          </Card>
        </>
      )
    }
    
    export default PlayerCard
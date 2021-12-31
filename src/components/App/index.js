import React from 'react'
import { GlobalStyle, Container, InnerContainer } from "./styled";
import Countdown from '../Countdown'

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <InnerContainer>

          <Countdown
            title='New Year Countdown 2022'
            eventDateTime='01-01-2022 00:00:00'
            messageLine1="Happy"
            messageLine2="New"
            messageLine3="Year"
            messageLine4="2022!"
          />
        </InnerContainer>
        
        <a  style={{display:'block', marginTop: '20px'}}>
        Keep the smile, forget the tears, love the good, throw away the bad all these are my wishes for you in this new year. Happy New Year!

</a>
<a  style={{display:'block', marginTop: '20px', marginRight:"20px", textAlign:"end"}}>
~Suman Jyoti Dhal</a>

      </Container>
    </React.Fragment>
  )
}

export default App

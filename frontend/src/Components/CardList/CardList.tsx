import React, { JSX } from 'react'
import Card from '../Card/Card'
import McDavid from '../../Images/McDavid.png'
import Bedard from '../../Images/Bedard.jpg'
import Matthews from '../../Images/Matthews.jpg'
import Draisaitl from '../../Images/Draisaitl.jpg'

interface Props {}

const CardList: React.FC<Props> = (props: Props) : JSX.Element => {
  return (
    <div>
      <Card Image={McDavid} playerName='Connor McDavid' playerNumber={97} teamName='Edmonton Oilers' position='Center' />
      <Card Image={Bedard} playerName='Connor Bedard' playerNumber={98} teamName='Chicago Blackhawks' position='Center' />
      <Card Image={Matthews} playerName='Auston Matthews' playerNumber={34} teamName='Toronto Maple Leafs' position='Center' />
      <Card Image={Draisaitl} playerName='Leon Draisaitl' playerNumber={29} teamName='Edmonton Oilers' position='Center'  />
    </div>
  )
}

export default CardList

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import react from 'react'
import {Card,Button} from 'react-bootstrap'
const profile = ({Listprof,children,displayname}) => {
  return (
    <div>
      {Listprof.map((el,index)=><Card key={index} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={children} />
  <Card.Body>
    <Card.Title>{el.fullName}</Card.Title>
    <Card.Text>
      {el.bio}
    </Card.Text>
    <Card.Text>
      {el.profession}
    </Card.Text>
    <Button variant="primary" onClick={()=>displayname(el.fullName)} >display name</Button>
  </Card.Body>
</Card>)}
    </div>
  )
}
export default profile
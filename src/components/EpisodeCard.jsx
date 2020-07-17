import React from 'react'
import { Card, Badge, Button } from 'react-bootstrap'

export function EpisodeCard({ data, setOrdered }) {
  return (
    <Card className='h-100 mt-4 shadow-sm bg-white rounded'>
      <Card.Img variant='top' src={data.image} />
      <Card.Body className='d-flex flex-column'>
        <div className='d-flex mb-2 justify-content-between'>
          <Card.Title className='mb-0 font-weight-bold'>{data.name}</Card.Title>
          <Badge pill className='mb-1' variant='warning'>
            $1.50
          </Badge>
        </div>
        <Card.Text className='text-secondary'>Episode: {data.number}</Card.Text>
        <Button
          onClick={() => setOrdered()}
          className='mt-auto font-weight-bold'
          variant='success'
          block>
          Order Show
          </Button>
      </Card.Body>
    </Card>
  )
}
import React from 'react'
import { Toast, ToastBody } from 'react-bootstrap';

export function Confirmation({ toggle }) {
  return (
    <Toast onClose={() => toggle(false)}>
      <Toast.Header>
        <strong classsName='mr-auto'>Your order was placed:</strong>
        <small className='ml-1'>just now</small>
      </Toast.Header>
      <Toast.Body>
        Your show will begin shortly!
      </Toast.Body>
    </Toast>
  )
}
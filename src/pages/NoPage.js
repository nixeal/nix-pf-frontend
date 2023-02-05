import React, { useContext } from 'react';
import { Container, Modal } from 'react-bootstrap';
import { ThemeContext } from '../utils/ThemeContext';

export default function NoPage() {
  const {theme} = useContext(ThemeContext)
  return (
    <Container  style={theme}className='py-4' >
      <div className='g-row vh-100 py-5 text center'>
          <h1 style={theme}> Error 404 page not found</h1>          
      </div>
    </Container>
  )
}

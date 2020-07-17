import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

import { Container, Row, Col } from 'react-bootstrap'
import { EpisodeCard } from './components/EpisodeCard'
import { Confirmation } from './components/Confirmation'
import episodes from './data'

function App() {
  const [ordered, setOrdered] = useState(false);

  function displayConfirmation() {
    setOrdered(true);

    setTimeout(() => {
      setOrdered(false);
    }, 4000);
  }
  return (
    <div>
      <Container>
        {ordered && <Confirmation toggle={setOrdered} />}
        <Row>
          {episodes.map(data => (
            <Col xs={3} className='mb-5' key={`${data.id}`}>
              <EpisodeCard data={data} setOrdered={displayConfirmation} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;

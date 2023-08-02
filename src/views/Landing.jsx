import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'reactstrap';

export default function Landing({IDES}) {
  const navigate = useNavigate();

  return (
    <>
      <Container className="bg-light border" fluid>
        <div id='linksDiv'>
          {IDES.map(IDE => {
            return(
              <Button size='lg' onClick={() => navigate(`/${IDE.name}`)}>{IDE.name}</Button>
            )
          })}
        </div>
      </Container>
    </>
  )
}

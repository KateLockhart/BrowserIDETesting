import React from 'react';
import { Container, Col, Row } from 'reactstrap';

export default function SiteDisplay({IDE}) {
  return (
    <>
      <Container className="bg-light border">
        <h2><a href={IDE.siteURL}>{IDE.name}</a></h2>
        <Row>
          <Col xs="4" className="bg-light border">
            <br/>
            <h4>{IDE.name} Pros:</h4>
            {IDE.pros.map(pro => {
              return(<ul>{pro}</ul>)
            })}
            <br/>
            <h4>{IDE.name} Cons:</h4>
            {IDE.cons.map(con => {
              return(<ul>{con}</ul>)
            })}
          </Col>

          <Col xs="8" className="bg-light border">
            {IDE.embed()}
          </Col>
        </Row>
      </Container>
    </>
  )
}

import React from 'react';
import { Container, Col, Row } from 'reactstrap';

export default function SiteDisplay({IDE}) {
  return (
    <>
      <Container className="bg-light border" style={{ height: "90vh", display: "flex", flexDirection: "column", paddingTop: "5vh", paddingBottom: "5vh", paddingLeft: "1vw", paddingRight: "1vw"}} fluid>
        <h2 style={{marginTop: "3vh", marginBottom: "5vh"}}><a href={IDE.siteURL}>{IDE.name}</a></h2>
        <Row style={{paddingLeft: "1vw", paddingRight: "1vw"}}>
          <Col xs="4" className="bg-light border">
            <br/>
            <h4 style={{marginTop: "2vh"}}>{IDE.name} Pros:</h4>
            <ul>
              {IDE.pros.map(pro => {
                return(<li>{pro}</li>)
              })}
            </ul>
            <br/>
            <h4>{IDE.name} Cons:</h4>
            <ul>
              {IDE.cons.map(con => {
                return(<li>{con}</li>)
              })}
            </ul>
          </Col>

          <Col xs="8" className="bg-light border">
            {IDE.embed()}
          </Col>
        </Row>
      </Container>
    </>
  )
}

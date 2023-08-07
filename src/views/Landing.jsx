import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "reactstrap";

export default function Landing({ IDES }) {
  const navigate = useNavigate();

  return (
    <>
      <Container className="bg-light border" fluid style={{height: "90vh", display: "flex", flexDirection: "column", justifyContent: "space-evenly", }}>
        <h2>Navigate to examples:</h2>
        <Container style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignContent: "space-around", padding: "15vh 15vw"}} fluid>
        {IDES.map((IDE) => {
          return (
            <Button size="lg" onClick={() => navigate(`/${IDE.name}`)}>
              {IDE.name}
            </Button>
          );
        })}
        </Container>
      </Container>
    </>
  );
}

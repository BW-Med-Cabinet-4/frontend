import React from "react";
import { useDispatch } from "react-redux";
import { removeAilment } from "../../redux/actions";
import { TiDelete } from "react-icons/ti";
import { Col, Button, Row, Card } from "reactstrap";
//import "bootstrap/dist/css/bootstrap.css";


export const Ailment = props => {
  const { ailment } = props;
  const { ailmentName, description } = ailment;
  const dispatch = useDispatch();

  const handleRemoveAilment = e => {
    e.preventDefault();
    dispatch(removeAilment(ailment));
  };

  return (
    <Card style={{ margin: "1rem 0", padding: "0" }}>
      <Row noGutters>
        <Col xs={1} style={{ padding: "5px 1rem" }}>
          <Button
            onClick={handleRemoveAilment}
            className="CustomButtonOutline"
            style={{ fontSize: "2.3rem", border: "1px solid white" }}
          >
            <TiDelete />
          </Button>
        </Col>
        <Col xs={11} style={{ padding: "1rem 1rem" }}>
          <p>Description: {description}</p>
        </Col>
      </Row>
    </Card>
  );
};

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Col,
  Button,
  Form as StrapForm,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import { addAilment } from "./ailmentsSlice";
import axios from 'axios';

const AilmentForm = ({ values, errors, touched, status, handleChange }) => {
  const dispatch = useDispatch();
  const initialSelect = "pain";
  const [selectedValue, setSelectedValue] = useState(initialSelect);

  const setInitialSelect = () => {
    setSelectedValue(initialSelect);
  };
  const handleSelectChange = e => {
    setSelectedValue(e.target.value);
    console.log(selectedValue);
  };

  useEffect(() => {
    status && dispatch(addAilment(status));
  }, [status]);

  const [strainIds, setStrainIds] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0});

  useEffect(() => {
    status && setStrainIds(status);
  },[status])

  return (
    <>
      <div className="FormWrapper">
        <Form>
          <h3>
            Please enter information of an ailment you would like help with.
          </h3>
          <FormGroup row>
            <Label for="ailmentName" sm={2}>
              Ailment
            </Label>
            <Col sm={10}>
              <Input
                tag={Field}
                component="select"
                name="ailmentName"
                id="ailmentName"
                invalid={touched.ailmentName && errors.ailmentName}
              >
                <option disabled value="">
                  Select Ailment
                </option>
                <option value="Pain">Pain</option>
                <option value="Stress">Stress</option>
                <option value="Insomnia">Insomnia</option>
                <option value="Other Ailment">
                  Other (please describe below)
                </option>
              </Input>
              {touched.ailmentName && errors.ailmentName && (
                <p className="error">{errors.ailmentName}</p>
              )}
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="severity" sm={2}>
              Severity
            </Label>
            <Col sm={10}>
              <Input
                tag={Field}
                component="select"
                name="severity"
                id="severity"
              >
                <option disabled value="">
                  Select Severity
                </option>
                <option value="Mild">Mild</option>
                <option value="Moderate">Moderate</option>
                <option value="Severe">Severe</option>
              </Input>
              {touched.severity && errors.severity && (
                <p className="error">{errors.severity}</p>
              )}
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="description" sm={2}>
              Description (optional)
            </Label>
            <Col sm={10}>
              <Input
                tag={Field}
                component="textarea"
                name="description"
                id="description"
                placeholder="Description..."
              />
            </Col>
          </FormGroup>

          <Button type="submit" className="CustomButtonOutline">
            Submit
          </Button>

          <hr/>
          <h4 style={{margin: '1rem 0'}}>Recommended strain ids</h4>
          <h4>{`${strainIds['0']}, ${strainIds['1']}, ${strainIds['2']}, ${strainIds['3']}, ${strainIds['4']}`}</h4>  
          <h4 style={{margin: '1rem 0'}}>
            {`... can be looked up `}
            <a href="https://www.kaggle.com/nvisagan/cannabis-strains-features">HERE</a>
            </h4>
        </Form>
      </div>
    </>
  );
};

export default withFormik({
  mapPropsToValues({ ailmentName, severity, pharmaUse, description }) {
    return {
      ailmentName: ailmentName || "",
      severity: severity || "",
      // pharmaUse: pharmaUse || 0,
      description: description || ""
    };
  },
  validationSchema: Yup.object().shape({
    ailmentName: Yup.string().required("Ailment required"),
    severity: Yup.string().required("Severity required"),
    // pharmaUse: Yup.number().required("Years of Pharma Use required"),
    description: Yup.string()
  }),
  handleSubmit(values, { setStatus }) {
    const ailmentString = formatAilment(values.ailmentName, values.severity, values.description);
    console.log(ailmentString);
    setStatus(values);

    axios
      // .get('https://cannabis-api-1.herokuapp.com', ailmentString)
      .get(`https://medcabapi.herokuapp.com/api/ailments`)
      .then(res => {
          setStatus(res.data);
          console.log(res.data);
      })
      .catch(err => console.log(err.message));
  }
})(AilmentForm);

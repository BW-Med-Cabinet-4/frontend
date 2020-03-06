import React from "react";
import AilmentForm from "./AilmentForm";
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { AilmentList } from "./AilmentList";
import { Button } from "reactstrap";
//import "bootstrap/dist/css/bootstrap.css";

export const Ailments = props => {
  function handlePost(event){
    event.preventDefault();
      axiosWithAuth().post(`/api/ailments`)
      .then(response => {
        console.log('this is post',response)
        window.alert('Ailment Posted')
      })
      .catch(error => {
          console.log('ehh error', error)
      },[])
    }; 

  return (
    <>
      <AilmentForm />
      <hr/>
      <AilmentList />
      <hr/>
      <div>
        <Button onClick={handlePost} className="CustomButtonFilled">Continue</Button>
      </div>
    </>
  );
};
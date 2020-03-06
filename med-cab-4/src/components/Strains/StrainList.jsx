import React, { Component } from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import StrainCard from "./StrainCard";

export default class StrainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strains: []
    };
  }

  componentDidMount() {
    axiosWithAuth()
      .get("https://medcabapi.herokuapp.com/api/strains")
      .then(res => this.setState({ strains: res.data }))
      .catch(err => console.log(err.response));
  }

  render() {
    return (
      <div className="strain-list">
        {this.state.strains.map(strain => (
          <StrainDetails key={strain.strain_id} strain={strain} />
        ))}
      </div>
    );
  }
}

function StrainDetails({ strain }) {
  return (
    <Link to={`/strains/${strain.strain_id}`}>
      <StrainCard strain={strain} />
    </Link>
  );
}
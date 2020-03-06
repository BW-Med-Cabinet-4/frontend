import React from "react";
import axios from "axios";
import StrainCard from "./StrainCard";
import StrainUpdate from './StrainUpdate'

export default class Strain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strain: null
    };
  }

  componentDidMount() {
    this.fetchStrain(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchStrain(newProps.match.params.id);
    }
  }

  fetchStrain = id => {
    axios
      .get(`https://medcabapi.herokuapp.com/api/strains/${id}`)
      .then(res => this.setState({ strain: res.data }))
      .catch(err => console.log(err.response));
  };

  saveStrain = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.strain);
  };

  handleUpdate = e => {
    e.preventDefault();
    this.props.history.push(`/update-strain/${this.state.strain.strain_id}`);
  };

  handleDelete = () => {
    console.log(this.state.movie)
    axios.delete(`https://medcabapi.herokuapp.com/api/strains/${this.state.strain.strain_id}`)
    .then(res => {
      console.log('this is delete res',res.data)
      this.props.history.push('')
    })
  }

  render() {
    if (!this.state.strain) {
      return <div>Loading strains information...</div>;
    }

    return (
      <div className="save-wrapper">
        <StrainCard movie={this.state.strain} />
        <div className="save-button" onClick={this.saveStrain}>
          Save
        </div>
        <div className="delete-button" onClick={this.handleDelete}>
          Delete
        </div>
        <div className="update-button" onClick={this.handleUpdate}>
          Update
        </div>
      </div>
    );
  }
}
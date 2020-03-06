import React from 'react';

const StrainCard = props => {
  const { strain_name, strain_type, effects, flavor, strain_desc } = props.strain;
  return (
    <div className="strain-card">
      <h2 className="strain-name">
        Name: <em>{strain_name}</em>
      </h2>
      <div className="strain-type">
        Type: <strong>{strain_type}</strong>
      </div>
      <h3>Effect: {effects} </h3>
      <h3>Flavors: {flavor}</h3>
      <h4>{strain_desc}</h4>
    </div>
  );
};

export default StrainCard;
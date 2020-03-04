import React from 'react';

const StrainCard = (props) => {
    return (
        <>
            <h1>{props.strainName}</h1>
            <h2>{props.strainType}</h2>
            <h3>{props.effects}</h3>
            <h3>{props.flavor}</h3>
            <h4>{props.desc}</h4>
        </>
    )
}

export default StrainCard;
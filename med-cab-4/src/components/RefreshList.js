import React from 'react';

const RefreshList = (props) => {
    return (
        <div>
          <button onClick={props.setData(props.refresh)} type='submit'>Refresh List</button>  
        </div>
    );
};

export default RefreshList;

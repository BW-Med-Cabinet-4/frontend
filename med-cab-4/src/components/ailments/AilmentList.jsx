import React from "react";
import { useSelector } from "react-redux";
import { Ailment } from "./Ailment";

export const AilmentList = () => {
  const ailments = useSelector(state => state.ailments);

  return (
    <>
      <h2>Ailments</h2>
      {ailments.length ? (
        <>
          {ailments.map((item, index) => (
            <Ailment key={index} ailment={item} />
          ))}
        </>
      ) : (
        <p>Please Fill out form to add 1 ailment to continue</p>
      )}
    </>
  );
};

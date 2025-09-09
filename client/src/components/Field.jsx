import React from "react";

const Field = (props) => {
     console.log(props.desc)
  return (
   
    <div>
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-xl">{props.title}</legend>
        <input type="text" className="input text-white border-none" placeholder={props.desc} />
        {/* <p className="label">Optional</p> */}
      </fieldset>
    </div>
  );
};

export default Field;

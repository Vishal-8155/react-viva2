import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Home Page</h3>

      <button type='button' onClick={()=>navigate('/Form')}>Form</button> <br /> <br />

      <button type="button" onClick={() => navigate(-1)}>
        Back
      </button>
      <button type="button" onClick={() => navigate(1)}>
        Next
      </button>
    </div>
  );
}

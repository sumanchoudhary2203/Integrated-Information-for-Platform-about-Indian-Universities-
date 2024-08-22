import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Note() {
  const [res, setRes] =
  useState ([])
    // useState ({ University_Name: "", College_Name: "", _id: "", College_Type: "" });

  // useparams
  const { state,city } = useParams();

  const fetchnote = async () => {
    const res = await fetch(`http://localhost:3000/colleges/${state}/${city}`);
    const data = await res.json();
    console.log(data);
    setRes(data);
  };

  useEffect(() => {
    fetchnote();
  }, []);
  // send req to backend and save the response in a state
  return (
    <div>
      <div className="p-4 m-4 border-2 border-black">
        {res.map((college) => (
          <div>{college.College_Name}</div>
        ))}
      </div>
    </div>
  );
}

export default Note;

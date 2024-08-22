import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the College Directory</h1>
      <Link to="/admin">Go to Admin Page</Link>
    </div>
  );
}

export default Home;

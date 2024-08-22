import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [formData, setFormData] = useState({
    University_Name: "",
    College_Name: "",
    College_Type: "",
    State_Name: "",
    District_Name: "",
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/colleges", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("College added successfully");
        navigate("/"); // Redirect to home page after successful submission
      } else {
        alert("Failed to add college");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  return (
    <div>
      <h2>Add College</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="University_Name"
          placeholder="University Name"
          value={formData.University_Name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="College_Name"
          placeholder="College Name"
          value={formData.College_Name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="College_Type"
          placeholder="College Type"
          value={formData.College_Type}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="State_Name"
          placeholder="State Name"
          value={formData.State_Name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="District_Name"
          placeholder="District Name"
          value={formData.District_Name}
          onChange={handleChange}
          required
        />
        <button type="submit">Add College</button>
      </form>
    </div>
  );
}

export default Admin;

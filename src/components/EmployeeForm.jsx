import { useState } from "react";
import api from "../services/api";

function EmployeeForm({ fetchEmployees }) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/employees", {
      name,
      department,
      salary: Number(salary),
    });

    setName("");
    setDepartment("");
    setSalary("");

    fetchEmployees();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <br /><br />

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
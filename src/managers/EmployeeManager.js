// create a function that returns a fetch call from http://localhost:8000/employees/1

const getEmployeeById = (id) => {
  return fetch(`http://localhost:8000/employees/${id}`)
    .then(res => res.json())
}

// create a function that returns a post fetch call from http://localhost:8000/employees
const addEmployee = (employee) => {
  return fetch("http://localhost:8000/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(employee)
  })
    .then(res => res.json())
}

// create a function that returns a get fetch call from http://localhost:8000/employees
const getAllEmployees = () => {
  return fetch("http://localhost:8000/employees")
    .then(res => res.json())
}

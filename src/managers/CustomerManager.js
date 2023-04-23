const getAllCustomers = () => {
  return fetch("http://localhost:8000/customers")
    .then(res => res.json())
}

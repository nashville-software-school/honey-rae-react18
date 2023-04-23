const getTicketById = (id) => {
  return fetch(`http://localhost:8000/tickets/${id}`)
    .then(res => res.json())
}

const addTicket = (ticket) => {
  return fetch("http://localhost:8000/tickets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(ticket)
  })
    .then(res => res.json())
}

const getAllTickets = () => {
  return fetch("http://localhost:8000/tickets")
    .then(res => res.json())
}

const searchTicketsByStatus = (status) => {
  return fetch(`http://localhost:8000/tickets?status=${status}`)
    .then(res => res.json())
}

const updateTicket = (ticket) => {
  return fetch(`http://localhost:8000/tickets/${ticket.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(ticket)
  })
}

const deleteTicket = (id) => {
  return fetch(`http://localhost:8000/tickets/${id}`, {
    method: "DELETE"
  })
}


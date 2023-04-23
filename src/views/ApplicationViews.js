import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/CustomerRegister"
import { Authorized } from "./Authorized"


export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<TicketList />} />
                <Route exact path="/tickets/:ticketId" element={<Ticket />} />
                <Route path="/tickets/create" element={<TicketForm />} />
            </Route>
        </Routes>
    </>
}

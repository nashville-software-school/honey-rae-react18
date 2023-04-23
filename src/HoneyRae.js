import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
import { useEffect } from "react"


export const HoneyRae = () => {
    const [ isStaff, setIsStaff ] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("honeyrae")) {
            const auth = localStorage.getItem("honeyrae")
            const userType = JSON.parse(auth)
            setIsStaff(userType.staff)
        }
    }, [localStorage.getItem("honeyrae")])
    return <>
        {
            isStaff ? <EmployeeNavBar /> : <NavBar />
        }
        <ApplicationViews />
    </>
}


import { Card, CardContent } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

function renderDashboard(data) {
    console.log(data)
    return (
        <>
        <div className="container-form">
            <Card style={{ width: "800px", height: "370px", padding: '20px'}}
        className="form-login"
        variant="outlined">
            <CardContent>
                <h2>Dashboard</h2>
                <h3>User statistics</h3>
                <p>{"Registered users: " + data['total_users']}</p>
                <p>{"Last active users: " + data['total_active']}</p>
            </CardContent>
            </Card>
        </div>
        </>
    )
}

export const Dashboard = () => {
    const query = useQuery()
    const token = query.get('token')
    const [isValid, setIsValid] = useState(false)
    const [data, setData] = useState([{'total_users': 0}])

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/dashboard?token=' + token)
        .then(response => {
            if (response.status === 200) {
                setIsValid(true)
                setData([response.data])
            }
        })
    }, [])

    if (isValid === true) {
        return renderDashboard(data[0])
    }

    return <>
        <div>The access is invalid.</div>
    </>

    return <></>
}


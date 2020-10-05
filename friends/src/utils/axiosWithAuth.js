// // Step 3: Set up authentication/token

import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")

    return axios.create({
        baseURL: "http://localhost:5000/api",
        headers: {
            Authorization: token
        }
    })
}

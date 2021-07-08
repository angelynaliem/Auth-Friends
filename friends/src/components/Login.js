// // Step 2: set up login (doesnt need authentication yet, just that user can log in)

import React from "react";
// import Loader from "react-loader-spinner";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friends from "./Friends";

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: "",
        },
              isLoading: false,
    
    }


    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name] : e.target.value
            }
        })
    }

    login = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post("/login", this.state.credentials)
        .then((res) => {
            localStorage.setItem("token", res.data.payload)
            this.props.history.push("/friends")
        })
        .catch((err) => {
            console.log("Err in Login.js is: ", err);
        })
    }

    // if (this.state.isLoading) {
    //     return <div>Loading...</div>
    // }

    render() {
        return (
            <div>
                <form onSubmit = {this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;

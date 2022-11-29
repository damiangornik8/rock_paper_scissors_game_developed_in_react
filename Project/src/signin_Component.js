// import React, { Component } from "react";

// export default class Login extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>React Login Component</h3>
//             </div>
//         );
//     }
// }


import React, { Component } from "react";

import { Redirect } from 'react-router';

  
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {email: ''};
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
     


      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.email);

        return <Route to="/Dashboard" />

        event.preventDefault();
      }


    render() {
        return (
            <form onSubmit={ this.handleSubmit  } >

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email"  className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit"   className="btn btn-dark btn-lg btn-block">
                    
                    
                    Sign in
                    
                    
                    
                    </button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>

                <p className="forgot-password text-right">
                    New user? <a href="sign-up">Sign-up here</a>
                </p>


                <Link to="/dashboard"><button>
              Sign-in 
            </button>
            </Link>


            


            </form>
        );
    }
}
import React, {useState} from "react";
import Axios from "axios";
// import {Formik} from "formik";
import {Link} from "react-router-dom";
// import Meal from "./Meal";
function LoginForm() {
  const USER_EMAIL = "challenge@alkemy.org";
  const USER_PASSWORD = "react";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const URL = `http://challenge-react.alkemy.org/`;

  const onSubmit = (e) => {
    e.preventDefault();
    // getData();
    if(email !== USER_EMAIL || password !== USER_PASSWORD){
      console.log("Credenciales invalidas");
    }
    // if(password !== USER_PASSWORD){
    //   console.log("La contraseña es incorrecta");
    // }
  //   Axios.post(URL,{
  //     email: email,
  //     password: password
  //   })
  //   .then(resp => console.log(resp.data))
  //   ;
  // }
  };


  Axios.post(URL,{
    email: USER_EMAIL,
    password: USER_PASSWORD
  })
  .then(resp => console.log(resp))
  ;
  return (
    <body>
      <section>
        <div className="container mt-5 dm-5">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-6 m-auto">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <form onSubmit={onSubmit} className="form">
                    <input
                    name="email_input"
                      type="text"
                      className="form-control my-4 py-2"
                      placeholder="Email"
                      onChange={e => setEmail(e.target.value)}
                    />
                    <input
                    name="password_input"
                      type="text"
                      className="form-control my-4 py-2"
                      placeholder="Password"
                      onChange={e => setPassword(e.target.value)}
                    />
                      <Link to={'/'}>
                    <div className="tex-center">
                      <button className="btn btn-primary mt-3">Login</button>
                    </div>
                      </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
    // <div className="card">
    //   <div className="card-body">
    //     <input
    //       className="form-control  my-4 py-2"
    //       type="text"
    //       placeholder=".form-control-lg "
    //       aria-label=".form-control-lg example"
    //     />
    //   </div>
    //   <div className="card-body">
    //     <input
    //       className="form-control my-4 py-2"
    //       type="text"
    //       placeholder="Default input"
    //       aria-label="default input example"
    //     />
    //   </div>
    //   <div className="card-body">
    //     <input
    //       className="form-control form-control-sm"
    //       type="text"
    //       placeholder=".form-control-sm"
    //       aria-label=".form-control-sm example"
    //     />
    //   </div>
    // </div>
    // <div class="input-group">
    //     <input
    //       type="search"
    //       class="form-control rounded"
    //       placeholder="Inserte el nombre de la receta"
    //       aria-label="Search"
    //       aria-describedby="search-addon"
    //     />
    //     <button type="button" class="btn btn-outline-primary">
    //       BUSCAR
    //     </button>
    //   </div>
  );
}

export default LoginForm;

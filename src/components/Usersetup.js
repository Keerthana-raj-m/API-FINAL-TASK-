import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [id, setId] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [country, countrychange] = useState("");
  const [address, addresschange] = useState("");
  const [gender, genderchange] = useState("");

  const navigate = useNavigate();

  // const IsValidate=()=>{
  //   let errormessage='The filed is required'
  //   let isproceed=true;
  //   if(id === null || id==''){
  //     isproceed=false;
  //     errormessage +='username';
  //   }

  //   if(!isproceed){
  //     toast.warning(errormessage)
  //   }
  //   return isproceed;
  // }

  const handlesubmit = (e) => {
    //  redirect("/login");
    navigate("/login");

    e.preventDefault();

    let regobj = {
      id: id,
      name: name,
      password:password,
      email,
      phone,
      country,
      address,
      gender,
    };
    //  console.log(regobj)

    fetch("https://192.168.1.30/USerAPI/api/UserSetup/BindUserSetup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: regobj,
    })
      .then((res) => {
        res.status;
        toast.success("Registred Successfully");
      })
      .catch((err) => {
        toast.error("Failed :" + err.message);
      });
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-header">
              <h1>User Login</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <form></form>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <br></br>
                    <input
                      type="radio"
                      checked={gender === "male"}
                      onChange={(e) => genderchange(e.target.value)}
                      name="gender"
                      value="male"
                      className="app-check"
                    ></input>
                    <label>Male</label>
                    <input
                      type="radio"
                      checked={gender === "female"}
                      onChange={(e) => genderchange(e.target.value)}
                      name="gender"
                      value="female"
                      className="app-check"
                    ></input>
                    <label>Female</label>
                    <input
                      type="radio"
                      checked={gender === "other"}
                      onChange={(e) => genderchange(e.target.value)}
                      name="gender"
                      value="other"
                      className="app-check"
                    ></input>
                    <label>Other</label>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      User Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password <span className="errmsg">*</span>
                    </label>
                    <input
                      value={password}
                      onChange={(e) => passwordchange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Full Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => namechange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email <span className="errmsg">*</span>
                    </label>
                    <input
                      value={email}
                      onChange={(e) => emailchange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Phone Number<span className="errmsg">*</span>
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => phonechange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Country<span className="errmsg">*</span>
                    </label>
                    <select
                      value={country}
                      onChange={(e) => countrychange(e.target.value)}
                      className="form-control"
                    >
                      <option value="india">India</option>
                      <option value="usa">USA</option>
                      <option value="singapore">Singapore</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>
                      Address<span className="errmsg">*</span>
                    </label>
                    <textarea
                      value={address}
                      onChange={(e) => addresschange(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn-btn-primary">
                  Register
                </button>
                {/* <a className="btn-btn-danger">Back</a> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import axios from "axios";
const Register = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.tagName.toLowerCase() === 'select') {
        setUserDetails({
          ...userDetails,
          [name]: value
        });
      } else {
        setUserDetails({
          ...userDetails,
          [name]: value
        });
      }
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userDetails)
    try {
      const userData = await axios.post(
        "https://tender-sweatshirt-tuna.cyclic.app/users/register",
        userDetails,
        { withCredentials: true }
      );
      console.log(userData);
    //   if (userData.data.msg == "user register successfully") {
    //     alert(`user register successfully`);
    //   }
    //   setUserDetails({
    //     name: "",
    //     email: "",
    //     password: "",
    //     gender:""
    //   });
    } catch (error) {
      console.log(error);
    //   if (error.response.data == "user is exist already") {
    //     alert(`user is exist already`);
    //   } else if (
    //     error.response.data.error == "Password does not meet the criteria."
    //   ) {
    //     alert(
    //       `Your password should have a Uppercase letter, a Special Character, a Number and length should have atleast 8 Character`
    //     );
    //   }
    }
  };
  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h1>Register here...</h1>
      <form id="loginFrom" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          value={userDetails.name}
          placeholder="User Name..."
        />
        <label htmlFor="gender">Select gender</label>
        <select
         onChange={handleChange}
         name="gender"
         id="gender"
         value={userDetails.gender}
        >
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <label htmlFor="email">Enter your email</label>
        <input
          onChange={handleChange}
          type="text"
          name="email"
          id="email"
          value={userDetails.email}
          placeholder="abc@gmail.com"
        />
        <label htmlFor="password">Enter your password</label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          id="password"
          value={userDetails.password}
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

import React, { useState, useContext } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import SignInForm from "../components/signin/SignInForm";
import SignInCover from "../components/signin/SignINCover";
import  {signInReq} from "../services/authService.js";
import { AuthContext } from "../context/authContext.jsx";

function SignIn() {
 const { setUsername,setImgId,setIsLoggedIn } = useContext(AuthContext);
  const [userData,setUserData] = React.useState({
    email:"",
    password:""
  });

  const navigate = useNavigate();

    const signInMutation = useMutation(signInReq, {
      onSuccess: (data) => {
        setUsername(data.data.username);
        setImgId(data.data.imgId),
        setIsLoggedIn(true);
        navigate("/");
      },
      // onError: (error) => {
      //   console.log(error.response.data);
      // }
    });

  const handleSubmit = (e) => {
    e.preventDefault();
     signInMutation.mutate(userData)
    }


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };


  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <SignInForm
          userData={userData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isloading={signInMutation.isLoading}
          isError={signInMutation.isError}
          error={signInMutation.error}
        />
        <SignInCover />
      </section>
    </div>
  );
}

export default SignIn;
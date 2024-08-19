import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";


const LeadForm = ({className, inputClassName, buttonClassName}) => {
  const [email, setEmail] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [error, setError] = useState('')

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if(!email){
        setError("Email is required");
        return; 
      }
    
      const response = await axios.post(
          "http://localhost:8080/api/lead",
          {
            email,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

      if(response.status === 200){
        setIsFormSubmitted(true);
      }
    } catch (err) {

        const {response} = err;
        const {message} = response.data;
        setError(message)

      console.error("Error creating post:", response.data);
    }
  };

  const handleSetEmail = (e)=>{
    setEmail(e.target.value);
    setError('');
  }

  return (
    <>
      {isFormSubmitted ? (
        <h3 className="text-orange-100" > 🎊 Thanks For Subscribing</h3>
      ) : (
        <div className="form-container w-full ">
          <form
            className={`w-full relative ${className} `}
            onSubmit={handleFormSubmit}
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className={`border-[1.5px] border-black md-box-shadow p-[16px_24px] sm-p rounded-full w-full outline-none ${inputClassName}`}
              value={email}
              onChange={handleSetEmail}
            />

            <Button isOrange={true} className={buttonClassName}>
              Get Started
            </Button>
          </form>
          {error && <p className={`text-red-600 pl-3 pt-2 `}>{error}</p>}
        </div>
      )}
    </>
  );
};

export default LeadForm;

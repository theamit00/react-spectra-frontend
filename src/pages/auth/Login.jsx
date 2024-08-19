import Button from "@/components/Button";
import Input from "@/components/Input";
import React, { useState } from "react";
import RememberAndForgot from "./RememberAndForgot";

const Login = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <form action="#" className="w-full flex flex-col gap-4 ">
      <Input type={`email`} placeholder="Email" name="email" />
      <Input type={`password`} placeholder="Password" name="password" />
      <Button type={`submit`} isOrange={true} className="w-full">
        Register
      </Button>
      <RememberAndForgot
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
    </form>
  );
};

export default Login;

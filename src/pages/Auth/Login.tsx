import { Link } from "react-router-dom";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Divider from "../../components/Divider/Divider";

import { Github } from "../../assets/icons/github";
import { Google } from "../../assets/icons/google";

const LoginPage = () => {
  return (
    <div>
      <h1 className="mb-10">Log in to your account</h1>

      <div className="flex flex-col md:flex-row gap-4">
        <Button type="outlined">
          <Google />
          Google
        </Button>

        <Button type="outlined">
          <Github />
          Github
        </Button>
      </div>

      <div className="mb-5">
        <Divider />

        <div className="flex flex-col mb-[30px]">
          <form className="flex flex-col gap-6 mb-4">
            <Input placeholder="Work email" />
            <Input placeholder="Password" type="password" />
          </form>

          <Link className="ml-auto" to={"/forgot-password"}>
            Forgot your password?
          </Link>
        </div>

        <Button type="default">Log in to Qencode</Button>
      </div>

      <div className="text-center text-[#060E1E]">
        Is your company new to Qencode? <Link to={"/"}>Sign up</Link>
      </div>
    </div>
  );
};

export default LoginPage;

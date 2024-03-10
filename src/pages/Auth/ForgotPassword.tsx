import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/login");
  };

  return (
    <div className="w-full">
      <h1 className="mb-10">Forgot Password?</h1>

      <form className="mb-6">
        <Input placeholder="Enter your email" />
      </form>

      <div className="flex flex-col gap-5">
        <Button type="default">Send</Button>
        <Button type="outlined" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

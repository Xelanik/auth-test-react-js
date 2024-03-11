import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import useForm from "../../hooks/useForm";

import { userService } from "../../services/auth.service";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const { inputFields, errors, handleChangeInputs, onSubmit } = useForm({ email: "" });

  const handleCancel = () => {
    navigate("/login");
  };

  const handleResetPassword = () => {
    onSubmit(() =>
      userService.resetPassword({ email: inputFields.email }).then(() => {
        toast.success("Reset password complete. Check your email to complete the password reset process.");
      })
    );
  };

  return (
    <div className="w-full">
      <h1 className="mb-10">Forgot Password?</h1>

      <form className="mb-6">
        <Input
          placeholder="Enter your email"
          name="email"
          value={inputFields.email}
          error={errors.email}
          onChange={handleChangeInputs}
        />
      </form>

      <div className="flex flex-col gap-5">
        <Button type="default" onClick={handleResetPassword}>
          Send
        </Button>
        <Button type="outlined" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

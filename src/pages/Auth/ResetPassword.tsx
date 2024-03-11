import { useSearchParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import useForm from "../../hooks/useForm";

import { userService } from "../../services/auth.service";

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token") || "";
  const secret = searchParams.get("secret") || "";

  const { inputFields, errors, handleChangeInputs, onSubmit } = useForm({ password: "", password_confirm: "" });

  const handleResetPassword = () => {
    onSubmit(() =>
      userService.setPassword({
        token,
        secret,
        password: inputFields.password,
        password_confirm: inputFields.password_confirm,
      })
    );
  };

  return (
    <div>
      <h1 className="mb-10">Create new Password?</h1>

      <form className="flex flex-col gap-6 mb-[30px]">
        <Input
          placeholder="Password"
          label="Password"
          type="password"
          name="password"
          value={inputFields.password}
          onChange={handleChangeInputs}
          error={errors.password}
        />

        <Input
          placeholder="Password"
          label="Confirm Password"
          type="password"
          name="password_confirm"
          value={inputFields.password_confirm}
          onChange={handleChangeInputs}
          error={errors.password_confirm}
        />
      </form>

      <Button type="default" onClick={handleResetPassword}>
        Reset Password
      </Button>
    </div>
  );
};

export default ResetPasswordPage;

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const ResetPasswordPage = () => {
  return (
    <div>
      <h1 className="mb-10">Create new Password?</h1>

      <form className="flex flex-col gap-6 mb-[30px]">
        <Input placeholder="Password" label="Password" type="password" />
        <Input placeholder="Password" label="Confirm Password" type="password" />
      </form>

      <Button type="default">Reset Password</Button>
    </div>
  );
};

export default ResetPasswordPage;

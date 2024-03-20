import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import usePostLogin from "@/hooks/usePostLogin";
import { ErrorMessage } from "@hookform/error-message";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  userName: string;
  password: string;
}

const LoginCard = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const loginMutation = usePostLogin();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    loginMutation.mutate({ userName: data.userName, password: data.password });
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader className="items-center">
          <CardTitle>Log in to Project Munch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-1">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="userName" className="text-right">
                  Username
                </Label>
                <Input
                  id="userName"
                  placeholder="Enter username"
                  className="col-span-3"
                  {...register("userName", {
                    required: "Username is required.",
                  })}
                />
              </div>
              {errors.userName && (
                <div className="grid grid-cols-4 items-center gap-4">
                  <div />
                  <div className="col-span-3 p-1 rounded-md text-sm text-error">
                    <ErrorMessage
                      errors={errors}
                      name="userName"
                      render={({ message }) => <p>{message}</p>}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  className="col-span-3"
                  {...register("password", {
                    required: "Password is required.",
                  })}
                />
              </div>
              {errors.password && (
                <div className="grid grid-cols-4 items-center gap-4">
                  <div />
                  <div className="col-span-3 p-1 rounded-md text-sm text-error">
                    <ErrorMessage
                      errors={errors}
                      name="password"
                      render={({ message }) => <p>{message}</p>}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="w-1/2">Log In</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginCard;

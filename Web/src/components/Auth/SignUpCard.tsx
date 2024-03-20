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
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface IFormInput {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
}

const SignUpCard = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader className="items-center">
          <CardTitle>Sign up for Project Munch</CardTitle>
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
                    minLength: {
                      value: 4,
                      message: "Username must have at least 4 characters.",
                    },
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
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Enter email"
                  className="col-span-3"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      //valid email check
                      // eslint-disable-next-line no-useless-escape
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Invalid email address.",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <div className="grid grid-cols-4 items-center gap-4">
                  <div />
                  <div className="col-span-3 p-1 rounded-md text-sm text-error">
                    <ErrorMessage
                      errors={errors}
                      name="email"
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
                  placeholder="Create password"
                  className="col-span-3"
                  {...register("password", {
                    required: "Password is required.",
                    minLength: {
                      value: 8,
                      message: "Password must have at least 8 characters.",
                    },
                    validate: {
                      caps: (v) =>
                        /[A-Z]/.test(v) ||
                        "Password must have an uppercase character.",
                      lower: (v) =>
                        /[a-z]/.test(v) ||
                        "Password must have a lowercase character.",
                      numeral: (v) =>
                        /[0-9]/.test(v) || "Password must have a number.",
                      special: (v) =>
                        /[^A-Za-z0-9]/.test(v) ||
                        "Password must have a symbol.",
                    },
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

            <div className="flex flex-col gap-1">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="confirmPassword" className="text-right">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  className="col-span-3"
                  {...register("confirmPassword", {
                    validate: (v) => {
                      if (watch("password") !== v) {
                        return "Password doesn't match.";
                      }
                    },
                  })}
                />
              </div>
              {errors.confirmPassword && (
                <div className="grid grid-cols-4 items-center gap-4">
                  <div />
                  <div className="col-span-3 p-1 rounded-md text-sm text-error">
                    <ErrorMessage
                      errors={errors}
                      name="confirmPassword"
                      render={({ message }) => <p>{message}</p>}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="w-1/2" type="submit">
            Sign Up
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SignUpCard;

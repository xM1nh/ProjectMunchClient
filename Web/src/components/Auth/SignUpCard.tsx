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

interface IFormInput {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const SignUpCard = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
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
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                placeholder="Enter username"
                className="col-span-3"
                {...register("username", { required: true, minLength: 3 })}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                placeholder="Enter email"
                className="col-span-3"
                {...register("email", {
                  required: true,
                  //valid email check
                  // eslint-disable-next-line no-useless-escape
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                })}
              />
            </div>
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
                  required: true,
                  minLength: 8,
                  pattern:
                    //must contain a digit, a lowercase char, an uppercase char, a special char
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])$/gm,
                })}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="confirmPassword" className="text-right">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className="col-span-3"
                {...register("confirmPassword")}
              />
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

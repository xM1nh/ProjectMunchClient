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

const LoginCard = () => {
  return (
    <Card>
      <CardHeader className="items-center">
        <CardTitle>Log in to Project Munch</CardTitle>
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
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              className="col-span-3"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="w-1/2">Log In</Button>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;

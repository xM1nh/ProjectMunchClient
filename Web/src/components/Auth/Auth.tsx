import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginCard from "./LoginCard";
import SignUpCard from "./SignUpCard";

const Auth = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center h-20">
        <span className="text-3xl font-bold text-center">Welcome to Munch</span>
      </div>
      <Tabs defaultValue="login">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Log In</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginCard />
        </TabsContent>
        <TabsContent value="signup">
          <SignUpCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Auth from "@/components/Auth/Auth";

const HeaderLogin = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="btn btn-ghost">Log In</button>
      </DialogTrigger>
      <DialogContent className="h-full sm:h-fit">
        <Auth />
      </DialogContent>
    </Dialog>
  );
};

export default HeaderLogin;

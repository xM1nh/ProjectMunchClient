import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeaderAvatar = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default HeaderAvatar;

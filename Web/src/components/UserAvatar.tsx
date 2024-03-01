import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { forwardRef } from "react";

const UserAvatar = forwardRef<HTMLSpanElement>((_, ref) => {
  return (
    <Avatar className="cursor-pointer" ref={ref}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
});

export default UserAvatar;

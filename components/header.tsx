"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import PostIt from "../images/PostIt_Nepal.png";
import { Button } from "./ui/button";
import Image from "next/image";
import {  ChevronLeftIcon, MenuIcon } from "lucide-react";
import { useSidebar } from "./ui/sidebar";

const Header = () => {
  const { user } = useUser();
  const { toggleSidebar, open, isMobile } = useSidebar();
  return (
    <header className="flex p-4 border-b border-gray-200 justify-between items-center">
      {/* leftside */}
      <div className="flex  h-10 items-center gap-2">
        {open && !isMobile ? (
          <ChevronLeftIcon className="w-6 h-6" onClick={toggleSidebar} />
        ) : (
          <div className="flex items-center gap-2">
            <MenuIcon className="h-6 w-6" onClick={toggleSidebar} />
            <Image
              src={PostIt}
              height={100}
              width={0}
              alt="logo"
              className="  md:block"
            />
          </div>
        )}
      </div>
      {/* rightside */}

      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Button asChild variant="outline">
            <SignInButton mode="modal" />
          </Button>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;

"use client";
import React, { useCallback, useState } from "react";
import Avatar from "../Avatar";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";
import { SafeUser } from "@/types/user";

interface UserMenuProps {
  currentUser: SafeUser;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    console.log("isOpen", isOpen);
    setIsOpen(!isOpen);
  }, [isOpen]);
  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toggleOpen}
          className="p-2 border-[1px] border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700 "
        >
          <Avatar src={currentUser?.image}/>
          {isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </div>
        {isOpen && (
          <div className="absolute rounded-md shadow-md w-[170px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer">
            {currentUser ? (
              <div>
                <MenuItem onClick={toggleOpen} href="/orders">
                  Your Orders
                </MenuItem>
                <MenuItem onClick={toggleOpen} href="/admin">
                  Admin Dashboard
                </MenuItem>
                <hr />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    signOut();
                  }}
                >
                  Logout
                </MenuItem>
              </div>
            ) : (
              <div>
                <MenuItem onClick={toggleOpen} href="/login">
                  Login
                </MenuItem>
                <MenuItem onClick={toggleOpen} href="/register">
                  Register
                </MenuItem>
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;

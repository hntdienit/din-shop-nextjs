import Link from "next/link";
import React from "react";

interface MenuItemProps {
  children: React.ReactNode;
  onClick: () => void;
  href?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, onClick, href }) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <div onClick={onClick} className="px-4 py-4 hover:bg-neutral-100 transition">
            {children}
          </div>
        </Link>
      ) : (
        <div onClick={onClick} className="px-4 py-4 hover:bg-neutral-100 transition">
          {children}
        </div>
      )}
    </>
  );
};

export default MenuItem;

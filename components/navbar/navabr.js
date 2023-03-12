import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Bebas_Neue } from "next/font/google";
import { useState } from "react";
import videoLogo from "@/public/video-logo.svg";
import {
  nav,
  leftSide,
  rightSide,
  container,
  active,
  email,
  logout,
  user,
  dropdown,
  listDropdown,
  titleLogo,
  logo,
} from "./navbar.module.scss";
import { ChevronDown, LogOut, User } from "react-feather";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

function Navbar({ loginEmail }) {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const loginNav = () => {
    if (router.pathname !== "/login") {
      return true;
    }
  };
  return (
    <div className={nav}>
      <div className={`${container} container`}>
        <div className={leftSide}>
          <Link href="/" className={logo}>
            <Image src={videoLogo} width={50} alt="VidFlex" />
            {!loginNav() && (
              <span className={`${titleLogo} ${bebasNeue.className}`}>
                Vidflex
              </span>
            )}
          </Link>
          {loginNav() && (
            <>
              {" "}
              <Link
                href="/"
                className={router.pathname === "/" ? `${active}` : ""}
              >
                Home
              </Link>
              <Link
                href="/browse/my-list"
                className={
                  router.pathname === "/browse/my-list" ? `${active}` : ""
                }
              >
                My List
              </Link>
            </>
          )}
        </div>
        {loginNav() && (
          <div className={rightSide}>
            <div
              className={email}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className={user} title={loginEmail}>
                <User />
                <span> {`${loginEmail.slice(0, 10)}...`}</span>
              </div>
              <ChevronDown className={dropdown} />
            </div>
            {showDropdown && (
              <div className={listDropdown}>
                <button className={logout}>
                  <LogOut /> Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

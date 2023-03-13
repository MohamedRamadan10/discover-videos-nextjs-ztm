import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import Seo from "@/components/seo/seo";
import {
  login,
  form,
  heading,
  formControl,
  errorMsg,
} from "@/styles/login.module.scss";
import loginBg from "@/public/login-bg.jpg";
import Button from "@/components/button/button";
import { useRouter } from "next/router";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Login() {
  const router = useRouter();

  const [userEmail, setUserEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const [userLogin, setUserLogin] = useState("Login");

  const handleOnChangeEmail = (e) => {
    setUserMsg("");
    const email = e.target.value;
    setUserEmail(email);
  };

  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    if (userEmail === "mr.uiux.dev@gmail.com") {
      router.push("/");
      setUserLogin("Loading...");
    } else {
      setUserMsg("Please insert a valid email");
      setUserLogin("Login");
    }
  };
  return (
    <>
      <Seo title="Login" />
      <div className={login}>
        <Image
          src={loginBg}
          alt="login"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className={form}>
          <div className={`${heading} ${bebasNeue.className}`}>
            <h1>Sign In</h1>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className={formControl}
            placeholder="Email Address"
            onChange={handleOnChangeEmail}
          />
          {userMsg && <p className={errorMsg}>{userMsg}</p>}
          <Button
            btnText={userLogin && userLogin}
            className="mx-auto"
            submit
            onClick={handleLoginWithEmail}
          />
        </div>
      </div>
    </>
  );
}

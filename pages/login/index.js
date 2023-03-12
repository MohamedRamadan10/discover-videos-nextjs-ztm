import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import Seo from "@/components/seo/seo";
import { login, form, heading, formControl } from "@/styles/login.module.scss";
import loginBg from "@/public/login-bg.jpg";
import Button from "@/components/button/button";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Login() {
  const handleSignIn = (e) => {
    console.log("Sign In");
    e.preventDefault();
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
          />
          <Button
            btnText="Sign In"
            className="mx-auto"
            submit
            onClick={handleSignIn}
          />
        </div>
      </div>
    </>
  );
}

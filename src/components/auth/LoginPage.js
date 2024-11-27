import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/auth/loginThunk";
import { useNavigate } from "react-router-dom";
import { Button, Label, TextInput, DarkThemeToggle } from "flowbite-react";
import { useState } from "react";
import { MessageFailure } from "../sub_components/Messages";
import { RiErrorWarningLine } from "react-icons/ri";

export function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, loading } = useSelector((state) => state.auth);
  const [alertContent, setAlertContent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/home");
      })
      .catch((err) => {
        setTimeout(() => {
          setAlertContent(
            <MessageFailure
              message={err}
              icon={<RiErrorWarningLine className="size-5" />}
            />,
          );
        });
      }, 5000);
    setAlertContent(null);
  };

  return (
    <main
      className="min-h-screen gap-2 dark:bg-gray-800"
      style={{
        backgroundImage: "url('/images/zw_merch-variant.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          top: "0",
          right: "0",
          position: "fixed",
          display: "flex",
        }}
      >
        <DarkThemeToggle />
      </div>

      <div className="m-auto max-w-3xl p-5">
        <h3 className="mb-5 text-center text-lg font-bold text-white">
          Sign In To Your Account
        </h3>

        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-full flex-col gap-4 border-4 border-double border-green-200 bg-gray-600 p-5"
        >
          <div>
            <Label
              htmlFor="email2"
              className="text-gray-200"
              value="Your Email"
            />
            <TextInput
              id="email2"
              type="email"
              required
              shadow
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <Label
              htmlFor="password"
              className="text-gray-200"
              value="Your Password"
            />
            <TextInput
              id="password"
              type="password"
              required
              shadow
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" disabled={loading}>
            Submit
          </Button>
          {alertContent}
        </form>
        <Label className="mt-1 flex justify-end text-gray-200">
          Don't Have an active account?&nbsp;
          <a
            href="/signup"
            className="text-cyan-600 hover:underline dark:text-cyan-500"
          >
            Request For One.
          </a>
        </Label>
        <Label className="mt-1 flex justify-end text-gray-200">
          Back To&nbsp;
          <a
            href="/home"
            className="text-cyan-600 hover:underline dark:text-cyan-500"
          >
            Home
          </a>
        </Label>
      </div>
    </main>
  );
}

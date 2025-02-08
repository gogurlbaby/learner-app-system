import React from "react";
import * as Yup from "yup";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Mail, LockKeyhole } from "lucide-react";
import Button from "../../components/button/Button";
import CustomForm from "@/app/components/custom-form/CustomForm";

function Login({ handleLogin }) {
  const initialValues = { email: "", password: "" };

  const loginFormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please Email Address is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Please Password is required"),
  });

  const handleUserLogin = () => {
    const userData = { name: "John Doe" };
    handleLogin(userData);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const apiUrl =
      "https://tmp-se-project.azurewebsites.net/api/user/auth/signin";
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("Login error", error);
    } finally {
      setSubmitting(false);
    }
  };

  const fields = [
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      icon: Mail,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      icon: LockKeyhole,
    },
  ];

  return (
    <div>
      <CustomForm
        initialValues={initialValues}
        validationSchema={loginFormSchema}
        onSubmit={handleSubmit}
        fields={fields}
        showGoogleAuth={true}
        submitButton={(isSubmitting) => (
          <>
            <div className="mt-[1rem] mb-[1.5rem]">
              <a className="no-underline text-[#177ddc] text-base font-normal font-sans cursor-pointer">
                Forgot password ?
              </a>
            </div>
            <Button
              type="submit"
              Text="Login"
              Icon={<MdKeyboardArrowRight size={25} />}
              onClick={handleUserLogin}
              disabled={isSubmitting}
            />
          </>
        )}
      />
    </div>
  );
}

export default Login;

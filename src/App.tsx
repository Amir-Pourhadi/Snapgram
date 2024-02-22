import "@/style.css";
import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "@/auth/AuthLayout.tsx";
import { RootLayout } from "@/root/RootLayout.tsx";
import { Home } from "@/root/pages";
import { SignInForm, SignUpForm } from "@/auth/forms";

export const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/signIn" element={<SignInForm />} />
          <Route path="/signUp" element={<SignUpForm />} />
        </Route>
      </Routes>
    </main>
  );
};

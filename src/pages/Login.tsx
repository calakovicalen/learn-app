import LoginForm from "../components/LoginForm/LoginForm";

function Login() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h3 className="font-heading text-t8 font-bold text-neutral-900">
        Sign In
      </h3>
      <p className="font-heading text-t6 mb-7 text-neutral-600">Welcome back</p>
      <LoginForm />
    </main>
  );
}

export default Login;

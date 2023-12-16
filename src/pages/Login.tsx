import LoginForm from "../components/LoginForm/LoginForm";

function Login() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h3 className="font-montserrat text-2.5xl font-bold text-neutral-900">
        Sign In
      </h3>
      <p className="text-xl  mb-7 font-montserrat text-neutral-600">
        Welcome back
      </p>
      <LoginForm />
    </main>
  );
}

export default Login;

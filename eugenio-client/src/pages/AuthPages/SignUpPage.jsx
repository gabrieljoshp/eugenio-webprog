import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { createUser } from "../../services/UserService";

const inputClasses =
  "mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { data } = await createUser({
        firstName,
        lastName,
        email,
        password,
        username,
        age,
        gender,
        contactNumber,
        address,
      });
      console.log("Sign up successful:", data);

      localStorage.setItem("token", data.token);
      localStorage.setItem("firstName", data.user.firstName);
      localStorage.setItem("role", data.user.role);

      navigate("/dashboard", {
        state: { firstName: data.user.firstName, role: data.user.role },
      });
    } catch (err) {
      console.error(
        "Sign up failed:",
        err.response?.data?.message || err.message,
      );
      setError(
        err.response?.data?.message || "Sign up failed. Please try again.",
      );
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Sign Up
      </h1>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Create your account with the same monochrome layout pattern and shared
        button treatment.
      </p>

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700 border border-red-200">
          {error}
        </p>
      )}

      <form onSubmit={handleSignUp} className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="first-name"
            className="text-sm font-medium text-zinc-700"
          >
            First Name
          </label>
          <input
            id="first-name"
            type="text"
            placeholder="Juan"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="last-name"
            className="text-sm font-medium text-zinc-700"
          >
            Last Name
          </label>
          <input
            id="last-name"
            type="text"
            placeholder="Dela Cruz"
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="signup-email"
            className="text-sm font-medium text-zinc-700"
          >
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="juan.delacruz@students.national-u.edu.ph"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="signup-password"
            className="text-sm font-medium text-zinc-700"
          >
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-zinc-500">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <div>
          <label
            htmlFor="username"
            className="text-sm font-medium text-zinc-700"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="juan.delacruz"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={inputClasses}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="age" className="text-sm font-medium text-zinc-700">
              Age
            </label>
            <input
              id="age"
              type="number"
              placeholder="25"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label
              htmlFor="gender"
              className="text-sm font-medium text-zinc-700"
            >
              Gender
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              className={inputClasses}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="contactNumber"
            className="text-sm font-medium text-zinc-700"
          >
            Contact Number
          </label>
          <input
            id="contactNumber"
            type="tel"
            placeholder="09123456789"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="text-sm font-medium text-zinc-700"
          >
            Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="123 Street Name, City"
            autoComplete="street-address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className={inputClasses}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          className={actionButtonClassName}
        >
          Create Account
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Sign Up with Google
          </Button>
          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Sign Up with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        Already have an account?{" "}
        <Link
          to="/auth/signin"
          className="font-semibold text-zinc-900 transition hover:text-zinc-600"
        >
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;

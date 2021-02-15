import { useRef, useState } from "react";

import {
  LoadingSpinner,
  ErrorMessage,
  SuccessMessage,
} from "@/components/Commons";

export default function Newsletter() {
  const [form, setForm] = useState(false);
  const inputEl = useRef(null);

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: "loading" });

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: "error",
        message: error,
      });
      return;
    }

    inputEl.current.value = "";
    setForm({
      state: "success",
      message: `Hooray! You're now on the list.`,
    });
  };

  return (
    <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-yellow-600">
      <h5 className="text-lg md:text-xl font-bold">
        Subscribe to the newsletter
      </h5>
      <p className="my-1">
        Get emails from me about web development, tech, and early access to new
        articles.
      </p>
      <form className="relative my-4 mb-2" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="hi@whydn.dev"
          type="email"
          autoComplete="email"
          required
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 "
        />
        <button
          className="flex items-center justify-center absolute right-1 top-1 px-4 font-bold h-8 bg-gray-100 dark:bg-gray-700 rounded w-28"
          type="submit"
        >
          {form.state === "loading" ? <LoadingSpinner /> : "Subscribe"}
        </button>
      </form>
      {form.state === "error" ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === "success" ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-400 dark:text-gray-300">
          I hate spam, and respect for your privacy
        </p>
      )}
    </div>
  );
}

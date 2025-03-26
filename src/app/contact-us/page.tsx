"use client"

import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  const [state, submit, reset] = useForm('mrbpldye');

  if (state.submitting) {
    return <p>Submitting…</p>;
  }

  if (state.succeeded) {
    return (
      <div>
        <p>Thanks!</p>;<button onClick={reset}>Reset</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={submit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          defaultValue="test@example.com"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button type="submit">Sign up</button>

      </form>
    </div>
  );
}

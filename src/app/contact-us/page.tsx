'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { Container } from '@/components/Container';

export default function ContactPage() {
  const [state, submit, reset] = useForm('mrbpldye');

  if (state.submitting) {
    return <p>Submitting…</p>;
  }

  if (state.succeeded) {
    return (
      <div>
        <p>Thanks!</p>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }

  return (
    <div className="bg-repeat-x bg-[center_bottom] bg-blue_bottom pb-[200px] md:pb-[280px] pt-4 lg:pt-8 mb-[-2px]">
      <Container className="max-w-3xl mx-auto ">
        <Heading level="h1" underline className="!leading-[1.2] md:w-1/2">
          Contact us
        </Heading>
        <Paragraph className="mt-6 leading-[2]">Fill in this form and submit and we will be in touch!</Paragraph>

        <form onSubmit={submit}>
          <div>
            <label htmlFor="email">Name</label>
            <input id="name" type="text" name="name" defaultValue="Your name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" defaultValue="test@example.com" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit">Sign up</button>
        </form>
      </Container>
    </div>
  );
}

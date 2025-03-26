'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Paragraph } from '@/components/Paragraph';
import { Heading } from '@/components/Heading';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('mrbpldye');

  if (state.submitting) {
    return <Paragraph className="h-[500px] mt-10">Submitting your details…</Paragraph>;
  }

  if (state.succeeded) {
    return (
      <div className="h-[500px] mt-10">
        <Heading level="h2" className="mt-6">
          Thank you for getting in touch!
        </Heading>
        <Paragraph className="mt-6">We will be in touch soon.</Paragraph>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="h-min-[800px]">
      <Paragraph className="my-8 leading-[2]">Fill in this form and we will be in touch!</Paragraph>

      <ValidationError className="text-red-500 font-bold my-6" errors={state.errors} />

      <div className="text-lg mb-8">
        <label className="block mb-1" htmlFor="name">
          Name
        </label>
        <input
          className="border border-gray-400 h-10 bg-white focus:outline-yellow-500 px-3 w-full md:w-[500px]"
          id="name"
          type="text"
          name="name"
          defaultValue=""
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="text-lg mb-8">
        <label className="block mb-1" htmlFor="email">
          Email
        </label>
        <input
          className="border border-gray-400 h-10 bg-white focus:outline-yellow-500 px-3 w-full md:w-[500px]"
          id="email"
          type="email"
          name="email"
          defaultValue=""
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="text-lg mb-8">
        <label className="block mb-1" htmlFor="message">
          Message
        </label>
        <textarea className="border border-gray-400 h-40 bg-white focus:outline-yellow-500 px-3 w-full md:w-[500px]" required id="message" name="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        className="inline-block mt-4 hover:underline hover:underline-offset-4 p-2 md:px-4 md:py-3 text-white bg-blue-900 font-bold hover:bg-blue-800"
        type="submit"
      >
        Send your message
      </button>
    </form>
  );
};

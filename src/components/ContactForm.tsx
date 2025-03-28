'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Paragraph } from '@/components/Paragraph';
import { Heading } from '@/components/Heading';
import { Button, ButtonVariant } from '@/components/Button';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('mrbpldye');

  if (state.submitting) {
    return <Paragraph className="h-[500px] mt-10">Your message is on its way…</Paragraph>;
  }

  if (state.succeeded) {
    return (
      <div className="h-[500px] mt-10">
        <Heading level="h2" className="mt-6">
          Thanks for getting in touch!
        </Heading>
        <Paragraph className="mt-6">We will respond as soon as possible.</Paragraph>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="h-min-[800px]">
      <Paragraph className="my-8 leading-[2]">We try to respond to all enquiries within 48 hours.</Paragraph>

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
          placeholder="Your Name"
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
          placeholder="your.email@example.com"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="text-lg mb-8">
        <label className="block mb-1" htmlFor="message">
          Message
        </label>
        <textarea className="border border-gray-400 h-40 bg-white focus:outline-yellow-500 px-3 w-full md:w-[500px]" required id="message" name="message" placeholder="Say hi..."/>
        <ValidationError prefix="Message" field="message" errors={state.errors}/>
      </div>

      <Button variant={ButtonVariant.PRIMARY} type="submit">
        Send
      </Button>
    </form>
  );
};

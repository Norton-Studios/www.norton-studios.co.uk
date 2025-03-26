import { Heading } from '@/components/Heading';
import { Container } from '@/components/Container';
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-repeat-x bg-[center_bottom] bg-blue_bottom pb-[200px] md:pb-[280px] pt-4 lg:pt-8 mb-[-2px]">
      <Container className="max-w-3xl mx-auto h-min-800px">
        <Heading level="h1" underline className="!leading-[1.2] md:w-1/2">
          Contact us
        </Heading>

        <ContactForm />
      </Container>
    </div>
  );
}

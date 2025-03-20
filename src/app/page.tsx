import { Container } from '../components/Container';
import { Heading } from '../components/Heading';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-blue_bg bg-repeat-x bg-[center_bottom] pb-[180px] lg:pb-[300px] mb-[-2px]">
        <Container className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div>
            <Heading level="h1" className="text-center lg:text-left !leading-[1.2]">Provider of Digital Solutions for the Public Sector</Heading>
            <p className="text-lg text-center lg:text-left mt-8">
              Norton Studios is a trusted public sector delivery partner. We specialise in Government Digital Services across the UK, with a particular focus on Accessibility (WCAG 2.1/2.2) and Responsive Website design.
            </p>
          </div>
          <div className="flex align-middle">
            <Image
              className="mx-auto mt-8 lg:md-0 w-[60px] h-[60px] lg:w-[137px] lg:h-[138px]"
              src="/hero-logo.svg"
              alt="Norton Studios Logo"
              width={137}
              height={138}
            />
            </div>
        </Container>
      </div>
      <div className="bg-blue-900 py-[200px]">
        <Container>
          <Heading level="h2" className="text-white">Blue section</Heading>
        </Container>
      </div>
      <div className="bg-tan-500 py-[200px]">
        <Container>
          <Heading level="h2">Tan section</Heading>
        </Container>
      </div>
      <div className="bg-yellow-500 bg-tan_top bg-[center_top] py-[200px] bg-no-repeat">
        <Container>
          <Heading level="h2">Yellow section</Heading>
        </Container>
      </div>
    </>
  );
}

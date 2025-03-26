import { twMerge } from 'tailwind-merge';
import { Container } from '@/components/Container';

type MarkdownPageContainerProps = {
  children: React.ReactNode;
  classNames?: string;
};

export const MarkdownPageContainer = ({ children, classNames }: MarkdownPageContainerProps) => {
  return (
    <Container>
      <div className={twMerge('max-w-3xl mx-auto mb-10 lg:mb-20 pt-4 lg:pt-8', classNames)}>{children}</div>
    </Container>
  );
};

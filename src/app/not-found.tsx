import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] flex items-center">
      <Container className="text-center">
        <h1 className="text-6xl sm:text-8xl text-brown/20 mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl mb-4">Page not found</h2>
        <p className="text-charcoal-light mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button href="/">Return Home</Button>
      </Container>
    </Section>
  );
}

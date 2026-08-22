
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home } from 'lucide-react';

export const metadata: Metadata = {
  title: '404: Page Not Found',
};

const funnyMessages = [
    "Looks like you've discovered a black hole in our digital universe.",
    "Are you lost, or just exploring the void?",
    "This page went on a vacation. It forgot to leave a forwarding address.",
    "We searched high and low, but this page is nowhere to be found.",
    "Oops! This is not the page you are looking for.",
    "Even the best explorers get lost sometimes. Time to head back.",
    "This page must be in another castle.",
    "Error 404: Page not found. But our spirit of innovation is.",
    "You've reached the edge of our digital map. Here be dragons.",
    "The page you're looking for has been abducted by aliens.",
    "It seems this page has ceased to exist. Or maybe it never did.",
    "Houston, we have a problem. This page is lost in space.",
    "This link is as broken as my last diet.",
    "I have a bad feeling about this link.",
    "Great Scott! It seems we've traveled to a timeline where this page doesn't exist.",
    "This is not the webpage you are looking for. *waves hand*",
    "You took a wrong turn at Albuquerque.",
    "The page is a lie.",
    "This page has been sent to the digital farm upstate.",
    "404: Not Found. But hey, at least our server is up!",
    "Congratulations, you found a page that doesn't exist. Your prize is this message.",
    "If pages had feelings, this one would be very, very lost.",
    "We could not find the page. We have dispatched a search party.",
    "The hamsters that power our servers seem to have misplaced this page.",
    "Error 404: Sarcasm module not found.",
    "This page has been retired and is now living on a beach somewhere.",
    "You have entered a dimension of sight, sound, and a missing webpage.",
    "The content you seek has been... misplaced. We're blaming the intern.",
    "We're sorry, this page is currently in a meeting.",
    "Error 404: Brain not found. Just kidding, it's the page.",
    "This page has gone rogue. We're negotiating its return."
];

export default function NotFound() {
  const message = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-theme(spacing.48))] text-center px-6 py-12">
        <div className="max-w-md">
            <div className="relative inline-block">
                <h1 className="text-8xl md:text-9xl font-bold font-headline text-primary">404</h1>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                    <div className="h-40 w-40 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
                </div>
            </div>
          <h2 className="mt-6 text-2xl md:text-3xl font-semibold">Page Not Found</h2>
          <p className="mt-4 text-muted-foreground">
            {message}
          </p>
          <Button asChild className="mt-8">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Return to Homepage
            </Link>
          </Button>
        </div>
    </div>
  );
}

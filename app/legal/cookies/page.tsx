
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: 'Cookie Policy',
};

export default function CookiesPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-12">
          <h1 className="text-3xl font-bold tracking-tight font-headline">Cookie Policy</h1>
          <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <Card>
          <CardContent className="space-y-6 pt-6 text-muted-foreground">
            <p>
             This Cookie Policy explains what cookies are and how we use them. You should read this policy to understand what cookies are, how we use them, the types of cookies we use, the information we collect using cookies and how that information is used, and how to control the cookie preferences.
            </p>
            
            <div className="space-y-2">
              <h2 className="font-semibold text-foreground text-xl pt-4">1. What are cookies?</h2>
              <p>
                Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide a better user experience, and understand how the website performs.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold text-foreground text-xl pt-4">2. How do we use cookies?</h2>
              <p>
                As with most online services, our website uses first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.
              </p>
               <p>
                The third-party cookies used on our websites are used mainly for understanding how the website performs, how you interact with our website, keeping our services secure, and all in all providing you with a better and improved user experience.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold text-foreground text-xl pt-4">3. Types of Cookies We Use</h2>
              <p>
                <strong>Essential:</strong> Some cookies are essential for you to be able to experience the full functionality of our site. They allow us to maintain user sessions and prevent any security threats. They do not collect or store any personal information.
              </p>
               <p>
                <strong>Preferences:</strong> These cookies help us store your settings and browsing preferences like language preferences so that you have a better and efficient experience on future visits to the website.
              </p>
            </div>

             <div className="space-y-2">
                <h2 className="font-semibold text-foreground text-xl pt-4">4. How can I control the cookie preferences?</h2>
                <p>
                    You can manage your cookies preferences by clicking on the "Settings" button and enabling or disabling the cookie categories on the popup according to your preferences. Should you decide to change your preferences later through your browsing session, you can change your browser settings to block/delete the cookies.
                </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

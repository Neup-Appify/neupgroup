
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-12">
          <h1 className="text-3xl font-bold tracking-tight font-headline">Privacy Policy</h1>
          <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <Card>
          <CardContent className="space-y-6 pt-6 text-muted-foreground">
            <p>
              Your privacy is important to us. It is Neup Group's policy to respect your privacy regarding any information we may collect from you across our website and other sites we own and operate.
            </p>
            
            <div className="space-y-2">
              <h2 className="font-semibold text-foreground text-xl pt-4">1. Information We Collect</h2>
              <p>
                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
              </p>
               <p>
                We may collect log data, device information, and information you provide directly, such as your name and email address when you contact us.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold text-foreground text-xl pt-4">2. How We Use Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Neup Group and our users. We do not share any personally identifying information publicly or with third-parties, except when required to by law.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold text-foreground text-xl pt-4">3. Security</h2>
              <p>
                We are committed to protecting the security of your personal information. We use a variety of security technologies and procedures to help protect your personal information from unauthorized access, use, or disclosure.
              </p>
            </div>

             <div className="space-y-2">
                <h2 className="font-semibold text-foreground text-xl pt-4">4. Your Rights</h2>
                <p>
                    You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. You have the right to access, update, or delete your personal information by contacting us.
                </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

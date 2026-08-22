
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: 'Terms of Service',
};

export default function TermsPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-12">
          <h1 className="text-3xl font-bold tracking-tight font-headline">Terms of Service</h1>
          <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <Card>
          <CardContent className="space-y-6 pt-6 text-muted-foreground">
            <p>
              Welcome to Neup Group. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
            
            <div className="space-y-2">
              <h2 className="font-semibold text-foreground text-xl pt-4">1. Use of Our Services</h2>
              <p>
                You may use our services only as permitted by law. We may suspend or stop providing our services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold text-foreground text-xl pt-4">2. Intellectual Property</h2>
              <p>
                All content, trademarks, and data on this site, including software, databases, text, graphics, icons, and hyperlinks, are the property of or licensed to Neup Group and as such are protected from infringement by local and international legislation and treaties.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold text-foreground text-xl pt-4">3. Limitation of Liability</h2>
              <p>
                Neup Group will not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use our services. Our liability is limited to the maximum extent permitted by law.
              </p>
            </div>

             <div className="space-y-2">
                <h2 className="font-semibold text-foreground text-xl pt-4">4. Governing Law</h2>
                <p>
                    These terms and conditions are governed by and construed in accordance with the laws of Nepal and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

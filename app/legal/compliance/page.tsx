
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compliance Information',
};

const companyDetails = [
    { label: "Company Name", value: "Neup Group Private Limited" },
    { label: "Company Registration Number", value: "334689/80/081" },
    { label: "PAN Number", value: "621121607" },
    { label: "D-U-N-S® Number", value: "Coming Soon" },
];

const legalDocuments = [
    { name: "Company Registration Certificate", href: "/documents/company-registration.pdf" },
    { name: "PAN/VAT Certificate", href: "/documents/pan-vat-certificate.pdf" },
];


export default function CompliancePage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-12">
          <h1 className="text-3xl font-bold tracking-tight font-headline">Compliance & Company Information</h1>
          <p className="text-muted-foreground">Official information and legal documents for Neup Group Private Limited.</p>
        </div>

        <div className="space-y-12">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Company Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {companyDetails.map(detail => (
                            <li key={detail.label} className="flex flex-col sm:flex-row sm:justify-between border-b pb-3">
                                <span className="font-medium text-muted-foreground">{detail.label}</span>
                                <span className="font-semibold text-foreground">{detail.value}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Legal Documents</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-4">
                    {legalDocuments.map(doc => (
                        <a href={doc.href} key={doc.name} target="_blank" rel="noopener noreferrer">
                             <Button variant="outline" className="w-full justify-between h-12">
                                {doc.name}
                                <Download className="h-4 w-4" />
                            </Button>
                        </a>
                    ))}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}

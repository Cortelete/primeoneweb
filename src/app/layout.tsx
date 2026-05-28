import type { Metadata, Viewport } from "next";
import "../index.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Prime One Consulting | Premier Dealership Detailing Services",
  description: "Prime One Consulting provides managed detail department solutions for franchise dealerships. We offer expert staffing, daily operations management, lot refreshes, PDI, and clean-for-delivery services.",
  keywords: "dealership detailing, managed detail department, car dealership cleaning, PDI cleaning, lot refreshes, automotive detail staffing, Prime One Consulting",
  authors: [{ name: "Prime One Consulting" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.primeoneinc.com",
  },
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Prime One Consulting | Premier Dealership Detailing Services",
    description: "The best partnership for your dealership. We manage your detail department with trained staffing, daily operations, and quality control.",
    url: "https://www.primeoneinc.com",
    siteName: "Prime One Consulting",
    images: [{ url: "/og.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime One Consulting | Dealership Detailing Services",
    description: "The best partnership for your dealership. We manage your detail department with trained staffing and quality control.",
    images: ["/og.png"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Prime One Consulting",
  "url": "https://www.primeoneinc.com",
  "logo": "https://www.primeoneinc.com/logo.png",
  "description": "Prime One Consulting provides managed detail department solutions for franchise dealerships.",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@primeoneinc.com",
    "contactType": "customer service"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

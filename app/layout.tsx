import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormFiller Dev — Auto-fill forms with realistic test data",
  description: "Browser extension that detects form fields and fills them with contextually appropriate test data for rapid testing. Built for frontend devs and QA engineers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f25764a8-6294-49bb-8595-715ce1984d70"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

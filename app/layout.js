import Head from "next/head";
import "./_assets/css/global.css";

export const metadata = {
  title: "React / Next.js Components Library - Reusable UI Snippets for Modern Web Apps",
  description: "A growing open-source library of clean, reusable React and Next.js UI components. Copy, paste, and build faster. Contribute your own and help the dev community grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "POST It Nepal",
  description: "Post it nepal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        {children}
      </body>
    </html>
  );
}

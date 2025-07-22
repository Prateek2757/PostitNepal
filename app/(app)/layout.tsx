import { type Metadata } from "next";
import {
  ClerkProvider,

} from "@clerk/nextjs";

import "../globals.css";
import Header from "@/components/header/header";
import {
  
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SanityLive } from "@/sanity/lib/live";


export const metadata: Metadata = {
  title: "POST It Nepal",
  
  icons: {
    icon: { url: "/assets/post.png", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={``}
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <Header />
              <div className="flex flex-col">{children}</div>
            </SidebarInset>
          </SidebarProvider>
          <SanityLive/>
        </body>
      </html>
    </ClerkProvider>
  );
}

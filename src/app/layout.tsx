import "@/styles/globals.css";
import { FunctionComponent, ReactNode } from "react";
import { Metadata } from "next";
import { Wrapper } from "@/components";
import { cn } from "@/utils/cn";
import { inter } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "React Server Component - Fetching",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-bg-primary text-text-primary antialiased",
          `${inter.variable} font-body`
        )}
      >
        <main>
          <Wrapper>{children}</Wrapper>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

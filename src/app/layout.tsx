import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import prisma from "@/lib/prisma";

export const metadata: Metadata = {
  title: 'Finance Next.js App',
  description: 'A full-stack app with Next.js, Prisma, and PostgreSQL',
};

async function checkDbConnection() {
  try {
    await prisma.$connect()
    console.log('Database connected successfully')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  } finally {
    await prisma.$disconnect()
  }
}
checkDbConnection()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen">
            <main className="flex-1 p-4">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

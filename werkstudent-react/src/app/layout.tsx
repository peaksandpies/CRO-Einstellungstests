import type { Metadata } from "next";

import "./globals.css";
import styles from "./layout.module.css";
import { akkuratLl, goudyOldStyle, recklessNeue } from "@/styles/fonts";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Peaks & Pies | Bewerber Check",
  description: "Prüfe, ob der Bewerber zur Stellenanzeige passt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ background: "#fff" }}
        className={`${akkuratLl.variable} ${goudyOldStyle.variable} ${recklessNeue.variable}`}
      >
        <header className={styles.header}>
          <div className={styles.container}>
            <Link className={styles.brand} href="/">
              <Image
                className={styles.logo}
                alt="Peaks & Pies Logo"
                title="Peaks & Pies Logo"
                src="/logo.svg"
                width={140}
                height={25}
                priority
              />
            </Link>
          </div>
        </header>

        {children}
        {/* TODO: footer  */}
      </body>
    </html>
  );
}

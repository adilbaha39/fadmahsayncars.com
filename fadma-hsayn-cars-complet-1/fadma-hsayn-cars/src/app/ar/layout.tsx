import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://fadmahsayncars.com"),
};

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="ar" dir="rtl" className="min-h-screen">
      {children}
    </div>
  );
}

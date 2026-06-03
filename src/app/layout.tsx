import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Expancoov group",
  description: "総合開発・コミュニティプラットフォーム",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-900 antialiased font-sans">
        {/* 固定ヘッダー */}
        <nav className="border-b border-gray-100 bg-white/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="text-lg font-black tracking-widest uppercase">
              Expancoov <span className="text-blue-600">group</span>
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

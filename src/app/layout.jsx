import "./globals.css";

export const metadata = {
  title: "Sellout Crowds | The Ultimate Sports Hub",
  description: "Forget algorithms feeding you rage bait. Your FanFeed will only show the leagues, teams, and creators that you follow. Period.",
};

export default function RootLayout({ children }) {
  // suppressHydrationWarning added to html tag to prevent browser extension crashes
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
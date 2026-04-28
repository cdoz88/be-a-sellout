import './globals.css';

export const metadata = {
  title: 'Sellout Crowds | For Creators',
  description: 'Give your fans exclusive access, simplify how they connect with you, and enjoy tools designed specifically for your success.',
  icons: {
    icon: 'https://admin.beasellout.com/wp-content/uploads/2025/04/cropped-Icon.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0a0a0a] text-white selection:bg-[#a3e635] selection:text-black">
        {children}
      </body>
    </html>
  );
}
export const metadata = {
  title: "Ultimate Gaming Blog",
  description: "Gaming news, esports and pro strategies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {children}

      </body>
    </html>
  );
}
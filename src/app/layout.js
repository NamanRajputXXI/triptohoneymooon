import "../styles/globals.css";

export const metadata = {
  title: "Trip to Honeymoon",
  description: "Best Honeymoon trip Planner Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

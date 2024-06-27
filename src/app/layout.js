import NextTopLoader from "nextjs-toploader";
import "../styles/globals.css";

export const metadata = {
  title: "Trip to Honeymoon",
  description: "Best Honeymoon trip Planner Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <NextTopLoader
          color="#2a3788"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        {children}
      </body>
    </html>
  );
}

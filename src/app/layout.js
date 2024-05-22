import NextTopLoader from "nextjs-toploader";
import "../styles/globals.css";

export const metadata = {
  title: "Trip to Honeymoon",
  description: "Best Honeymoon trip Planner Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-red-100 font-Merriweather">
        <NextTopLoader
          color="#3b2e5ff"
          initialPosition={0.08}
          crawlSpeed={200}
          height={7}
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

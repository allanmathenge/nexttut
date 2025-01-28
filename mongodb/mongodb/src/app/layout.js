import "./globals.css";

export const metadata = {
  title: "Mongodb project",
  description: "Series of learning apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-slate-400`}
      >
        {children}
      </body>
    </html>
  );
}

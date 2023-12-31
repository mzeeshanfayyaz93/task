import "./globals.css";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Fjalla_One } from "next/font/google";
const fjallaOne = Fjalla_One({
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={fjallaOne.className}>
      
      {children}
      </body>
    </html>
  );
}
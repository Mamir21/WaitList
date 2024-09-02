import Theming from "@/Theme/Theming";
import Headpage from "./Header/page";
import "./globals.css";

export const metadata = {
  title: "Costivity Waitlist",
  description: "A waitlist for Costivity - a platform for managing your expenses.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theming>
          <Headpage />
          <main>{children}</main>
        </Theming>
      </body>
    </html>
  )
}
import Providers from "@/redux/Providers";
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

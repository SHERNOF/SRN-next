import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from '@/components/Header';

// metadata
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrainsMono",
  });
  
  export const metadata = {
    title: "Sherwin Nofuente",
    description: "Sherwin Nofuente's Profile",
  };

const layout = ({children}) => {
  return (
    <html lang='en'>
        <body className={jetbrainsMono.variable}>
            <Header />
        </body>
    </html>
  )
}

export default layout
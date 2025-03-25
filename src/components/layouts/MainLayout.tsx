import NavBar from "@/components/navBar/NavBar";
import MainSearch from "@/components/mainSearch/MainSearch";


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html>
    <body>
    <NavBar />
    <MainSearch />
    {children}
    </body>
    </html>
  );
}
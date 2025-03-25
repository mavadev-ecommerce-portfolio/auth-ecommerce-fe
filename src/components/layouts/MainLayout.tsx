import NavBar from "@/components/navBar/NavBar";
import MainSearch from "@/components/mainSearch/MainSearch";
import CartBar from "@/components/cartBar/CartBar";


export default function MainLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html>
        <body>
        <NavBar/>
        <div className={'m-[3%]'}>
            <MainSearch/>
            <CartBar/>
            {children}
        </div>
        </body>
        </html>
    );
}
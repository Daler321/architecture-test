import HomeNavigation from "@/components/home-navigation";
import HomeHeader from "@/components/home-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HomeHeader />
      <HomeNavigation />
      {children}
    </>
  );
}

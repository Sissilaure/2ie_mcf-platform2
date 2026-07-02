import SiteNavbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteNavbar />
      <main className="flex-1 pt-[67px]">{children}</main>
      <Footer />
    </div>
  );
}

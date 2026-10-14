import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactDetails from "@/components/ContactDetails";

/**
 * Project case studies share the homepage navigation and footer. Section
 * anchors are prefixed with "/" so they return to the homepage. The top
 * padding clears the fixed navbar, and the scroll margin keeps the skip-link
 * target below it.
 */
export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar hrefPrefix="/" />

      <div className="pt-20 [&>main]:scroll-mt-20">{children}</div>

      <Footer hrefPrefix="/">
        <div className="mx-auto mb-12 max-w-6xl border-b border-white/10 pb-12 text-center md:text-left">
          <ContactDetails linkEmail />
        </div>
      </Footer>
    </>
  );
}

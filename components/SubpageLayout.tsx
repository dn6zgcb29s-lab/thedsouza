import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactDetails from "@/components/ContactDetails";

type SubpageLayoutProps = {
  children: React.ReactNode;
  /**
   * Add top padding so content clears the fixed navbar. Turn off for pages
   * whose hero already reserves that space.
   */
  offsetForNav?: boolean;
};

/**
 * Pages outside the homepage share its navigation and footer. Section
 * anchors are prefixed with "/" so they return to the homepage, and the
 * scroll margin keeps the skip-link target below the fixed navbar.
 */
export default function SubpageLayout({
  children,
  offsetForNav = true,
}: SubpageLayoutProps) {
  return (
    <>
      <Navbar hrefPrefix="/" />

      <div
        className={`flex-1 ${offsetForNav ? "pt-20 " : ""}[&>main]:scroll-mt-20`}
      >
        {children}
      </div>

      <Footer hrefPrefix="/">
        <div className="mx-auto mb-12 max-w-6xl border-b border-white/10 pb-12 text-center md:text-left">
          <ContactDetails linkEmail />
        </div>
      </Footer>
    </>
  );
}

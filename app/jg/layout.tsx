import SubpageLayout from "@/components/SubpageLayout";

/**
 * The JG page shares the homepage navigation and footer. Its hero already
 * reserves space for the fixed navbar, so no extra top offset is added.
 */
export default function JgLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SubpageLayout offsetForNav={false}>{children}</SubpageLayout>;
}

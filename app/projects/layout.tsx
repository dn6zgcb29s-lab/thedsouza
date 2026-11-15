import SubpageLayout from "@/components/SubpageLayout";

/** Project case studies share the homepage navigation and footer. */
export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SubpageLayout>{children}</SubpageLayout>;
}

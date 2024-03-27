import Sidebar from "../ui/layout/sidebar";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[3.5rem,1fr] min-h-screen antialiased bg-background text-text">
      <Sidebar />

      <div>{children}</div>
    </div>
  ); // Try main instead of div
}

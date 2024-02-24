import Sidebar from "@/components/private/Sidebar";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className="bg-base"
        style={{
          display: "grid",
          gridTemplateColumns: `3rem 1fr`,
          minHeight: "100vh",
          gridTemplateAreas: `
              "sidebar content"
              `,
        }}
      >
        <div className="bg-base" style={{ gridArea: "sidebar" }}>
          <Sidebar />
        </div>
        <div className="bg-base" style={{ gridArea: "content" }}>
          {children}
        </div>
      </div>
    </>
  ); // Try main instead of div
}

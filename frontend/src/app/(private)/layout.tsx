import Sidebar from "@/components/private/Sidebar";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `4rem 1fr`,
          minHeight: "100vh",
          gridTemplateAreas: `
              "sidebar content"
              `,
        }}
      >
        <div style={{ gridArea: "sidebar" }}>
          <Sidebar />
        </div>
        <div style={{ gridArea: "content" }}>{children}</div>
      </div>
    </>
  ); // Try main instead of div
}

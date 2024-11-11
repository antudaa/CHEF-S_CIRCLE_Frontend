import Sidebar from "@/components/Global/SideBar";
import { Providers } from "@/lib/Providers";
// import { AdminLayoutWrapper } from "./adminLayoutWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="flex gap-6">
            {/* <AdminLayoutWrapper sidebar={<Sidebar />}> */}
            <Sidebar />
              {children}
            {/* </AdminLayoutWrapper> */}
          </main>
        </Providers>
      </body>
    </html>
  );
}
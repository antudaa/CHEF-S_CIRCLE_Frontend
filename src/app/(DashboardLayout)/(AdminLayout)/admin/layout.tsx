import Sidebar from "@/components/Global/SideBar";
import { Providers } from "@/lib/Providers";

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
            <Sidebar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
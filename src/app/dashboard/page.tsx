import { SidebarLayout } from "@/components/layout/sidebar-layout";
import Bar from "@/components/bar/Bar";

export default function DashboardPage() {
  return (
    <SidebarLayout>
      <div>
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4">
            <Bar />
          </div>
          <div className="p-4">
            <Bar />
          </div>
          <div className="p-4">
            <Bar />
          </div>
          <div className="p-4">
            <Bar />
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
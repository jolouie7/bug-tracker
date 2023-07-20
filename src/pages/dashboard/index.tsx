import SidebarWithHeader from "@/components/SidebarWithHeader/SidebarWithHeader";
import Bar from "../../components/Bar";

export default function Dashboard() {
  return (
    <>
      <SidebarWithHeader>
        <h1>Hello, SidebarWithHeader!</h1>
        <Bar />;
      </SidebarWithHeader>
    </>
  );
}

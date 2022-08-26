import Image from "next/image";
import { Logo } from "public/icons";
import { ReactNode } from "react";
import ContentLayout from "../../layout/ContentLayout";

export default function Dashboard() {
  return (
    <div>
      <Image src={Logo} alt="" height={100} width={100} />
      <h1>Dashboard</h1>
    </div>
  );
}
Dashboard.getLayout = function getLayout(page: ReactNode) {
  return <ContentLayout title="Dashboard">{page}</ContentLayout>;
};
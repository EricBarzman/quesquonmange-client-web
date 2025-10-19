import { getUser } from "@/hooks/auth.hooks";
import Homepage from "@/components/homepage/Homepage";
import { redirect } from "next/navigation";

export default async function Home() {

  const user = await getUser();
  if (!user || user === undefined) redirect('auth/login');

  return (
    <Homepage />
  );
}

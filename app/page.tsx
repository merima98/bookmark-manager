import GuestUser from "@/components/guest-user";
import LoggedInUser from "@/components/logged-in-user";

import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return <>{!user ? <GuestUser /> : <LoggedInUser />}</>;
}

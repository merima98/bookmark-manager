import { useState } from "react";
import { Session } from "@supabase/supabase-js";

import { supabase } from "./supabaseClient";

export const useIsUserAuthenticated = () => {
  const [session, setSession] = useState<Session | null>(null);

  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    setSession(session);
  });

  return {
    isAuthenticated: session ? true : false,
  };
};

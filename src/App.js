import React from "react";
import { supabase } from "./supabaseClient";
export default function App() {
  const login = async () => {
    await supabase.auth.signIn({ provider: "github" });
  };

  return (
    <div>
      <button onClick={login}>Login with github</button>
    </div>
  );
}

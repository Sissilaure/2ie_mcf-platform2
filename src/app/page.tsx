import { redirect } from "next/navigation";

// Root redirect — the main site lives in (main)/page.tsx
export default function RootPage() {
  redirect("/");
}

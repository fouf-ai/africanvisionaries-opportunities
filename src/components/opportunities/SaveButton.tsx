"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Bookmark } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function SaveButton({ opportunityId }: { opportunityId: string }) {
  const { data: session } = useSession();
  const router = useRouter();
  const params = useParams<{ lang?: string }>();
  const lang = params?.lang || "fr";
  const [saved, setSaved] = useState(false);

  const toggleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (!session) {
      router.push(`/${lang}/login`);
      return;
    }

    setSaved((currentSaved) => !currentSaved);
  };

  return (
    <button
      type="button"
      onClick={toggleSave}
      title={saved ? "Retirer des favoris" : "Sauvegarder cette opportunité"}
      aria-label={saved ? "Retirer des favoris" : "Sauvegarder cette opportunité"}
      data-opportunity-id={opportunityId}
      className={`p-2 rounded-xl border transition-all duration-200 ${
        saved
          ? "bg-teal-50 border-teal-200 text-teal-700"
          : "bg-white/80 border-slate-200 text-slate-400 hover:text-blue-900 hover:border-slate-300"
      }`}
    >
      <Bookmark className={`w-4 h-4 ${saved ? "fill-teal-600 text-teal-600" : ""}`} />
    </button>
  );
}

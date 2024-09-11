"use client";

import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="prose-body pb-[3.5rem] pt-[4.75rem] opacity-50 hover:underline"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
};

"use client";

import { getCategory } from "@/services";
import { useQuery } from "@tanstack/react-query";

export default function Category({
  params,
}: {
  params: { navigation: string };
}) {
  const { data, isFetched, isLoading } = useQuery({
    queryKey: ["category-item", params.navigation],
    queryFn: () => getCategory(params.navigation),
  });

  console.log(data);

  return <h1>{params.navigation}</h1>;
}

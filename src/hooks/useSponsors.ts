import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Sponsor {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export const useSponsors = () => {
  return useQuery({
    queryKey: ["sponsors"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("sponsors")
        .select("*")
        .order("display_order", { ascending: true });

      if (error) throw error;
      return data as Sponsor[];
    },
  });
};

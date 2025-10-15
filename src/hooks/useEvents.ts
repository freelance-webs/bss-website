import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Event {
  id: string;
  title: string;
  speaker: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string | null;
  is_past: boolean;
}

export const useEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: false });

      if (error) throw error;
      return data as Event[];
    },
  });
};

export const useUpcomingEvents = () => {
  return useQuery({
    queryKey: ["upcomingEvents"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("is_past", false)
        .order("date", { ascending: true });

      if (error) throw error;
      return data as Event[];
    },
  });
};

export const usePastEvents = () => {
  return useQuery({
    queryKey: ["pastEvents"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("is_past", true)
        .order("date", { ascending: false });

      if (error) throw error;
      return data as Event[];
    },
  });
};

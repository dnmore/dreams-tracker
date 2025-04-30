import { create } from "zustand";

export interface Dream {
  _id: string;
  title: string;
  description: string;
  mood: string;
  people: string;
  place: string;
  object: string;
}

interface DreamState {
  dreams: Dream[];
  loading: boolean;
  error: string | null;
  setDreams: (dreams: Dream[]) => void;
  createDream: (
    newDream: Omit<Dream, "_id">
  ) => Promise<{ success: boolean; message: string }>;
  fetchDreams: () => Promise<void>;
  deleteDream(pid: string): Promise<{ success: boolean; message: string }>;
  updateDream(
    pid: string,
    updatedDream: Dream
  ): Promise<{ success: boolean; message: string }>;
}

export const useDreamStore = create<DreamState>()((set) => ({
  dreams: [],
  loading: false,
  error: null,
  
  setDreams: (dreams) => set({ dreams }),
  createDream: async (newDream) => {
    if (Object.values(newDream).some((value) => value === "")) {
      return { success: false, message: "Please fill in all fields." };
    }

    try {
      const response = await fetch("/api/dreams", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDream),
      });
      const data = await response.json();
      if (!response.ok || !data.success)
        return {
          success: false,
          message: data.message || "Failed to create dream",
        };
      set((state) => ({ dreams: [...state.dreams, data.data] }));
      return { success: true, message: "Dream created successfully" };
    } catch (error) {
      return { success: false, message: "Error while creating dream" };
    }
  },
  fetchDreams: async () => {
    set({ loading: true, error: null });

    try {
      const response = await fetch("/api/dreams");
      const data = await response.json();
      if (!response.ok || !data.success)
        throw new Error(data.message || "Failed to fetch dreams");
      set({ dreams: data.data, loading: false });
    } catch (error) {
      console.error("Fetch dreams error", error);
      set({ loading: false, error: 'Failed to fetch dreams' });
    }
  },
  deleteDream: async (pid) => {
    try {
      const response = await fetch(`/api/dreams/${pid}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (!response.ok || !data.success)
        return {
          success: false,
          message: data.message || "Failed to delete dream",
        };
      set((state) => ({
        dreams: state.dreams.filter((dream) => dream._id !== pid),
      }));
      return { success: true, message: data.message };
    } catch (error) {
      return { success: false, message: "Error while deleting dream" };
    }
  },
  updateDream: async (pid, updatedDream) => {
    if (Object.values(updatedDream).some((value) => value === "")) {
      return { success: false, message: "Please fill in all fields." };
    }

    try {
      const response = await fetch(`/api/dreams/${pid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedDream),
      });
      const data = await response.json();
      if (!response.ok || !data.success) return { success: false, message: data.message };

      set((state) => ({
        dreams: state.dreams.map((dream) =>
          dream._id === pid ? data.data : dream
        ),
      }));

      return { success: true, message: data.message };
    } catch (error) {
      return { success: false, message: "Error while updating the dream" };
    }
  },
}));

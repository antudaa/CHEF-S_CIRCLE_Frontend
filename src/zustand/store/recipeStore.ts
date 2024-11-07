import { TRecipe } from '@/types';
import { create } from 'zustand';

interface RecipeState {
  data: TRecipe[];
  setData: (data: TRecipe[]) => void;
  removeRecipe: (id: string) => void;
  unpublishRecipeState: (id: string) => void;
  publishRecipeState: (id: string) => void;
}

export const useRecipeStore = create<RecipeState>((set) => ({
  data: [],
  setData: (data) => set({ data }),
  removeRecipe: (id) =>
    set((state) => ({
      data: state.data.filter((recipe) => recipe._id !== id),
    })),
  unpublishRecipeState: (id) =>
    set((state) => ({
      data: state.data.map((recipe) =>
        recipe._id === id ? { ...recipe, publishStatus: 'unpublish' } : recipe
      ),
    })),
  publishRecipeState: (id) =>
    set((state) => ({
      data: state.data.map((recipe) =>
        recipe._id === id ? { ...recipe, publishStatus: 'publish' } : recipe
      ),
    })),
}));

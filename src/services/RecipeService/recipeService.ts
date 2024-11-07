import { TError } from '@/types';
import { message } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = process.env.NEXT_PUBLIC_BASE_API;

const token = Cookies.get('accessToken');

export const fetchRecipes = async ({ queryKey }: { queryKey: [string, string] }) => {
  const query = queryKey[0];
  const response = await axios.get(`${baseURL}/recipe?${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data.recipes;
};

export const publishRecipe = async (recipeId: string) => {
  try {
    const response = await axios.patch(
      `${baseURL}/recipe/publish/${recipeId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (err: unknown) {
    if (err && typeof err === 'object' && 'data' in err) {
      const error = err as TError;
      message.error(`${error?.data?.message} Check slot availability.` || 'Failed to publish the recipe');
    } else {
      message.error('An unknown error occurred.');
    }
  }
};

export const unPublishRecipe = async (recipeId: string) => {
  try {
    const response = await axios.patch(
      `${baseURL}/recipe/unpublish/${recipeId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (err: unknown) {
    if (err && typeof err === 'object' && 'data' in err) {
      const error = err as TError;
      message.error(`${error?.data?.message} Check slot availability.` || 'Failed to unpublish the recipe!');
    } else {
      message.error('An unknown error occurred.');
    }
  }
};

export const deleteRecipe = async (id: string) => {
  try {
    const response = await axios.delete(`${baseURL}/recipe/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Return the response to allow status handling
    return response.data;
  } catch (err: unknown) {
    if (err && typeof err === 'object' && 'data' in err) {
      const error = err as TError;
      message.error(`${error?.data?.message} Check slot availability.` || 'Failed to delete the reicipe!');
    } else {
      message.error('An unknown error occurred.');
    }
  }
};
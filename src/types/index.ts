export type TDecodedAccessToken = {
  exp: number;
  iat: number;
  role: string;
  userEmail: string;
  userId: string;
}


export interface IUser {
  _id: string;
  name: string;
  role: string;
  email: string;
  status: string;
  profileImage: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface ILogin {
  email: string;
  password: string;
}

export type ErrorSource = {
  message: string;
  code?: string;
  details?: string;
};


export type TError = {
  data?: {
    errorSources?: ErrorSource[];
    success?: boolean;
    message: string;
  };
  message?: string;
  status: number;
};

export interface IError {
  status?: number;
  message?: string;
}

export type PurchaseResponse = {
  data?: {
    payment_url: string;
  };
  success: boolean;
  message?: string;
};

export interface PremiumAccessState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  purchasePremiumAccess: (startDate: Date, endDate: Date, pricePerMonth: number) => Promise<PurchaseResponse>;
}


// Base User Interface
export interface IBaseUser {
  id: string;
  name: string;
  email: string;
  password: string;
  profileImage?: string;
  role: 'user' | 'admin';
  status: 'active' | 'deactivated' | 'suspended' | 'blocked';
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// TUser Interface, extending IBaseUser
export type TUser = IBaseUser & {
  _id?: string;
  profileImage: string;
  isPremium: boolean;
  followers: string[];
  following: string[];
  bio?: string;
  memberShipExpiration?: Date;
  favouriteRecipeList: string[];
  socialLinks?: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
  notificationPreferences?: {
    emailNotifications: boolean;
    pushNotifications: boolean;
  };
  recipeCount?: number;
  passwordChangedAt: Date;
};



// Recipe Types 

export enum Unit {
  GRAMS = 'g',
  KILOGRAMS = 'kg',
  MILLILITERS = 'ml',
  LITERS = 'l',
  OUNCES = 'oz',
  POUNDS = 'lb',
  TEASPOON = 'teaspoon',
  TABLESPOON = 'tablespoon',
  CUP = 'cup',
  PINCH = 'pinch',
  DASH = 'dash',
  PIECE = 'piece',
  SLICE = 'slice',
  LEAVES = 'leaves',
  Bunch = "bunch",
}

export type TIngredient = {
  name: string;
  category: string;
  quantity: number;
  unit: Unit;
}

export type TStep = {
  instructions: string;
  duration?: number;
  tips?: string[];
}

// Comment Interface
export type TComment = {
  _id: string;
  userId: string;
  userName: string;
  comment: string;
  date: Date;
  updatedAt?: string;
  deleted: boolean;
  likes: number;
  replies: TReply[];
};

// Reply Interface
export type TReply = {
  _id: string;
  userId: string;
  userName: string;
  comment: string;
  date: Date;
  deleted: boolean;
  likes: number;
  replies: TReply[];
};

export type TNutration = {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

export type TRecipe = {
  _id: string;
  name: string;
  author: TUser;
  description: string;
  rating?: number;
  steps: TStep[];
  images: string[];
  category: string;
  ingredients: TIngredient[];
  cookingTime: number;
  preppingTime: number;
  servings: number;
  publishStatus: 'publish' | 'unpublish';
  comments?: TComment[];
  likes?: number;
  favourites?: number;
  upvotes: number;
  downvotes: number;
  nutrations?: TNutration;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  isPremium: boolean;
  isTrending: boolean;
}


export const RecipeCategory = [
  "All",
  "Biryani",
  "Vegetarian",
  "Polau",
  "Keto",
  "Dessert",
  "Grilled",
  "Rice",
  "Soups",
  "Salad",
  "Breakfast",
  "Dinner",
  "Lunch",
  "Snacks",
  "Drinks",
  "Appetizer",
  "Main Course",
  "Side Dish",
  "Pizza",
  "Pasta",
  "Curry",
];
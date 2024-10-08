export interface IUser {
    _id: string;
    name: string;
    role: string;
    email: string;
    status: string;
    mobileNumber: string;
    profilePhoto: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

export interface ILogin {
    email: string;
    password: string;
}


// Base User Interface
export interface IBaseUser {
    id: string; // Plain string for frontend instead of Types.ObjectId
    name: string;
    email: string;
    password: string;
    profilePicture?: string;
    role: 'user' | 'admin';
    status: 'active' | 'deactivated' | 'suspended' | 'blocked';
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // TUser Interface, extending IBaseUser
  export type TUser = IBaseUser & {
    profileImage: string;
    isPremium: boolean;
    followers: string[]; // Using string[] for IDs
    following: string[]; // Using string[] for IDs
    bio?: string;
    memberShipExpiration?: Date;
    favouriteRecipeList: string[]; // Using string[] for recipe IDs
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
  
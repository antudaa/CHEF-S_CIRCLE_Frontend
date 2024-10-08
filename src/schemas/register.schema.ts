import { z } from "zod";

export const registerValidationSchema = z.object({
    email: z.string().trim().email("Please enter a valid email address..."),
    firstName: z.string().trim().min(2, "First name must be at least 2 characters long."),
    lastName: z.string().trim().min(2, "Last name must be at least 2 characters long."),
    password: z.string().trim().min(6, "Password needs to be at least 8 characters."),
    profileImage: z.string().optional(),
});
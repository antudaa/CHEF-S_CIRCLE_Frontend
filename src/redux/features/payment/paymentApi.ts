import { baseApi } from "../../api/baseApi";

// Define the premiumAccessApi with injected endpoints
const premiumAccessApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Endpoint for purchasing premium access
        purchasePremiumAccess: builder.mutation({
            query: ({ startDate, endDate, pricePerMonth, token }) => ({
                url: "/purchase-premium",
                method: "POST",
                body: { startDate, endDate, pricePerMonth },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        }),

        // Endpoint to fetch premium access details for a specific user
        getPremiumAccessDetails: builder.query({
            query: ({ userId, token }) => ({
                url: `/premium-access/${userId}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        }),
    }),
});

// Export hooks for the endpoints
export const { 
    usePurchasePremiumAccessMutation, 
    useGetPremiumAccessDetailsQuery 
} = premiumAccessApi;

export default premiumAccessApi;

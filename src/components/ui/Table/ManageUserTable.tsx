"use client";
import React, { useState } from "react";
import { TUser } from "@/types";
// import DebounceSearch from "@/hook/debounceSearchHook";
import GlobalLoading from "@/app/loading";
import { MdVerified } from "react-icons/md";
import Image from "next/image";
import BlockUserButton from "../Buttons/BlockUserButton";
import UnBlockUserButton from "../Buttons/UnBlockUserButton";
import { useSelector } from "react-redux";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useGetAllUsersQuery } from "@/redux/features/users/userApi";

const ITEMS_PER_PAGE = 5;

const ManageUserTable = () => {
    const token = useSelector(useCurrentToken);
    // const [searchKeyword, setSearchKeyword] = useState("");
    // const debouncedSearchKeyword = DebounceSearch(searchKeyword, 500);
    const [currentPage, setCurrentPage] = useState(1);

    // Fetch users using TanStack Query
    const { data, isLoading, isError } = useGetAllUsersQuery({
        page: currentPage,
        limit: ITEMS_PER_PAGE,
        // searchTerm: debouncedSearchKeyword,
        token,
    });

    // Calculate the total number of pages
    const totalPages = Math.ceil((data?.data?.totalCount || 1) / ITEMS_PER_PAGE);

    // Handle search input change
    // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setSearchKeyword(e.target.value);
    //     setCurrentPage(1); // Reset to first page on new search
    // };

    // Handle page change
    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Loading and error handling
    if (isLoading) return <GlobalLoading />;
    if (isError) return <div>Error fetching users.</div>;

    return (
        <div>
            {/* <div className="mb-4 flex justify-between items-center">
                <input
                    type="text"
                    placeholder="Search by name or email"
                    value={searchKeyword}
                    onChange={handleSearchChange}
                    className="p-2 border rounded-md"
                />
            </div> */}
            <table className="w-full text-left border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">Profile</th>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Email</th>
                        <th className="px-4 py-2 border">Followers</th>
                        <th className="px-4 py-2 border">Recipes</th>
                        <th className="px-4 py-2 border">Role</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.users.length > 0 ? (
                        data.data.users.map((user: TUser) => (
                            <tr key={user._id}>
                                <td className="px-4 py-2 border flex items-center">
                                    <Image
                                        src={user?.profileImage || "/placeholder-image.png"}
                                        alt={user?.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full border border-blue-600"
                                    />
                                    {user?.isPremium && (
                                        <MdVerified className="-ml-3 -mt-6 text-blue-600" />
                                    )}
                                </td>
                                <td className="px-4 py-2 border">{user?.name}</td>
                                <td className="px-4 py-2 border">{user?.email}</td>
                                <td className="px-4 py-2 border">{user?.followers.length}</td>
                                <td className="px-4 py-2 border">{user?.recipeCount}</td>
                                <td className="px-4 py-2 border capitalize">{user?.role}</td>
                                <td className={`px-4 py-2 border capitalize`}>
                                    <span className={`${user?.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'} py-2 px-4 rounded-full`}>
                                        {user?.status}
                                    </span>
                                </td>
                                <td className="px-4 py-2 border">
                                    {/* <Link
                                        href={`/admin/user-profile/${user._id}`}
                                        className="mr-2 py-1 bg-blue-100 text-blue-600 border border-blue-600 rounded-full px-3"
                                    >
                                        Profile
                                    </Link> */}
                                    {user?.status === "blocked" ? (
                                        <UnBlockUserButton user={user} />
                                    ) : (
                                        <BlockUserButton user={user} />
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={8} className="px-4 py-2 border text-center">
                                No users found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="mt-4 flex justify-end px-6">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 mx-1 border rounded-md disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="px-3 py-2 mx-1">{currentPage}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 mx-1 border rounded-md disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ManageUserTable;

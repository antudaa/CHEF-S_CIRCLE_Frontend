"use client";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

export const AdminLayoutWrapper = ({ children, sidebar }: { children: React.ReactNode, sidebar: React.ReactNode }) => {
    return (
        <Provider store={store}>
            {sidebar}
            {children}
        </Provider>
    );
};
"use client";
import React from "react";
import { FileUpload } from "../AceternityUI/file-upload";
import { message } from "antd";

const IMAGEBB_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface FileUploadButtonProps {
    onImageUpload: (url: string) => void;
}

export function FileUploadButton({ onImageUpload }: FileUploadButtonProps) {
    // Handle file upload
    const handleFileUpload = async (files: File[]) => {
        // Check if files are selected
        if (files.length === 0) {
            message.error("Please select a file to upload.");
            return;
        }

        // Upload each file
        for (const file of files) {
            await uploadImage(file);
        }
    };

    // Upload a single image
    const uploadImage = async (file: File) => {
        const formData = new FormData();
        formData.append("image", file);
        formData.append("key", IMAGEBB_API_KEY as string);

        try {
            const response = await fetch("https://api.imgbb.com/1/upload", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                const imageUrl = result.data.url;
                message.success("Image uploaded successfully!");
                onImageUpload(imageUrl); // Pass the uploaded image URL back
            } else {
                throw new Error(result.error.message);
            }
        } catch (error) {
            console.error("Image upload failed:", error);
            message.error("Image upload failed. Please try again.");
        }
    };

    return (
        <FileUpload
            onChange={handleFileUpload} // No accept prop
        />
    );
}

export default FileUploadButton;

"use client";
import React, { useState } from "react";

const ImageDragger = () => {
    const defaultImage = "/DemoProfile.jpg"; // ✅ Default image in the public folder
    const [uploadedImage, setUploadedImage] = useState(null);
    const [generatedImage, setGeneratedImage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    // Handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUploadedImage(imageUrl);
            setIsProcessing(true);

            // Simulating AI processing (Replace with actual API call)
            setTimeout(() => {
                setGeneratedImage("/DemoProfile.jpg"); // ✅ Replace with actual AI-generated image
                setIsProcessing(false);
            }, 3000);
        }
    };

    // Handle drag and drop
    const handleDrop = (event) => {
        event.preventDefault();
        handleFileChange({ target: { files: event.dataTransfer.files } });
    };

    // Reset to upload state
    const resetUpload = () => {
        setUploadedImage(null);
        setGeneratedImage(null);
    };

    return (
        <div className="max-w-4xl mx-auto p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Left Side - Default Image or Uploaded Image */}
                <div className="flex justify-center items-center p-5 border rounded-lg shadow-md bg-gray-100">
                    <img
                        src={uploadedImage || defaultImage}
                        alt="Preview"
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                {/* Right Side - Drag & Drop / AI-Generated Image */}
                {!generatedImage ? (
                    <div
                        className="border-2 border-dashed border-[#1E3D58] p-6 rounded-lg shadow-md bg-gray-50 flex flex-col items-center justify-center text-center cursor-pointer"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                    >
                        <p className="text-[#1E3D58] mb-3">Drag & Drop an Image Here</p>
                        <p className="text-[#1E3D58] text-sm">or</p>

                        {/* Upload Button */}
                        <label className="px-5 py-2 bg-[#1E3D58] text-[#E8EEF1] cursor-pointer hover:bg-[#057DCD] hover:scale-105 rounded-sm shadow-md shadow-black">
                            Select Image
                            <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                        </label>
                    </div>
                ) : (
                    <div className="relative flex justify-center items-center p-5 border rounded-lg shadow-md bg-gray-100">
                        <img src={generatedImage} alt="Generated Preview" className="w-full h-auto rounded-lg" />
                        <button
                            onClick={resetUpload}
                            className="absolute top-2 right-2 px-5 py-2 bg-[#1E3D58] text-[#E8EEF1] cursor-pointer hover:bg-[#057DCD] hover:scale-105 rounded-sm shadow-md shadow-black"
                        >
                            Back
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageDragger;

"use client";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

type UploadImageFieldType = {
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ImageUploadComponent({
  setImageUrl,
  setModal,
}: UploadImageFieldType) {
  const [isUploading, setIsUploading] = React.useState<boolean>(false);

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [textImageUrl, setTextImageUrl] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCancel = async () => {
    setErrorMessage(null);
    setFile(null);
    setPreviewUrl(null);
    setIsUploading(false);
    setModal(false);
  };

  return (
    <div className="fixed z-10 top-0 left-0 bg-black bg-opacity-45 flex justify-center pt-[100px] pb-6 w-full h-screen overflow-y-auto">
      <div className=" overflow-hidden overflow-y-auto h-fit max-h-[600px] bg-white shadow-md w-[500px] py-4 px-6 rounded-md">
        <div className="block py-1">
          <h2>Upload Image Link</h2>
          <div className="border-t my-5 pt-4">
            <input
              type="text"
              className=" border outline-none my-2 py-3 px-4 rounded focus:shadow-sm w-full"
              placeholder="Enter Image url"
              minLength={10}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTextImageUrl(e.target.value);
              }}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  if (textImageUrl.trim().length > 10) {
                    setImageUrl(textImageUrl);
                    setModal(false);
                  } else {
                    setErrorMessage(
                      "Invalid Image Url. Please enter a valid https link."
                    );
                  }
                }}
                className="hover:bg-blue-600 bg-blue-500 text-sm text-gray-100 py-2 px-3 rounded gap-2"
              >
                Submit Link
              </button>
              <button
                className=" hover:bg-gray-400 bg-gray-300 text-black px-3 py-1 rounded-[3px]"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

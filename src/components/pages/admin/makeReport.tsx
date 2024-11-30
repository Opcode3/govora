"use client";
import React from "react";
import dynamic from "next/dynamic";
// import { PostRequestInterface } from "@/types/blog";
// import { createBlogPost } from "@/utils/api/blogApi";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ImageUploadComponent from "../richeditor/ImageUploadComponent";
// import { useRouter } from "next/navigation";
import Image from "next/image";
import { LoaderCircleIcon } from "lucide-react";
import ImageUploadComponent from "@/components/common/ImageUpload";
import { PostRequestInterface } from "@/types/blog";
import { createReport } from "@/services/reportService";

const TipTapEditor = dynamic(() => import("../../editor/tiptap"), {
  ssr: false,
});

export default function MakeReportPage() {
  const [title, setTitle] = React.useState<string>("");
  const [desc, setDesc] = React.useState<string>("");
  const [writer, setWriter] = React.useState<string>("Govora Editorial Team");
  const [imageUrl, setImageUrl] = React.useState<string>("");
  const [type, setType] = React.useState<string>("");
  const [inlineImageUrl, setInlineImageUrl] = React.useState<string>("");
  const [uploadFor, setUploadFor] = React.useState<"editor" | "feature">(
    "feature"
  );
  const [editorContent, setEditorContent] = React.useState<string>("");
  const [isUploadImageModal, setIsUploadImageModal] =
    React.useState<boolean>(false);
  const [isSubmittingPost, setIsSubmittingPost] =
    React.useState<boolean>(false);

  const publishHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (imageUrl.trim().length > 6) {
      const payload: PostRequestInterface & { from: string } = {
        reporter: writer,
        title: title,
        desc,
        imageUrl: imageUrl,
        content: editorContent,
        type,
        from: "new",
      };

      try {
        setIsSubmittingPost(true);
        const result = await createReport(payload);
        console.log("Blog post created:", result);

        toast.success(result.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        console.log("report Fallback Response", result);
        //   router.push(`/admin/blogs/${result.object.permalink}`);
      } catch (error) {
        console.error("Error creating blog post:", error);
        toast.error("An error was encountered while creating post!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      } finally {
        setIsSubmittingPost(false);
      }
    } else {
      toast.warning(
        "A feature image is required. Please add a feature image to continue.",
        {
          position: "top-right",
          icon: false,
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          style: { background: "#222" },
          transition: Bounce,
        }
      );
    }
  };

  return (
    <form
      onSubmit={(e) => publishHandler(e)}
      className="max-w-full w-[1100px] bg-white py-10 px-5"
    >
      <section className="flex flex-col items-center gap-4 w-full pb-14">
        <div className=" w-full">
          <label
            htmlFor="post_title"
            className="text-[#545454] text-base font-medium"
          >
            Enter the title of the report
          </label>
          <textarea
            name="post_title"
            id="post_title"
            value={title}
            required
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              if (desc.length < 151) {
                setTitle(e.target.value);
              }
            }}
            className="bg-[#F4F4F4] rounded-[3px] w-full py-3 px-4 outline-none border border-[#F4F4F4] focus:border-[#e4e4e4]"
            rows={2}
          ></textarea>
        </div>

        <div className="w-full">
          <label
            htmlFor="post_desc"
            className="text-[#545454] text-base font-medium"
          >
            Post description
          </label>
          <textarea
            name="post_desc"
            id="post_desc"
            value={desc}
            required
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              if (desc.length < 151) {
                setDesc(e.target.value);
              }
            }}
            className="bg-[#F4F4F4] rounded-[3px] w-full py-3 px-4 outline-none border border-[#F4F4F4] focus:border-[#e4e4e4]"
            rows={3}
          ></textarea>
        </div>

        <div className="w-full">
          <label
            htmlFor="report_type"
            className="text-[#545454] text-base font-medium"
          >
            Report Type
          </label>
          <select
            name="report_type"
            id="report_type"
            required
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setType(e.target.value)
            }
            className="bg-[#F4F4F4] rounded-[3px] w-full py-3 px-4 outline-none border border-[#F4F4F4] focus:border-[#e4e4e4]"
          >
            <option value="">Select a report type</option>
            <option value="blog">Blog Report</option>
            <option value="analytics">Analytics Report</option>
            <option value="event">Event Report</option>
            <option value="political">Political Report</option>
          </select>
        </div>

        <div className="w-full">
          <label
            htmlFor="post_publisher"
            className="text-[#545454] text-base font-medium"
          >
            Publisher
          </label>
          <input
            type="text"
            name="post_publisher"
            id="post_publisher"
            value={writer}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWriter(e.target.value)
            }
            className="bg-[#F4F4F4] rounded-[3px] w-full py-3 px-4 outline-none border border-[#F4F4F4] focus:border-[#e4e4e4]"
          />
        </div>
        <div className="bg-[#F4F4F4] w-full h-[318px] overflow-hidden rounded-[3px] flex items-center justify-center relative">
          {imageUrl.trim().length > 6 ? (
            <Image
              src={imageUrl}
              alt={title}
              width={400}
              height={318}
              style={{ objectFit: "contain", objectPosition: "center center" }}
              className=""
            />
          ) : (
            <span
              className="text-[#9C9C9C] text-base italic py-6 px-8"
              onClick={() => {
                setUploadFor("feature");
                setIsUploadImageModal(true);
              }}
            >
              Upload featured image
            </span>
          )}

          {imageUrl.trim().length > 6 && (
            <button
              onClick={() => setImageUrl("")}
              className=" p-1 w-[100px] rounded bg-[#E04033] text-white text-xs absolute z-[3] top-0 right-0"
            >
              Remove Image
            </button>
          )}
        </div>
      </section>
      <section className=" w-full">
        <div className=" min-h-[120px] mb-1 w-full block">
          <TipTapEditor
            setEditorContent={setEditorContent}
            setModal={setIsUploadImageModal}
            imageUrl={inlineImageUrl}
            setUploadFor={setUploadFor}
          />
        </div>

        <div className="py-7 flex justify-end">
          <button
            type="submit"
            className="w-[160px] py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 flex items-center justify-center"
            disabled={isSubmittingPost} // Disable the button while loading
          >
            {isSubmittingPost ? (
              <LoaderCircleIcon className="animate-spin" />
            ) : (
              "Make Report" // Button text when not loading
            )}
            {isSubmittingPost && <span className="ml-2">Submitting...</span>}{" "}
          </button>
        </div>
      </section>

      {isUploadImageModal ? (
        <ImageUploadComponent
          setModal={setIsUploadImageModal}
          setImageUrl={uploadFor == "editor" ? setInlineImageUrl : setImageUrl}
        />
      ) : (
        <></>
      )}
    </form>
  );
}

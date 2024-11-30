"use client";

import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  List,
  ListOrdered,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Undo,
  Redo,
  ImagePlus,
  Pilcrow,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Figure, Figcaption } from "./ext/fig";

type MenuBarType = {
  editor: Editor;
  imageUrl: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUploadFor: React.Dispatch<React.SetStateAction<"editor" | "feature">>;
};

const insertImageWithCaption = (
  editor: Editor,
  imageUrl: string,
  captionText: string
) => {
  editor
    .chain()
    .focus()
    .insertContent({
      type: "figure",
      content: [
        {
          type: "image",
          attrs: { src: imageUrl }, // Insert the image
        },
        {
          type: "figcaption",
          content: [
            {
              type: "text",
              text: captionText || "Add a caption...",
            },
          ],
        },
      ],
    })
    .run();
};

const MenuBar = ({ editor, imageUrl, setModal, setUploadFor }: MenuBarType) => {
  const [expectingImage, setExpectingImage] = useState<boolean>(false);
  useEffect(() => {
    if (imageUrl.length > 6 && expectingImage) {
      insertImageWithCaption(editor, imageUrl, "Image Caption");
      // editor
      //   .chain()
      //   .focus() // Focus the editor
      //   .setImage({ src: imageUrl })
      //   .run();
      // console.log("Run oooo");
    }
    // setInlineImage(imageUrl);
  }, [imageUrl, expectingImage]);

  return (
    <div className="border-b-2 flex justify-center pt-5 pb-3 top-0 sticky z-10 bg-gray-100">
      <div className="flex w-fit flex-wrap  gap-0.5 py-1 px-4 xl:px-8">
        {/* Bold */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive("bold") ? "bg-gray-300" : "bg-white"
          }`}
        >
          <Bold className="size-5" />
        </button>

        {/* Italic */}
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive("italic") ? "bg-gray-300" : "bg-white"
          }`}
        >
          <Italic className="size-5" />
        </button>

        {/* Strikethrough */}
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive("strike") ? "bg-gray-300" : "bg-white"
          }`}
        >
          <Strikethrough className="size-5" />
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive({ textAlign: "left" }) ? "bg-gray-300" : "bg-white"
          }`}
        >
          <AlignLeft className="size-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={` px-2 py-1 border rounded ${
            editor.isActive({ textAlign: "center" })
              ? "bg-gray-300"
              : "bg-white"
          }`}
        >
          <AlignCenter className="size-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive({ textAlign: "right" }) ? "bg-gray-300" : "bg-white"
          }`}
        >
          <AlignRight className="size-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive({ textAlign: "justify" })
              ? "bg-gray-300"
              : "bg-white"
          }`}
        >
          <AlignJustify className="size-5" />
        </button>

        {/* Code */}
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive("code") ? "bg-gray-300" : "bg-white"
          }`}
        >
          <Code className="size-5" />
        </button>

        {/* Bullet List */}
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive("bulletList") ? "bg-gray-300" : "bg-white"
          }`}
        >
          <List className="size-5" />
        </button>

        {/* Ordered List */}
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive("orderedList") ? "bg-gray-300" : "bg-white"
          }`}
        >
          <ListOrdered className="size-5" />
        </button>

        {/* Blockquote */}
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive("blockquote") ? "bg-gray-300" : "bg-white"
          }`}
        >
          <Quote className="size-5" />
        </button>

        {/* Headings */}
        {[1, 2, 3, 4, 5, 6].map((level) => (
          <button
            key={level}
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleHeading({ level: level as 1 | 2 | 3 | 4 | 5 | 6 })
                .run()
            }
            className={`px-2 py-1 border rounded ${
              editor.isActive("heading", { level }) ? "bg-gray-300" : "bg-white"
            }`}
          >
            {level === 1 && <Heading1 className="size-5" />}
            {level === 2 && <Heading2 className="size-5" />}
            {level === 3 && <Heading3 className="size-5" />}
            {level === 4 && <Heading4 className="size-5" />}
            {level === 5 && <Heading5 className="size-5" />}
            {level === 6 && <Heading6 className="size-5" />}
          </button>
        ))}

        {/* Horizontal Rule */}
        {/* <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="px-2 py-1 border rounded bg-white"
        >
          <Line className="size-5" />
        </button> */}

        {/* Clear Marks */}
        {/* <button
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          className="px-2 py-1 border rounded bg-white"
        >
          <X className="size-5" />
        </button> */}

        {/* Undo/Redo */}
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className="px-2 py-1 border rounded bg-white"
        >
          <Undo className="size-5" />
        </button>

        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className="px-2 py-1 border rounded bg-white"
        >
          <Redo className="size-5" />
        </button>

        <button
          onClick={() => {
            setModal(true);
            setExpectingImage(true);
            setUploadFor("editor");
          }}
          disabled={!editor.can().chain().focus().undo().run()}
          className="px-2 py-1 border rounded bg-white"
        >
          <ImagePlus className="size-5" />
        </button>

        {/* Insert New Paragraph */}
        <button
          onClick={() => {
            editor.chain().focus().insertContent("<p></p>").run();
          }}
          className="px-2 py-1 border rounded bg-white"
          title="Insert Paragraph"
        >
          <Pilcrow className="size-5" />
        </button>
      </div>
    </div>
  );
};

type TiptapEditorType = {
  setEditorContent: React.Dispatch<React.SetStateAction<string>>;
  imageUrl: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUploadFor: React.Dispatch<React.SetStateAction<"editor" | "feature">>;
  editorContent?: string;
};

export default function TiptapEditor({
  setEditorContent,
  imageUrl,
  setModal,
  setUploadFor,
  editorContent = "",
}: TiptapEditorType) {
  const [loadOnce, setLoadOnce] = useState<boolean>(false);
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      Placeholder.configure({
        placeholder: "Write something …",
        emptyEditorClass:
          "before:content-[attr(data-placeholder)] before:text-gray-500 before:absolute before:pointer-events-none",
      }),
      Figure,
      Figcaption,
      Image,
      TextAlign.configure({
        types: ["heading", "paragraph", "figcaption"],
      }),
    ],
    editorProps: {
      attributes: {
        // max-w-[100%_!important]
        class:
          "focus:outline-none bg-[#F5F5F5] mx-auto  prose prose-sm sm:prose p-1 md:p-2 lg:p-5 lg:prose-lg xl:prose-xl prose-p:font-light prose-a:font-light prose-figcaption:text-center prose-figcaption:text-[10px] md:prose-figcaption:text-xs prose-p:text-[#242424] prose-a:underline prose-a:text-blue-600",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      console.log(html);
      setEditorContent(JSON.stringify(html));
    },
    immediatelyRender: false,
    // content: undefined,
  });

  useEffect(() => {
    if (
      editorContent &&
      editorContent.trim().length > 0 &&
      editor &&
      loadOnce == false
    ) {
      editor.commands.setContent(JSON.parse(editorContent));
      setLoadOnce(true);
    }
  }, [editorContent, editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="">
      <MenuBar
        editor={editor}
        setUploadFor={setUploadFor}
        imageUrl={imageUrl}
        setModal={setModal}
      />
      <div className=" mt-6 py-1 ">
        <EditorContent
          editor={editor}
          // className="bg-red-400 h-auto border border-gray-300 rounded-b-lg outline-none focus:outline-none"
        />
      </div>
    </div>
  );
}

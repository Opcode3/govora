// pages/ArticleView.tsx
"use client";
import React, { useState } from "react";
import { Play, Pause, ThumbsUp, MessageCircle, Share2 } from "lucide-react";

const ArticleView = () => {
  const [isReading, setIsReading] = useState(false);

  const text = `
    This is a sample article for demonstration. Replace this with dynamic content.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada orci et dolor
    scelerisque, ut egestas nisi commodo. Curabitur vehicula erat eget lectus tempor,
    id commodo turpis pharetra.
  `;

  // Text-to-Speech (TTS) Functionality
  const toggleSpeech = () => {
    if ("speechSynthesis" in window) {
      if (!isReading) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
      } else {
        window.speechSynthesis.cancel();
      }
      setIsReading(!isReading);
    } else {
      alert("Text-to-speech is not supported in your browser.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      {/* Article Header */}
      <h1 className="text-4xl font-bold mb-2">Article Title</h1>
      <p className="text-gray-500 mb-6">
        By Author Name • Published 2 hours ago
      </p>

      {/* Voice Reading Button */}
      <button
        onClick={toggleSpeech}
        className="flex items-center bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 mb-6"
      >
        {isReading ? <Pause className="mr-2" /> : <Play className="mr-2" />}
        {isReading ? "Pause Reading" : "Listen to Article"}
      </button>

      {/* Article Content */}
      <div className="text-lg leading-relaxed text-gray-800 space-y-6">
        <p>{text}</p>
      </div>

      {/* Engagement Section */}
      <div className="mt-10 flex space-x-6 text-gray-600">
        <button className="flex items-center hover:text-blue-500">
          <ThumbsUp className="mr-2" /> Like
        </button>
        <button className="flex items-center hover:text-blue-500">
          <MessageCircle className="mr-2" /> Comment
        </button>
        <button className="flex items-center hover:text-blue-500">
          <Share2 className="mr-2" /> Share
        </button>
      </div>
    </div>
  );
};

export default ArticleView;

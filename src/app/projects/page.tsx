"use client";
import { useState } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  status: "Ongoing" | "Completed" | "Planned";
  votes: number;
  comments: { user: string; comment: string }[];
}

const initialProjects: Project[] = [
  {
    id: 1,
    name: "Lagos-Calabar Coastal Highway",
    description:
      "A major infrastructure project aimed at improving connectivity between Lagos and Calabar.",
    status: "Ongoing",
    votes: 120,
    comments: [
      {
        user: "Jane Doe",
        comment: "This project will transform transportation!",
      },
    ],
  },
  {
    id: 2,
    name: "National Digital Education Initiative",
    description:
      "An initiative to provide digital learning tools to schools nationwide.",
    status: "Planned",
    votes: 80,
    comments: [],
  },
  {
    id: 3,
    name: "Abuja Light Rail Expansion",
    description:
      "Expanding the light rail system to improve public transportation in Abuja.",
    status: "Completed",
    votes: 150,
    comments: [{ user: "John Smith", comment: "Glad to see this completed!" }],
  },
];

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [commentInput, setCommentInput] = useState<{ [key: number]: string }>(
    {}
  );

  const handleVote = (projectId: number, type: "upvote" | "downvote") => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              votes: type === "upvote" ? project.votes + 1 : project.votes - 1,
            }
          : project
      )
    );
  };

  const handleComment = (projectId: number) => {
    if (!commentInput[projectId]) return;

    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              comments: [
                ...project.comments,
                { user: "Anonymous", comment: commentInput[projectId] },
              ],
            }
          : project
      )
    );

    setCommentInput({ ...commentInput, [projectId]: "" }); // Reset comment input
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          National Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {project.name}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p
                className={`mb-4 font-semibold ${
                  project.status === "Ongoing"
                    ? "text-yellow-500"
                    : project.status === "Completed"
                    ? "text-green-500"
                    : "text-blue-500"
                }`}
              >
                Status: {project.status}
              </p>
              <div className="flex items-center mb-4">
                <button
                  onClick={() => handleVote(project.id, "upvote")}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  👍 Upvote
                </button>
                <button
                  onClick={() => handleVote(project.id, "downvote")}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                >
                  👎 Downvote
                </button>
                <p className="ml-4 text-gray-700 font-semibold">
                  Votes: {project.votes}
                </p>
              </div>
              {/* Comments Section */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Comments:</h3>
                {project.comments.length > 0 ? (
                  <ul className="list-disc list-inside mb-2">
                    {project.comments.map((comment, index) => (
                      <li key={index} className="text-gray-700">
                        <strong>{comment.user}: </strong>
                        {comment.comment}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 mb-2">No comments yet.</p>
                )}
                <div className="flex mt-2">
                  <input
                    type="text"
                    value={commentInput[project.id] || ""}
                    onChange={(e) =>
                      setCommentInput({
                        ...commentInput,
                        [project.id]: e.target.value,
                      })
                    }
                    placeholder="Add a comment..."
                    className="flex-1 border border-gray-300 rounded-l py-2 px-3"
                  />
                  <button
                    onClick={() => handleComment(project.id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r"
                  >
                    Comment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

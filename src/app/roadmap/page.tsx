// components/Timeline.js
import {
  Code,
  Handshake,
  Rocket,
  Megaphone,
  Twitter,
  UserPlus,
  PlaneTakeoffIcon,
} from "lucide-react";

const Timeline = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Govora Launch Execution Timeline
        </h2>

        {/* Development, Social Media, and Marketing Phases */}
        <div className="flex flex-wrap justify-between items-center space-x-8">
          {/* Development Phase */}
          <div className="flex flex-col items-center w-full sm:w-1/4 mb-12">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex justify-center items-center shadow-lg">
              <Code size={24} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Platform Development
            </h3>
            <p className="text-gray-600 text-center">
              Development of the full-stack platform, API integrations, and
              database setup.
            </p>
            <div className="text-sm text-gray-500 mt-2">Jan 2025</div>
          </div>

          {/* Social Media Accounts Launch */}
          <div className="flex flex-col items-center w-full sm:w-1/4 mb-12">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex justify-center items-center shadow-lg">
              <Twitter size={24} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Social Media Launch
            </h3>
            <p className="text-gray-600 text-center">
              Launching official social media accounts (Twitter, Instagram,
              etc.) to engage users.
            </p>
            <div className="text-sm text-gray-500 mt-2">Mid Feb 2025</div>
          </div>

          {/* Marketing & Content Prep */}
          <div className="flex flex-col items-center w-full sm:w-1/4 mb-12">
            <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex justify-center items-center shadow-lg">
              <Megaphone size={24} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Marketing & Content Prep
            </h3>
            <p className="text-gray-600 text-center">
              Creating content strategies, outreach campaigns, and social media
              promotions.
            </p>
            <div className="text-sm text-gray-500 mt-2">Feb 2025</div>
          </div>
        </div>

        {/* Campaigns, Testing, and Official Launch Phases */}
        <div className="flex flex-wrap justify-between items-center space-x-8">
          {/* Campaign Awareness */}
          <div className="flex flex-col items-center w-full sm:w-1/4 mb-12">
            <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex justify-center items-center shadow-lg">
              <UserPlus size={24} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Campaigns & Awareness
            </h3>
            <p className="text-gray-600 text-center">
              Running awareness campaigns and engaging with early users for
              feedback.
            </p>
            <div className="text-sm text-gray-500 mt-2">Early March 2025</div>
          </div>

          {/* Beta Testing Phase */}
          <div className="flex flex-col items-center w-full sm:w-1/4 mb-12">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex justify-center items-center shadow-lg">
              <Handshake size={24} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Beta Testing
            </h3>
            <p className="text-gray-600 text-center">
              Beta release to select users for feedback and platform
              refinements.
            </p>
            <div className="text-sm text-gray-500 mt-2">Early March 2025</div>
          </div>

          {/* Final Adjustments */}
          <div className="flex flex-col items-center w-full sm:w-1/4 mb-12">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex justify-center items-center shadow-lg">
              <PlaneTakeoffIcon size={24} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Final Adjustments
            </h3>
            <p className="text-gray-600 text-center">
              Finalizing platform features, debugging, and preparing for public
              launch.
            </p>
            <div className="text-sm text-gray-500 mt-2">Mid March 2025</div>
          </div>
        </div>

        {/* Official Launch Phase */}
        <div className="flex flex-col items-center w-full sm:w-1/4 mb-12 mx-auto">
          <div className="w-16 h-16 bg-green-500 text-white rounded-full flex justify-center items-center shadow-lg">
            <Rocket size={24} />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            Official Launch
          </h3>
          <p className="text-gray-600 text-center">
            Govora goes live! Engaging the public and introducing new features
            for better governance.
          </p>
          <div className="text-sm text-gray-500 mt-2">
            Second Week of March 2025
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

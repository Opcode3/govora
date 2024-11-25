const insights = [
  {
    id: 1,
    title: "Economic Performance",
    description:
      "Analyzing the impact of recent fiscal policies on households.",
    image: "/images/img.jpg",
  },
  {
    id: 2,
    title: "Infrastructure Development",
    description:
      "Assessing ongoing projects and identifying regions needing urgent improvements.",
    image: "/images/img.jpg",
  },
  {
    id: 3,
    title: "Healthcare Access",
    description:
      "Evaluating healthcare coverage gaps and the effects of recent initiatives.",
    image: "/images/img.jpg",
  },
  {
    id: 4,
    title: "Education Trends",
    description:
      "Tracking literacy rates and evaluating recent educational policies.",
    image: "/images/img.jpg",
  },
  {
    id: 5,
    title: "Employment Data",
    description:
      "Analyzing unemployment trends and the impact of job creation programs.",
    image: "/images/img.jpg",
  },
  {
    id: 6,
    title: "Public Sentiment",
    description:
      "Understanding citizen feedback and regional satisfaction with governance.",
    image: "/images/img.jpg",
  },
];

const InsightsSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            National Trends Analysis
          </h2>
          <p className="text-gray-600 mt-2">
            Data-Driven Insights for Better Governance
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mt-2">{insight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;

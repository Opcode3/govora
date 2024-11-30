const insights = [
  {
    id: 1,
    title: "Economic Diversification and Industrial Growth",
    description:
      "Nigeria has long been dependent on oil exports, but there has been a growing push for economic diversification. This trend examines the country's efforts to reduce reliance on oil by developing other sectors, such as agriculture, manufacturing, technology, and services. Key indicators might include growth in non-oil GDP, government policies supporting diversification, and investment in infrastructure. This trend is crucial for long-term economic sustainability and job creation.",
    image: "/images/insight/7.jpg",
  },
  {
    id: 2,
    title: "Digital Transformation and Technology Adoption ",
    description:
      "With Nigeria's young population and growing internet penetration, the digital economy is expanding rapidly. This trend looks at the rise of tech startups, mobile banking, e-commerce, and digital services like fintech, edtech, and health tech. ",
    image: "/images/insight/6.jpg",
  },
  {
    id: 3,
    title: "Youth Unemployment and Skills Development",
    description:
      "Nigeria faces a significant challenge in terms of high youth unemployment, despite having one of the youngest populations in the world. This trend examines the causes of unemployment among Nigerian youth, such as lack of skills, insufficient job opportunities, and limited access to vocational training.",
    image: "/images/insight/5.jpg",
  },
  {
    id: 4,
    title: "Urbanization and Infrastructure Development",
    description:
      "Nigeria is experiencing rapid urbanization, with millions of people migrating from rural areas to cities in search of better opportunities. This trend examines the pressures on urban infrastructure—housing, transportation, sanitation, and healthcare.",
    image: "/images/insight/3.jpg",
  },
  {
    id: 5,
    title: "Political Instability and Governance Reform",
    description:
      "Nigeria has faced periods of political instability, with challenges like corruption, security concerns, and governance inefficiencies. This trend looks at the impact of political reforms, electoral processes, anti-corruption measures, and security issues (e.g., insurgency in the North, banditry, and ethnic conflicts) on national development. ",
    image: "/images/insight/2.avif",
  },
  {
    id: 6,
    title: "Climate Change and Environmental Sustainability",
    description:
      "Nigeria is experiencing significant environmental challenges due to climate change, including desertification in the North, flooding in coastal areas, and deforestation. This trend analyzes how climate change is affecting agriculture, food security, water resources, and livelihoods in Nigeria.",
    image: "/images/insight/1.jpg",
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
                <p className="line-clamp-4 text-gray-600 mt-2">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;

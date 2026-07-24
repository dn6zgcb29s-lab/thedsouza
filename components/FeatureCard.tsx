type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-6 transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 hover:shadow-xl">
      <div className="text-3xl mb-4">{icon}</div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-slate-400">{description}</p>
    </div>
  );
}

import FeatureCard from "./FeatureCard";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-slate-300 text-lg leading-8 max-w-3xl">
          I'm Glen D'Souza, an IT professional with more than two decades of
          experience who is now building AI-powered applications, modern
          websites, and digital businesses.

          <br />
          <br />

          I believe technology should simplify people's lives, not complicate
          them. Every project I build is an opportunity to learn something new
          and create something meaningful.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <FeatureCard
            icon="💻"
            title="22+ Years in IT"
            description="Supporting enterprise environments and delivering reliable technology solutions."
          />

          <FeatureCard
            icon="🤖"
            title="AI Builder"
            description="Creating practical AI applications and automation to solve real-world problems."
          />

          <FeatureCard
            icon="🚀"
            title="Digital Transformation"
            description="Helping businesses modernise their systems, processes and customer experiences."
          />

          <FeatureCard
            icon="📚"
            title="Always Learning"
            description="Continuously exploring new technologies and improving my skills every day."
          />
        </div>
      </div>
    </section>
  );
}
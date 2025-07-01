import { skills } from "../data/constant.js";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-primary"> Skills</span> 
        </h2>
        <div className="w-full flex flex-wrap justify-center gap-6 mt-8 opacity-90">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="w-full max-w-md bg-background  border border-primary/50 shadow-lg rounded-xl p-6 md:max-w-sm sm:max-w-xs card-hover transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-center text-muted-foreground mb-5">
                {skill.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3 mb-3">
                {skill.skills.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 text-base border border-muted-foreground/60 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted/10 transition"
                  >
                    <img src={item.image} alt={item.name} className="w-5 h-5" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


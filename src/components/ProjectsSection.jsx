import { ArrowRight, Code, ExternalLink } from "lucide-react";
import { projects } from "../data/constant";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-lg  text-center text-muted-foreground mb-12 mx-auto">
          Here are some of my projects that I have worked on.
        </p>
        {/* Projects will be listed here */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {projects.map((project,key)=>(
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                   <div className="h-48 overflow-hidden">
                     <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                   </div>
                   <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4 ">
                             {project.tags.map((tag, index) => (
                                <span key={index} className="px-2 py-1 text-xs font-medium  bg-primary/20 rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                      </div>
                   
                   <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                   <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                   <div className="flex justify-between items-center">
                         <div className="flex space-x-3">
                             <a href={project.live} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank" >
                                <ExternalLink size={20}/>
                             </a>
                             <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                <Code size={20}/>
                             </a>
                         </div>
                   </div>
                </div>
                </div>
             ))}
         </div>
         <div className="text-center mt-12 ">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Manish12-verma">
                Check My Github  <ArrowRight size={16}/>
            </a>
         </div>
      </div>
    </section>
  );


}
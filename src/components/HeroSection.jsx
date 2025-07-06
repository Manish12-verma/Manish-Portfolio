import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
  return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container mx-w-4xl mx-auto text-center z-10">
             <div className="space-y-6 ">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I&#39;m</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Manish</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Verma</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto opacity-0  animate-fade-in-delay-3">
                    Passionate Software Developer crafting intuitive digital experiences.
                   Specializing in frontend development, skilled in building robust web applications with clean, scalable code.</p>
             <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
             
                 <a href="#projects" className="cosmic-button opacity-0 animate-fade-in-delay-4">
                View my work
             </a>
              <a href="https://www.linkedin.com/in/manish-verma-986033233/" className=" opacity-0 animate-fade-in-delay-4 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                      Hire Me
                  </a>
             </div>
            </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
       <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  
}



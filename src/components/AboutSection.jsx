import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
   return  (
   <section id="about" className="py-24 px-4 relative">
       <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About <span className="text-primary">Me</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
               <p className="text-muted-foreground">
  I specialize in creating responsive, accessible, and high-performance web applications with modern technologies.
</p>
<p>
  I am a passionate Frontend Developer blending creativity with technical skill to bring ideas to life on the web. Proficient in HTML, CSS, JavaScript, React.js, and Tailwind CSS, I also work with Node.js, Express.js, and databases like MongoDB and MySQL. I love crafting clean, scalable code and building intuitive user experiences that engage and inspire.
</p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                  <a href="#contact" className="cosmic-button">
                      Get in touch
                  </a>
                  <a href="https://drive.google.com/file/d/1cOzmEjVW-Bva1wixnU5GHQjPD7e5aKCq/view?usp=sharing" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                      Download Resume
                  </a>
               </div>
            </div>
            <div  className="grid grid-cols-1 gap-6">
               <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                     <div className="p-3 rounded-full bg-primary/10">
                      <Code size={24} className="text-primary h-6 w-6" />
                     </div>
                     <div className="text-left">
                       <h4 className="text-lg font-semibold">Web Development</h4>
                       <p className="text-muted-foreground">Creating responsive websites and web applications with modern frameworks.</p>
                     </div>
                  </div>
               </div>
               <div className="gradient-border p-6 card-hover">
                   <div className="flex items-start gap-4">
                     <div className="p-3 rounded-full bg-primary/10">
                      <User size={24} className="text-primary h-6 w-6" />
                     </div>
                     <div className="text-left">
                       <h4 className="text-lg font-semibold">Problem Solving</h4>
                       <p className="text-muted-foreground">I enjoy solving complex problems with a blend of logic, creativity, and effective analysis.</p>
                     </div>
                  </div>
               </div>
               <div className="gradient-border p-6 card-hover">
                   <div className="flex items-start gap-4">
                     <div className="p-3 rounded-full bg-primary/10">
                      <Briefcase size={24} className="text-primary h-6 w-6" />
                     </div>
                     <div className="text-left">
                       <h4 className="text-lg font-semibold">Project Management</h4>
                       <p className="text-muted-foreground">I have experience creating projects end-to-end using agile methodologies, coordinating teams, and defining requirements.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
       </div>
   </section>
   )
}
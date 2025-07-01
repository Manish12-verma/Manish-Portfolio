import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { toast } from "sonner";
import { useState } from "react";

export const ContactSection = () => {
    
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit=(e)=>{
      e.preventDefault();
    setIsSubmitting(true);
      setTimeout(() => {
          toast.success("Your message has been sent successfully!");
           setIsSubmitting(false);
      },1500)
      
     
      e.target.reset(); // Reset the form after submission
    }

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4  text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 mx-auto max-w-2xl">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className=" flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:manish120903@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    manish120903@gmail.com
                  </a>
                </div>
              </div>
              <div className=" flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    Greater Noida, Uttar Pradesh, India
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium">Connect With Me</h4>
              <div className="flex space-x-4 py-2 justify-center">
                <a
                  href="https://www.linkedin.com/in/manish-verma-986033233/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="" target="_blank">
                  <Twitter />
                </a>
                <a href="" target="_blank">
                  <Instagram />
                </a>
                <a href="https://github.com/Manish12-verma" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-2 font-medium text-start"
                >
                Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Manish verma...."
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                />
              </div>
               <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 font-medium text-start"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="name"
                  name="name"
                  placeholder="manish120903@gmail.com"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
               <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-2 font-medium text-start"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message here...."
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary  resize-none"
                />
              </div>
              <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2",

              )}>
                {isSubmitting ? "Sending...": "Send Message"}
                <Send size={16}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

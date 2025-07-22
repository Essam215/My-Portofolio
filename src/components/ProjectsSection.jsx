import { ExternalLink, Github, ArrowRight} from "lucide-react";
const projects = [
    {
        id: 1,
        title: "Elzero Website",
        description: "A responsive website built with HTML, CSS, showcasing various web development techniques.",
        image: "/public/Projects/Project1.png",
        tags: ["HTML", "CSS"],
        demoUrl: "https://essam215.github.io/elzero.rl/",   
        githubUrl: "https://github.com/Essam215/elzero.rl",
    },
      {
        id: 2,
        title: "Equal Advertising",
        description: "A Website for an interior design office with a simple animations.",
        image: "/public/Projects/Project2.png",
        tags: ["HTML", "CSS","JS" ,"SASS"],
        demoUrl: "https://essam215.github.io/Equal-Advertising1/",
        githubUrl: "https://github.com/Essam215/Equal-Advertising1",
    },
      {
        id: 3,
        title: "Kasper",
        description: "A Simple website made with Html, CSS",
        image: "/public/Projects/Project3.png",
        tags: ["HTML", "CSS"],
        demoUrl: "https://essam215.github.io/kasper/",
        githubUrl: "https://github.com/Essam215/kasper",
    },
      {
        id: 4,
        title: "Leon",
        description: "A responsive website built with HTML, CSS don't contains a lot.",
        image: "/public/Projects/landing.jpg",
        tags: ["HTML", "CSS"],
        demoUrl: "https://essam215.github.io/Leon/",
        githubUrl: "https://github.com/Essam215/Leon",
    },
      {
        id: 5,
        title: "Pricing Plans",
        description: "A website made for pricing plans with a simple design.",
        image: "/public/Projects/Project5.png",
        tags: ["HTML", "CSS"],
        demoUrl: "https://essam215.github.io/Pricing-plan/",
        githubUrl: "https://github.com/Essam215/Pricing-plan",
    },
      {
        id: 6,
        title: "Candy Mueseum",
        description: "A website just contains a simple images for some delicious donuts.",
        image: "/public/Projects/hand2.png",
        tags: ["HTML", "CSS"],
        demoUrl: "https://essam215.github.io/Candy-Muesum/",
        githubUrl: "https://github.com/Essam215/Candy-Muesum",
    },
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured<span className="text-primary"> Projects</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
                Here are some of my recent projects that showcase my skills in web development. 
                Click on the project titles to view more details.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden ">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((Tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{Tag}</span> 
                                ))}
                            </div>
                        
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                    <ExternalLink size={20} />
                                </a>
                                 <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                    <Github size={20} />
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a href="https://github.com/Essam215" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My GitHub <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
}
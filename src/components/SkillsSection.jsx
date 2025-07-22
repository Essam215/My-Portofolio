import { useState } from "react"
import { cn } from "@/lib/utils"

const skills = [
    // Frontend Skills
    {name: "Html/CSS", level: 95, categorey: "frontend"},
    {name: "JavaScript", level: 85, categorey: "frontend"},
    {name: "Tailwind CSS", level: 95, categorey: "frontend"},
    {name: "Bootstrap", level: 90, categorey: "frontend"},
    {name: "Bulma", level: 70, categorey: "frontend"},
    {name: "Sass", level: 80, categorey: "frontend"},
    {name: "React", level: 75, categorey: "frontend"},
    {name: "Next.js", level: 65, categorey: "frontend"},
    {name: "TypeScript", level: 60, categorey: "frontend"},
    {name: "Three.js", level: 50, categorey: "frontend"},
    // Backend Skills
    {name: "Node.js", level: 50, categorey: "backend"},
    {name: "Express.js", level: 55, categorey: "backend"},
    {name: "MongoDB", level: 45, categorey: "backend"},
    // Design Skills
    {name: "Figma", level: 95, categorey: "design"},
    {name: "Photoshop", level: 60, categorey: "design"},
    {name: "Resonsive Design", level: 90, categorey: "design"},
    {name: "3D Design", level: 60, categorey: "design"},
    //Tools 
    {name: "Visual Studio Code", level: 95, categorey: "tools"},
    {name: "Atom", level: 80, categorey: "tools"},
    {name: "WordPress", level:85, categorey: "tools"},
    {name: "Shopify", level: 80, categorey: "tools"},
    {name: "Git/GitHub", level: 90, categorey: "tools"},
    // Other Skills
    {name: "Problem Solving", level: 80, categorey: "other"},
    {name: "English", level: 95, categorey: "other"},
    {name: "Copywriting", level: 80, categorey: "other"},
];

const categories = ["all", "frontend", "backend", "design", "tools", "other"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter ((skill) => activeCategory === "all" || skill.categorey === activeCategory);


    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl ">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((categorey, key) => (
                    <button key={key} 
                    onClick={() => setActiveCategory(categorey)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === categorey ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )}>
                        {categorey}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover"> 
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">
                                {skill.name}
                            </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width: skill.level + "%"}} />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))} 
            </div>
        </div>
    </section>
}
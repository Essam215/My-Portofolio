import {Briefcase, Code, User} from "lucide-react";

export const AboutSection = () => {

    return <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold ">Creative Web Developer & CoDezine Founder and Web Developer</h3>

                        <p className="tect-muted-foreground">
                            With 5 years of experience in web development,
                            I specialize in crafting dynamic and responsive websites. 
                            My journey began with a passion for coding, 
                            and it has evolved into a commitment to delivering high-quality digital solutions. 
                            As the founder of CoDezine, 
                            I lead a team dedicated to pushing the boundaries of web design and functionality.
                        </p>
                        <p className="tect-muted-foreground">
                            My expertise spans across various technologies, 
                            including HTML, CSS, JavaScript, and modern frameworks. 
                            I thrive on challenges and enjoy transforming complex problems into elegant solutions. 
                            Whether it's building a sleek user interface or optimizing backend performance, 
                            I approach each project with creativity and precision.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a href="../assets/Essam_Ghazal_CV.pdf" download="Essam_Ghazal_CV.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 hover:text-glow transition-colors duration-300 ">
                                Download CV
                            </a>   
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4 ">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive and dynamic websites using modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4 ">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        Designing user-friendly interfaces with a focus on user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4 ">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Leading projects from concept to completion, ensuring timely delivery and quality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
}
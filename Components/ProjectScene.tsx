import { Canvas } from "@react-three/fiber";
import ProjectCard from "./ProjectCard";

const project = {
  title: "Galaxy Portfolio",
  description: "3D portfolio built with R3F",
  image: "/project.png",
};

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1.2} />
      <ProjectCard project={project} />
    </Canvas>
  );
}

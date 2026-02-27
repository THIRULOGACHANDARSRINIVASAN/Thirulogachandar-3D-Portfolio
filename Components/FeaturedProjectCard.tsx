type CardProps = {
  project: Project;
  position: "left" | "center" | "right";
};

function ProjectCard({ project, position }: CardProps) {
  return (
    <div
      className={clsx(
        "absolute transition-all duration-700 ease-out",
        "w-[280px] md:w-[320px] h-[400px] rounded-3xl",
        "bg-white/5 backdrop-blur-xl border border-white/10",
        position === "center" &&
          "scale-100 z-20 opacity-100",
        position === "left" &&
          "-translate-x-[260px] scale-90 opacity-40 blur-sm",
        position === "right" &&
          "translate-x-[260px] scale-90 opacity-40 blur-sm"
      )}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[180px] object-cover rounded-t-3xl"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 mb-4">
          {project.description}
        </p>

        <div className="flex gap-2 mb-6 flex-wrap">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400"
            >
              {t}
            </span>
          ))}
        </div>

        <button className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
          View Details ↗
        </button>
      </div>
    </div>
  );
}
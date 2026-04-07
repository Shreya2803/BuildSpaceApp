import { motion } from "framer-motion";
import { Users } from "lucide-react";
import type { Project } from "@/data/mock";
import { SkillBadge } from "./SkillBadge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const statusStyles = {
  recruiting: "bg-primary/10 text-primary",
  "in-progress": "bg-info/10 text-info",
  completed: "bg-muted text-muted-foreground",
};

const statusLabels = {
  recruiting: "Recruiting",
  "in-progress": "In Progress",
  completed: "Completed",
};

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display font-semibold text-card-foreground">{project.title}</h3>
        <span className={cn("text-xs font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap", statusStyles[project.status])}>
          {statusLabels[project.status]}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.techStack.map((t) => (
          <SkillBadge key={t} skill={t} />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={project.owner.avatar} alt={project.owner.name} className="h-6 w-6 rounded-full bg-muted" />
          <span className="text-xs text-muted-foreground">{project.owner.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Users className="h-3.5 w-3.5" />{project.members}/{project.maxMembers}
          </span>
          {project.status === "recruiting" && (
            <Button size="sm" variant="outline" className="h-7 text-xs">Join</Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

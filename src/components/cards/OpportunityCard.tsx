import { motion } from "framer-motion";
import { MessageSquare, Trophy, UserPlus, Briefcase } from "lucide-react";
import type { Opportunity } from "@/data/mock";
import { SkillBadge } from "./SkillBadge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const typeConfig = {
  teammate: { icon: UserPlus, label: "Looking for Teammate", style: "bg-primary/10 text-primary" },
  hiring: { icon: Briefcase, label: "Hiring", style: "bg-accent/10 text-accent" },
  hackathon: { icon: Trophy, label: "Hackathon", style: "bg-highlight/10 text-highlight-foreground" },
};

export function OpportunityCard({ opp, index = 0 }: { opp: Opportunity; index?: number }) {
  const config = typeConfig[opp.type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
    >
      <div className="flex items-start gap-3">
        <div className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", config.style)}>
          <Icon className="h-4 w-4" />
        </div>
        <div className="flex-1 min-w-0">
          <span className={cn("text-xs font-medium px-2 py-0.5 rounded-full", config.style)}>{config.label}</span>
          <h3 className="mt-1.5 font-display font-semibold text-card-foreground">{opp.title}</h3>
        </div>
      </div>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">{opp.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {opp.skills.map((s) => (
          <SkillBadge key={s} skill={s} variant="accent" />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={opp.postedBy.avatar} alt={opp.postedBy.name} className="h-6 w-6 rounded-full bg-muted" />
          <span className="text-xs text-muted-foreground">{opp.postedBy.name} · {opp.postedAt}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <MessageSquare className="h-3.5 w-3.5" />{opp.responses}
          </span>
          <Button size="sm" className="h-7 text-xs">Respond</Button>
        </div>
      </div>
    </motion.div>
  );
}

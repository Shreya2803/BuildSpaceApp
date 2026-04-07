import { motion } from "framer-motion";
import { Compass, FolderKanban, Megaphone } from "lucide-react";
import type { FeedItem } from "@/data/mock";
import { SkillBadge } from "./SkillBadge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const typeConfig = {
  project: { icon: FolderKanban, color: "text-primary" },
  opportunity: { icon: Compass, color: "text-accent" },
  update: { icon: Megaphone, color: "text-highlight-foreground" },
};

export function FeedCard({ item, index = 0 }: { item: FeedItem; index?: number }) {
  const config = typeConfig[item.type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
      className="flex gap-4 rounded-xl border border-border bg-card p-4 shadow-card transition-all hover:shadow-card-hover"
    >
      <div className="flex flex-col items-center gap-2">
        <img src={item.user.avatar} alt={item.user.name} className="h-10 w-10 rounded-full bg-muted" />
        <Icon className={cn("h-4 w-4", config.color)} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold text-card-foreground">{item.user.name}</span>
          <span className="text-muted-foreground">· {item.timestamp}</span>
        </div>
        <h4 className="mt-1 font-medium text-card-foreground">{item.title}</h4>
        <p className="mt-0.5 text-sm text-muted-foreground">{item.description}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <SkillBadge key={t} skill={t} />
          ))}
        </div>
        <div className="mt-3 flex justify-end">
          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
            Request
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

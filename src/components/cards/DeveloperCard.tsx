import { motion } from "framer-motion";
import { FolderKanban, Users, Check } from "lucide-react";
import type { Developer } from "@/data/mock";
import { SkillBadge } from "./SkillBadge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function DeveloperCard({ dev, index = 0 }: { dev: Developer; index?: number }) {
  const [connectSent, setConnectSent] = useState(false);

  const handleConnect = () => {
    setConnectSent(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
    >
      <div className="flex items-start gap-4">
        <img src={dev.avatar} alt={dev.name} className="h-12 w-12 rounded-full bg-muted" />
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-card-foreground truncate">{dev.name}</h3>
          <p className="text-sm text-muted-foreground font-mono">@{dev.username}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{dev.bio}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {dev.skills.slice(0, 4).map((s) => (
          <SkillBadge key={s} skill={s} variant="primary" />
        ))}
      </div>
      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><FolderKanban className="h-3.5 w-3.5" />{dev.projects} projects</span>
        <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{dev.connections} connections</span>
      </div>
      <div className="mt-4">
        {connectSent ? (
          <div className="flex items-center gap-2 text-green-600">
            <Check className="h-4 w-4" />
            <span className="text-sm font-medium">Connection request sent</span>
          </div>
        ) : (
          <Button
            size="sm"
            className="bg-green-600 hover:bg-green-700 text-white w-full"
            onClick={handleConnect}
          >
            Connect
          </Button>
        )}
      </div>
    </motion.div>
  );
}

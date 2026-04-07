import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/layout/Layout";
import { OpportunityCard } from "@/components/cards/OpportunityCard";
import { opportunities } from "@/data/mock";
import { Button } from "@/components/ui/button";

const types = ["All", "Teammate", "Hiring", "Hackathon"] as const;

export default function Opportunities() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("All");

  const filtered = opportunities.filter((o) => {
    const matchSearch = o.title.toLowerCase().includes(search.toLowerCase()) ||
      o.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchType = filter === "All" || o.type === filter.toLowerCase();
    return matchSearch && matchType;
  });

  return (
    <Layout>
      <div className="container py-10">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold">Opportunities</h1>
          <p className="mt-1 text-muted-foreground">Find hackathon teams, project roles, and more</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search opportunities or skills..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-1.5">
            {types.map((t) => (
              <Button
                key={t}
                size="sm"
                variant={filter === t ? "default" : "outline"}
                onClick={() => setFilter(t)}
                className="text-xs"
              >
                {t}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((o, i) => (
            <OpportunityCard key={o.id} opp={o} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">No opportunities found matching your search.</p>
        )}
      </div>
    </Layout>
  );
}

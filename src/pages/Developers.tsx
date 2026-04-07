import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/layout/Layout";
import { DeveloperCard } from "@/components/cards/DeveloperCard";
import { developers } from "@/data/mock";

export default function Developers() {
  const [search, setSearch] = useState("");

  const filtered = developers.filter((d) => {
    const q = search.toLowerCase();
    return d.name.toLowerCase().includes(q) ||
      d.skills.some((s) => s.toLowerCase().includes(q)) ||
      d.interests.some((i) => i.toLowerCase().includes(q));
  });

  return (
    <Layout>
      <div className="container py-10">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold">Developers</h1>
          <p className="mt-1 text-muted-foreground">Find talented developers to collaborate with</p>
        </div>
        <div className="relative max-w-md mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, skill, or interest..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((d, i) => (
            <DeveloperCard key={d.id} dev={d} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">No developers found matching your search.</p>
        )}
      </div>
    </Layout>
  );
}

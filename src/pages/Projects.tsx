import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { CreateProjectModal } from "@/components/CreateProjectModal";

const statuses = ["All", "Recruiting", "In Progress", "Completed"] as const;

export default function Projects() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("All");
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = projects.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchStatus = filter === "All" || p.status === filter.toLowerCase().replace(" ", "-");
    return matchSearch && matchStatus;
  });

  return (
    <Layout>
      <div className="container py-10">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-3xl font-bold">Projects</h1>
              <p className="mt-1 text-muted-foreground">Discover projects and find teams to join</p>
            </div>
            <Button onClick={() => setModalOpen(true)}>Create Project</Button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects or tech stack..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-1.5">
            {statuses.map((s) => (
              <Button
                key={s}
                size="sm"
                variant={filter === s ? "default" : "outline"}
                onClick={() => setFilter(s)}
                className="text-xs"
              >
                {s}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">No projects found matching your search.</p>
        )}
      </div>
      <CreateProjectModal open={modalOpen} onOpenChange={setModalOpen} />
    </Layout>
  );
}

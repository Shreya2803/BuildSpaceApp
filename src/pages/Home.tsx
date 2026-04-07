import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FeedCard } from "@/components/cards/FeedCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { OpportunityCard } from "@/components/cards/OpportunityCard";
import { DeveloperCard } from "@/components/cards/DeveloperCard";
import { feedItems, projects, opportunities, developers } from "@/data/mock";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <Layout>
      <section className="py-8">
        <div className="container">
          <Tabs defaultValue="feed" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="feed">Feed</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
              <TabsTrigger value="developers">Developers</TabsTrigger>
            </TabsList>

            <TabsContent value="feed">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  {feedItems.map((item, i) => (
                    <FeedCard key={item.id} item={item} index={i} />
                  ))}
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display font-semibold">Trending Projects</h3>
                      <Link to="/projects" className="text-xs text-primary hover:underline flex items-center gap-1">
                        View all <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                    <div className="space-y-3">
                      {projects.slice(0, 3).map((p, i) => (
                        <ProjectCard key={p.id} project={p} index={i} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display font-semibold">Hot Opportunities</h3>
                      <Link to="/opportunities" className="text-xs text-primary hover:underline flex items-center gap-1">
                        View all <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                    <div className="space-y-3">
                      {opportunities.slice(0, 2).map((o, i) => (
                        <OpportunityCard key={o.id} opp={o} index={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="projects">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="opportunities">
              <div className="grid md:grid-cols-2 gap-4">
                {opportunities.map((o, i) => (
                  <OpportunityCard key={o.id} opp={o} index={i} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="developers">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {developers.map((d, i) => (
                  <DeveloperCard key={d.id} dev={d} index={i} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}

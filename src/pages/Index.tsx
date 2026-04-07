import { motion } from "framer-motion";
import { ArrowRight, Code2, FolderKanban, Sparkles, Users, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { AuthModal } from "@/components/AuthModal";

const stats = [
  { label: "Developers", value: "2,400+", icon: Users },
  { label: "Projects", value: "580+", icon: FolderKanban },
  { label: "Opportunities", value: "120+", icon: Zap },
];

export default function Index() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-10 right-1/4 h-48 w-48 rounded-full bg-accent/30 blur-3xl" />
        </div>
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Where student developers build together
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
              Find your team.{" "}
              <span className="text-gradient-primary">Build the future.</span>
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              BuildSpace connects student developers to collaborate on projects, join hackathon teams, and discover opportunities — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" className="gap-2" onClick={() => setAuthOpen(true)}>
                <Code2 className="h-4 w-4" /> Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setAuthOpen(true)}
              >
                Explore Projects
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center glass rounded-xl p-4 border border-primary-foreground/10">
                <s.icon className="h-5 w-5 mx-auto text-primary mb-1" />
                <div className="text-xl font-bold text-primary-foreground">{s.value}</div>
                <div className="text-xs text-primary-foreground/60">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Everything you need to collaborate</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">Stop juggling between LinkedIn, GitHub, Discord, and WhatsApp. BuildSpace brings it all together.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Developer Profiles", desc: "Showcase your skills, projects, and interests. Get discovered by teammates who need you." },
              { icon: FolderKanban, title: "Project Hub", desc: "Create projects, define tech stacks, and recruit collaborators. From idea to launch, together." },
              { icon: Zap, title: "Opportunity Board", desc: "Browse hackathons, team openings, and project roles. Never miss a chance to build." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </Layout>
  );
}

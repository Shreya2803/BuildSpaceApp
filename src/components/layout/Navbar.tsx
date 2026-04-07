import { Link, useLocation } from "react-router-dom";
import { Code2, Compass, FolderKanban, LayoutDashboard, Menu, Users, X, LogOut } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { AuthModal } from "@/components/AuthModal";
import { useNavigate } from "react-router-dom";
import { UserProfilePanel } from "@/components/UserProfilePanel";

const navItems = [
  { label: "Feed", path: "/home", icon: LayoutDashboard },
  { label: "Projects", path: "/projects", icon: FolderKanban },
  { label: "Opportunities", path: "/opportunities", icon: Compass },
  { label: "Developers", path: "/developers", icon: Users },
];

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border glass">
        <div className="container flex h-16 items-center justify-between">
          <Link to={isLoggedIn ? "/home" : "/"} className="flex items-center gap-2 font-display font-bold text-xl">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Code2 className="h-4 w-4 text-primary-foreground" />
            </div>
            <span>Build<span className="text-gradient-primary">Space</span></span>
          </Link>

          {/* Desktop nav - only show when logged in */}
          {isLoggedIn && (
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          )}

          <div className="hidden md:flex items-center gap-2">
            {isLoggedIn ? (
              <>
                <UserProfilePanel />
                <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2">
                  <LogOut className="h-4 w-4" /> Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" onClick={() => setAuthOpen(true)}>Sign In</Button>
                <Button size="sm" onClick={() => setAuthOpen(true)}>Get Started</Button>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-card p-4 animate-fade-in">
            {isLoggedIn && (
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const active = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            )}
            <div className="flex gap-2 mt-4">
              {isLoggedIn ? (
                <Button variant="outline" size="sm" className="flex-1" onClick={handleLogout}>Logout</Button>
              ) : (
                <>
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => { setAuthOpen(true); setMobileOpen(false); }}>Sign In</Button>
                  <Button size="sm" className="flex-1" onClick={() => { setAuthOpen(true); setMobileOpen(false); }}>Get Started</Button>
                </>
              )}
            </div>
          </div>
        )}
      </header>
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </>
  );
}

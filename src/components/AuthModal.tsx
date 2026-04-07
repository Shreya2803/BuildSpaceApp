import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Code2 } from "lucide-react";

type AuthView = "login" | "signup" | "forgot";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const [view, setView] = useState<AuthView>("login");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (view === "forgot") {
      setView("login");
      return;
    }
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string || "User";
    const email = formData.get("email") as string;
    const user = {
      name,
      email,
      skills: [],
      interests: [],
      projects: [],
    };
    login(user);
    onOpenChange(false);
    navigate("/home");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Code2 className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl">
              Build<span className="text-gradient-primary">Space</span>
            </span>
          </div>
          <DialogTitle className="text-center">
            {view === "login" && "Welcome back"}
            {view === "signup" && "Create your account"}
            {view === "forgot" && "Reset your password"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          {view === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>

          {view !== "forgot" && (
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>
          )}

          {view === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" placeholder="••••••••" required />
            </div>
          )}

          <Button type="submit" className="w-full">
            {view === "login" && "Sign In"}
            {view === "signup" && "Create Account"}
            {view === "forgot" && "Send Reset Link"}
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground space-y-1 mt-2">
          {view === "login" && (
            <>
              <button onClick={() => setView("forgot")} className="text-primary hover:underline block mx-auto">
                Forgot password?
              </button>
              <p>
                Don't have an account?{" "}
                <button onClick={() => setView("signup")} className="text-primary hover:underline">
                  Sign up
                </button>
              </p>
            </>
          )}
          {view === "signup" && (
            <p>
              Already have an account?{" "}
              <button onClick={() => setView("login")} className="text-primary hover:underline">
                Sign in
              </button>
            </p>
          )}
          {view === "forgot" && (
            <p>
              Remember your password?{" "}
              <button onClick={() => setView("login")} className="text-primary hover:underline">
                Back to sign in
              </button>
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

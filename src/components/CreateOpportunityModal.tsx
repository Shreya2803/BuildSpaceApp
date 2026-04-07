import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, Briefcase, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

interface CreateOpportunityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const iconOptions = [
  { icon: Trophy, label: "Hackathon", value: "hackathon" },
  { icon: Briefcase, label: "Hiring", value: "hiring" },
  { icon: UserPlus, label: "Looking for Teammate", value: "teammate" },
];

export function CreateOpportunityModal({ open, onOpenChange }: CreateOpportunityModalProps) {
  const [formData, setFormData] = useState({
    headline: "",
    category: "",
    icon: "",
    content: "",
    skills: "",
    deadline: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating opportunity:", formData);
    // TODO: Implement opportunity creation logic
    onOpenChange(false);
    setFormData({ headline: "", category: "", icon: "", content: "", skills: "", deadline: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleIconSelect = (iconValue: string) => {
    setFormData(prev => ({ ...prev, icon: iconValue }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Opportunity</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="headline" className="font-bold">Headline</Label>
            <Input
              id="headline"
              value={formData.headline}
              onChange={(e) => handleChange("headline", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="category">Tag/Category</Label>
            <Select value={formData.category} onValueChange={(value) => handleChange("category", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hackathon">Hackathon</SelectItem>
                <SelectItem value="hiring">Hiring</SelectItem>
                <SelectItem value="teammate">Looking for Teammate</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Icon</Label>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {iconOptions.map(({ icon: Icon, label, value }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleIconSelect(value)}
                  className={cn(
                    "flex flex-col items-center gap-2 p-3 rounded-lg border transition-colors",
                    formData.icon === value
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-xs text-center">{label}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => handleChange("content", e.target.value)}
              placeholder="Describe your opportunity..."
              required
            />
          </div>
          <div>
            <Label htmlFor="skills">Skills Required (comma-separated)</Label>
            <Input
              id="skills"
              value={formData.skills}
              onChange={(e) => handleChange("skills", e.target.value)}
              placeholder="e.g., React, Node.js, Python"
            />
          </div>
          <div>
            <Label htmlFor="deadline">Deadline</Label>
            <Input
              id="deadline"
              type="date"
              value={formData.deadline}
              onChange={(e) => handleChange("deadline", e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Create Opportunity</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
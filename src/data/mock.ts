export interface Developer {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  skills: string[];
  interests: string[];
  projects: number;
  connections: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  owner: { name: string; avatar: string };
  members: number;
  maxMembers: number;
  status: "recruiting" | "in-progress" | "completed";
  createdAt: string;
}

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  type: "teammate" | "hiring" | "hackathon";
  skills: string[];
  postedBy: { name: string; avatar: string };
  postedAt: string;
  responses: number;
}

export interface FeedItem {
  id: string;
  type: "project" | "opportunity" | "update";
  title: string;
  description: string;
  user: { name: string; avatar: string };
  timestamp: string;
  tags: string[];
}

const avatars = [
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Casey",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Morgan",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Riley",
];

export const developers: Developer[] = [
  { id: "1", name: "Alex Chen", username: "alexchen", avatar: avatars[0], bio: "Full-stack developer passionate about open-source. Building tools that matter.", skills: ["React", "Node.js", "TypeScript", "PostgreSQL"], interests: ["Open Source", "DevTools", "AI"], projects: 12, connections: 84 },
  { id: "2", name: "Jordan Lee", username: "jordanlee", avatar: avatars[1], bio: "ML engineer & hackathon enthusiast. Always looking for the next challenge.", skills: ["Python", "TensorFlow", "FastAPI", "Docker"], interests: ["Machine Learning", "Hackathons", "Data Science"], projects: 8, connections: 56 },
  { id: "3", name: "Sam Rivera", username: "samrivera", avatar: avatars[2], bio: "Mobile dev & UI designer. Making apps people love to use.", skills: ["React Native", "Figma", "Swift", "Kotlin"], interests: ["Mobile Dev", "UI/UX", "Startups"], projects: 15, connections: 120 },
  { id: "4", name: "Casey Kim", username: "caseykim", avatar: avatars[3], bio: "Backend architect focused on scalable distributed systems.", skills: ["Go", "Kubernetes", "AWS", "Rust"], interests: ["Infrastructure", "Cloud", "Performance"], projects: 6, connections: 45 },
  { id: "5", name: "Morgan Patel", username: "morganpatel", avatar: avatars[4], bio: "Security researcher and CTF player. Breaking things to make them better.", skills: ["Cybersecurity", "Python", "C", "Linux"], interests: ["Security", "CTF", "Reverse Engineering"], projects: 9, connections: 67 },
  { id: "6", name: "Riley Zhang", username: "rileyzhang", avatar: avatars[5], bio: "Frontend wizard crafting pixel-perfect experiences.", skills: ["Vue.js", "Three.js", "CSS", "WebGL"], interests: ["Creative Coding", "3D Web", "Animation"], projects: 11, connections: 93 },
];

export const projects: Project[] = [
  { id: "1", title: "CodeCollab IDE", description: "A real-time collaborative code editor with built-in video chat and AI code review.", techStack: ["React", "WebRTC", "Node.js", "MongoDB"], owner: { name: "Alex Chen", avatar: avatars[0] }, members: 3, maxMembers: 5, status: "recruiting", createdAt: "2 days ago" },
  { id: "2", title: "EcoTrack", description: "Carbon footprint tracker for university campuses using IoT sensors and ML predictions.", techStack: ["Python", "TensorFlow", "React", "PostgreSQL"], owner: { name: "Jordan Lee", avatar: avatars[1] }, members: 4, maxMembers: 6, status: "in-progress", createdAt: "1 week ago" },
  { id: "3", title: "StudyBuddy AR", description: "Augmented reality study companion that brings textbook diagrams to life.", techStack: ["React Native", "ARKit", "Three.js", "Firebase"], owner: { name: "Sam Rivera", avatar: avatars[2] }, members: 2, maxMembers: 4, status: "recruiting", createdAt: "3 days ago" },
  { id: "4", title: "MeshNet", description: "Decentralized mesh networking protocol for campus-wide peer-to-peer communication.", techStack: ["Rust", "WebRTC", "Go", "Docker"], owner: { name: "Casey Kim", avatar: avatars[3] }, members: 5, maxMembers: 5, status: "in-progress", createdAt: "2 weeks ago" },
  { id: "5", title: "SecureVote", description: "Blockchain-based voting system for student government elections.", techStack: ["Solidity", "React", "Node.js", "Ethereum"], owner: { name: "Morgan Patel", avatar: avatars[4] }, members: 3, maxMembers: 4, status: "recruiting", createdAt: "5 days ago" },
  { id: "6", title: "ArtGen AI", description: "AI-powered generative art platform using GANs and neural style transfer.", techStack: ["Python", "PyTorch", "Vue.js", "WebGL"], owner: { name: "Riley Zhang", avatar: avatars[5] }, members: 2, maxMembers: 3, status: "completed", createdAt: "1 month ago" },
];

export const opportunities: Opportunity[] = [
  { id: "1", title: "Looking for React dev for hackathon team", description: "Joining HackMIT next month. Need a strong frontend developer who can build fast UIs. Prize pool is $10k!", type: "hackathon", skills: ["React", "TypeScript", "Tailwind CSS"], postedBy: { name: "Alex Chen", avatar: avatars[0] }, postedAt: "2 hours ago", responses: 12 },
  { id: "2", title: "ML Engineer needed for climate tech project", description: "EcoTrack is expanding. Looking for someone experienced with time-series forecasting and sensor data processing.", type: "hiring", skills: ["Python", "TensorFlow", "Data Science"], postedBy: { name: "Jordan Lee", avatar: avatars[1] }, postedAt: "6 hours ago", responses: 8 },
  { id: "3", title: "iOS developer for AR study app", description: "Building an AR study companion. Need help with ARKit integration and 3D model rendering.", type: "teammate", skills: ["Swift", "ARKit", "3D Modeling"], postedBy: { name: "Sam Rivera", avatar: avatars[2] }, postedAt: "1 day ago", responses: 5 },
  { id: "4", title: "DevOps engineer for mesh networking project", description: "MeshNet needs someone to set up CI/CD pipelines and containerize our microservices.", type: "hiring", skills: ["Docker", "Kubernetes", "CI/CD"], postedBy: { name: "Casey Kim", avatar: avatars[3] }, postedAt: "2 days ago", responses: 15 },
  { id: "5", title: "Hackathon team for ETHGlobal", description: "Forming a team for ETHGlobal. Looking for Solidity devs and a designer. Let's build something revolutionary!", type: "hackathon", skills: ["Solidity", "Web3", "UI/UX"], postedBy: { name: "Morgan Patel", avatar: avatars[4] }, postedAt: "3 days ago", responses: 22 },
];

export const feedItems: FeedItem[] = [
  { id: "1", type: "project", title: "New project: CodeCollab IDE", description: "Alex Chen just launched a new project and is looking for collaborators!", user: { name: "Alex Chen", avatar: avatars[0] }, timestamp: "2 hours ago", tags: ["React", "WebRTC"] },
  { id: "2", type: "opportunity", title: "Hackathon team forming!", description: "Morgan Patel is building a team for ETHGlobal. Solidity and Web3 skills needed.", user: { name: "Morgan Patel", avatar: avatars[4] }, timestamp: "3 hours ago", tags: ["Hackathon", "Web3"] },
  { id: "3", type: "update", title: "EcoTrack hits 1000 users", description: "Jordan Lee's climate tech project just crossed 1000 active users on campus!", user: { name: "Jordan Lee", avatar: avatars[1] }, timestamp: "5 hours ago", tags: ["Milestone", "Climate Tech"] },
  { id: "4", type: "project", title: "StudyBuddy AR needs testers", description: "Sam Rivera is looking for beta testers for their AR study companion app.", user: { name: "Sam Rivera", avatar: avatars[2] }, timestamp: "8 hours ago", tags: ["AR", "Mobile"] },
  { id: "5", type: "opportunity", title: "Paid internship at startup", description: "Casey Kim's mesh networking startup is offering summer internships for backend devs.", user: { name: "Casey Kim", avatar: avatars[3] }, timestamp: "1 day ago", tags: ["Internship", "Backend"] },
  { id: "6", type: "update", title: "ArtGen AI featured on Product Hunt", description: "Riley Zhang's generative art platform made it to the top 5 on Product Hunt!", user: { name: "Riley Zhang", avatar: avatars[5] }, timestamp: "1 day ago", tags: ["AI", "Launch"] },
];

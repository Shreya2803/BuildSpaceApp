# BuildSpace

A modern platform connecting developers, projects, and opportunities in the tech ecosystem. Built for developers, by developers.

![BuildSpace](https://buildspaceapp.netlify.app/)

## 🚀 Features

### For Developers
- **Discover Projects**: Browse trending projects and find teams to join
- **Connect with Peers**: Network with other developers and build connections
- **Explore Opportunities**: Find hackathons, job openings, and collaboration opportunities
- **Showcase Skills**: Display your tech stack and project contributions

### For Project Creators
- **Create Projects**: Launch new projects and recruit team members
- **Manage Teams**: Set project requirements, skills needed, and team size
- **Track Progress**: Update project status (Recruiting → In Progress → Completed)

### For Opportunity Posters
- **Post Opportunities**: Share hackathons, job openings, or team recruitment needs
- **Customize Categories**: Choose from Hackathon, Hiring, or Looking for Teammate
- **Set Deadlines**: Add time-sensitive opportunities with clear deadlines

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Backend**: Python Flask (in development)
- **Database**: SQLite (planned)

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or bun
- Python 3.8+ (for backend)

### Frontend Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/buildspace.git
cd buildspace
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun run dev
```

4. Open [http://localhost:8082](http://localhost:8082) in your browser.

### Backend Setup (Optional)

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install Python dependencies:
```bash
pip install -r requirements.txt
```

4. Run the Flask server:
```bash
python app.py
```

## 🏗️ Project Structure

```
buildspace/
├── src/
│   ├── components/
│   │   ├── cards/          # Card components for feed, projects, etc.
│   │   ├── layout/         # Layout components (Navbar, Layout)
│   │   ├── ui/             # Reusable UI components (shadcn/ui)
│   │   └── AuthModal.tsx   # Authentication modal
│   ├── context/            # React contexts (AuthContext)
│   ├── data/               # Mock data and types
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components
│   └── App.tsx             # Main app component
├── backend/                # Python Flask backend
├── public/                 # Static assets
└── package.json            # Dependencies and scripts
```

## 🎨 UI Components

The app uses shadcn/ui for consistent, accessible components:

- **Dialog**: Modals for creating projects/opportunities
- **Button**: Various button styles and states
- **Input/Textarea**: Form inputs with validation
- **Select**: Dropdown menus
- **Tabs**: Navigation between different sections
- **Cards**: Display feed items, projects, developers

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests (when implemented)

## 🌟 Key Features Implemented

### ✅ Completed
- Responsive landing page with tabs (Feed, Projects, Opportunities, Developers)
- Project creation modal with form validation
- Developer connection requests
- Feed interaction (request buttons)
- Authentication modal (UI ready)
- Modern UI with dark/light mode support
- Mobile-responsive design
- Backend API integration
- User profiles and authentication
- Advanced search and filtering
- Real user authentication



---

**Built with ❤️ for the developer community**



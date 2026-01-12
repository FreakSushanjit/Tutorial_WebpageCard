import './App.css'
import Section1 from './components/Section1/Section1.jsx'
import Section2 from './components/Section2/Section2.jsx'
function App() {
 
const users = [
  {
    img: "https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "A dedicated professional focused on delivering consistent results while maintaining strong collaboration and communication within cross-functional teams.",
    text: "Satisfied",
    color: "green"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "An innovative thinker who enjoys solving real-world problems and improving systems that impact customers and internal workflows positively.",
    text: "Underbanked",
    color: "yellow"
  },
  {
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "A detail-oriented employee with a passion for accuracy, efficiency, and maintaining high standards across all assigned responsibilities.",
    text: "Motivated",
    color: "blue"
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "A growth-focused individual who continuously seeks learning opportunities while contributing meaningful ideas during team discussions.",
    text: "Engaged",
    color: "purple"
  },
  {
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "A reliable team member known for meeting deadlines, supporting peers, and adapting quickly to changing project requirements.",
    text: "Stable",
    color: "indigo"
  },
  {
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "A customer-centric professional who values empathy, clear communication, and long-term impact through thoughtful decision making.",
    text: "Empowered",
    color: "pink"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "A results-driven contributor who balances creativity with logic to build sustainable solutions under pressure.",
    text: "Resilient",
    color: "red"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "A proactive learner who embraces feedback and consistently improves skills to align with organizational goals.",
    text: "Upskilling",
    color: "teal"
  },
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "A collaborative professional who believes strong teamwork and transparency are key to successful outcomes.",
    text: "Collaborative",
    color: "cyan"
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "A disciplined employee who maintains focus, accountability, and integrity while managing multiple responsibilities effectively.",
    text: "Accountable",
    color: "orange"
  }
];


  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App

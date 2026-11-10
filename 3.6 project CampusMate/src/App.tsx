import { useMemo, useState } from "react";
import {
  Bell, BookOpen, CalendarDays, Check, ChevronDown, CircleHelp,
  Clock3, GraduationCap, LayoutDashboard, Menu, MessageCircle,
  Plus, Search, Send, Settings, Sparkles, Users, X
} from "lucide-react";

type Course = { code: string; name: string; credits: number; day: string; time: string; room: string };

const initialCourses: Course[] = [
  { code: "CSE 2205", name: "Computer Architecture", credits: 3, day: "Sun, Tue", time: "10:00 – 11:30 AM", room: "Room 402" },
  { code: "CSE 2207", name: "Data Communication", credits: 3, day: "Mon, Wed", time: "11:30 AM – 1:00 PM", room: "Room 305" },
  { code: "MAT 2203", name: "Discrete Mathematics", credits: 3, day: "Sun, Thu", time: "2:00 – 3:30 PM", room: "Room 210" }
];

const tasks = [
  { title: "Review binary number system", course: "Computer Architecture", date: "Today", done: false },
  { title: "Prepare networking lab report", course: "Data Communication", date: "Tomorrow", done: false },
  { title: "Practice set theory problems", course: "Discrete Mathematics", date: "Nov 13", done: true }
];

function App() {
  const [active, setActive] = useState("Overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi there! 👋 I’m your Campummate assistant. Ask me about your courses, study plan, or campus services." }
  ]);
  const [completed, setCompleted] = useState<string[]>(["Practice set theory problems"]);
  const [courses, setCourses] = useState(initialCourses);
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");

  const filteredCourses = useMemo(
    () => courses.filter(c => `${c.name} ${c.code}`.toLowerCase().includes(query.toLowerCase())),
    [courses, query]
  );

  const navItems = [
    { label: "Overview", icon: LayoutDashboard },
    { label: "Academic planner", icon: CalendarDays },
    { label: "Course registration", icon: BookOpen },
    { label: "AI helpdesk", icon: MessageCircle }
  ];

  function sendMessage() {
    const value = chatInput.trim();
    if (!value) return;
    setMessages(prev => [...prev, { from: "you", text: value },
      { from: "bot", text: "That’s a great question. I can help you organize your study tasks and understand campus information. For official course rules or deadlines, please confirm with your department." }]);
    setChatInput("");
  }

  function addCourse() {
    if (!courseName.trim() || !courseCode.trim()) return;
    setCourses(prev => [...prev, { code: courseCode.toUpperCase(), name: courseName, credits: 3, day: "To be announced", time: "To be announced", room: "TBA" }]);
    setCourseName(""); setCourseCode(""); setShowCourseForm(false);
  }

  const pageTitle = active === "Overview" ? "Good morning, Hanjala!" : active;

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="brand"><div className="brand-mark"><GraduationCap size={23} /></div><span>campum<span className="brand-blue">mate</span></span></div>
        <div className="workspace-label">YOUR CAMPUS</div>
        <nav>
          {navItems.map(item => {
            const Icon = item.icon;
            return <button key={item.label} className={`nav-link ${active === item.label ? "active" : ""}`}
              onClick={() => { setActive(item.label); setMobileOpen(false); }}>
              <Icon size={19} /><span>{item.label}</span>{item.label === "AI helpdesk" && <span className="new-dot" />}
            </button>;
          })}
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card">
            <div className="help-icon"><Sparkles size={18} /></div>
            <strong>Need a hand?</strong>
            <p>Your campus companion is always ready to help.</p>
            <button onClick={() => setActive("AI helpdesk")}>Ask Campummate <span>→</span></button>
          </div>
          <button className="nav-link muted"><Settings size={19} /><span>Settings</span></button>
          <div className="profile">
            <div className="avatar">HS</div><div className="profile-text"><strong>Hanjala Sumon</strong><small>CSE · 4th Semester</small></div><ChevronDown size={16} />
          </div>
        </div>
      </aside>

      {mobileOpen && <button className="mobile-scrim" aria-label="Close menu" onClick={() => setMobileOpen(false)} />}
      <main className="main-area">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu /></button>
          <div className="breadcrumb">Workspace <span>/</span> <b>{active}</b></div>
          <div className="top-actions">
            <div className="semester-pill"><span className="status-dot" /> Fall 2026 <ChevronDown size={14} /></div>
            <button className="icon-button" aria-label="Notifications"><Bell size={19} /><i /></button>
            <div className="avatar small">HS</div>
          </div>
        </header>

        <div className="content">
          <section className="welcome-row">
            <div><div className="eyebrow">TUESDAY, NOVEMBER 10, 2026</div><h1>{pageTitle}</h1>
              <p>{active === "Overview" ? "A little progress each day adds up to big results. Here’s your campus at a glance." : "Everything you need to stay organized and move forward."}</p></div>
            {active === "Overview" && <button className="primary-btn" onClick={() => setActive("Academic planner")}><Plus size={17} /> Plan my day</button>}
          </section>

          {active === "Overview" && <>
            <section className="stats-grid">
              <Stat icon={<BookOpen />} label="Enrolled courses" value={String(courses.length).padStart(2, "0")} note="This semester" />
              <Stat icon={<CalendarDays />} label="Upcoming classes" value="03" note="Today · 2 remaining" />
              <Stat icon={<Check />} label="Tasks completed" value={`${completed.length}/3`} note="Keep it up!" />
              <Stat icon={<Clock3 />} label="Study time" value="12.5h" note="This week" />
            </section>
            <div className="dashboard-grid">
              <section className="panel schedule-panel">
                <div className="panel-heading"><div><h2>Today’s schedule</h2><p>Your classes and activities</p></div><button className="text-btn" onClick={() => setActive("Academic planner")}>View planner <span>→</span></button></div>
                <div className="schedule-date"><div className="date-box"><b>10</b><span>NOV</span></div><div><strong>Tuesday</strong><small>3 classes scheduled</small></div></div>
                {courses.slice(0, 3).map((c, i) => <div className="schedule-item" key={c.code}><div className={`time-line line-${i}`} /><div className="schedule-time">{["10:00 AM","11:30 AM","02:00 PM"][i]}</div><div className="schedule-info"><strong>{c.name}</strong><span>{c.code} · {c.room}</span></div><span className="class-tag">{i === 0 ? "Lecture" : i === 1 ? "Lecture" : "Tutorial"}</span></div>)}
              </section>
              <section className="panel tasks-panel">
                <div className="panel-heading"><div><h2>My tasks</h2><p>Stay on top of your work</p></div><button className="more-btn">•••</button></div>
                <div className="task-list">{tasks.map(t => <label className="task-row" key={t.title}><input type="checkbox" checked={completed.includes(t.title)} onChange={() => setCompleted(prev => prev.includes(t.title) ? prev.filter(x => x !== t.title) : [...prev, t.title])} /><span className="task-copy"><strong className={completed.includes(t.title) ? "task-done" : ""}>{t.title}</strong><small>{t.course}</small></span><span className={`task-date ${t.date === "Today" ? "today" : ""}`}>{t.date}</span></label>)}</div>
                <button className="add-task" onClick={() => setActive("Academic planner")}><Plus size={16} /> Add a task</button>
              </section>
            </div>
            <section className="panel courses-panel">
              <div className="panel-heading"><div><h2>My courses</h2><p>Your registered courses this semester</p></div><button className="text-btn" onClick={() => setActive("Course registration")}>Manage courses <span>→</span></button></div>
              <div className="course-cards">{courses.slice(0, 3).map((c, i) => <div className="course-card" key={c.code}><div className={`course-symbol symbol-${i}`}><BookOpen size={19} /></div><div><strong>{c.name}</strong><small>{c.code} · {c.credits} credits</small></div><span className="course-arrow">↗</span></div>)}</div>
            </section>
          </>}

          {active === "Academic planner" && <div className="single-column">
            <section className="panel"><div className="panel-heading"><div><h2>Your study checklist</h2><p>Track your academic work for this week.</p></div><span className="progress-label">{completed.length} of 3 completed</span></div>
              <div className="progress-track"><div style={{ width: `${completed.length / 3 * 100}%` }} /></div>
              {tasks.map(t => <label className="task-row planner-task" key={t.title}><input type="checkbox" checked={completed.includes(t.title)} onChange={() => setCompleted(prev => prev.includes(t.title) ? prev.filter(x => x !== t.title) : [...prev, t.title])} /><span className="task-copy"><strong className={completed.includes(t.title) ? "task-done" : ""}>{t.title}</strong><small>{t.course}</small></span><span className="task-date">{t.date}</span></label>)}
            </section>
            <section className="panel"><div className="panel-heading"><div><h2>Weekly class plan</h2><p>Quick view of your registered courses.</p></div></div>{courses.map(c => <div className="schedule-item" key={c.code}><div className="time-line" /><div className="schedule-time">{c.day}</div><div className="schedule-info"><strong>{c.name}</strong><span>{c.code} · {c.time} · {c.room}</span></div></div>)}</section>
          </div>}

          {active === "Course registration" && <section className="panel registration-panel"><div className="panel-heading"><div><h2>Course registration</h2><p>Keep track of the courses you plan to take.</p></div><button className="primary-btn" onClick={() => setShowCourseForm(!showCourseForm)}><Plus size={17} /> Add course</button></div>
            {showCourseForm && <div className="course-form"><input value={courseCode} onChange={e => setCourseCode(e.target.value)} placeholder="Course code (e.g. CSE 2210)" /><input value={courseName} onChange={e => setCourseName(e.target.value)} placeholder="Course name" /><button className="primary-btn" onClick={addCourse}>Save course</button><button className="cancel-btn" onClick={() => setShowCourseForm(false)}><X size={17} /></button></div>}
            <div className="search-box"><Search size={17} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by course name or code..." /></div>
            <div className="table-wrap"><table><thead><tr><th>COURSE</th><th>CREDITS</th><th>CLASS DAYS</th><th>TIME</th><th>ROOM</th></tr></thead><tbody>{filteredCourses.map(c => <tr key={c.code}><td><strong>{c.name}</strong><small>{c.code}</small></td><td>{c.credits}</td><td>{c.day}</td><td>{c.time}</td><td>{c.room}</td></tr>)}</tbody></table>{filteredCourses.length === 0 && <p className="empty-state">No courses found. Try another search.</p>}</div>
            <div className="notice"><CircleHelp size={18} /><span><strong>Registration note</strong> This demo stores courses in your browser session only. Confirm official course availability and registration with your department.</span></div>
          </section>}

          {active === "AI helpdesk" && <section className="panel chat-panel"><div className="chat-heading"><div className="ai-avatar"><Sparkles size={20} /></div><div><h2>Campummate AI</h2><p><span className="status-dot" /> Online · Your campus assistant</p></div></div>
            <div className="chat-messages">{messages.map((m, i) => <div className={`message ${m.from === "you" ? "message-you" : ""}`} key={i}><div className="message-avatar">{m.from === "you" ? "HS" : <Sparkles size={15} />}</div><div className="message-bubble">{m.text}</div></div>)}</div>
            <div className="suggestions"><span>Try asking:</span>{["Help me make a study plan","Explain a CSE topic","How can I manage my courses?"].map(s => <button key={s} onClick={() => setChatInput(s)}>{s}</button>)}</div>
            <div className="chat-input"><input value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} placeholder="Ask anything about your campus..." /><button onClick={sendMessage} aria-label="Send message"><Send size={18} /></button></div>
            <p className="chat-disclaimer">AI responses are for general guidance. Always verify official academic information.</p>
          </section>}
          <footer>© 2026 Campummate <span>Made for a smarter campus experience.</span></footer>
        </div>
      </main>
    </div>
  );
}

function Stat({ icon, label, value, note }: { icon: React.ReactNode; label: string; value: string; note: string }) {
  return <div className="stat-card"><div className="stat-top"><span className="stat-icon">{icon}</span><span className="stat-note">{note}</span></div><div className="stat-value">{value}</div><div className="stat-label">{label}</div></div>;
}

export default App;

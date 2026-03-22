import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, setDoc } from 'firebase/firestore';
import acmData from '../../data/acmData.json';
import coursesData from '../../data/courses.json';
import './ControlCenter.css';

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: '⬛' },
  { id: 'tasks', label: 'Executive Tasks', icon: '📋' },
  { id: 'members', label: 'Member CRM', icon: '👥' },
  { id: 'events', label: 'Events & Workshops', icon: '📅' },
  { id: 'meetings', label: 'Meeting Minutes', icon: '📝' },
  { id: 'spotlight', label: 'Spotlight Editor', icon: '⭐' },
  { id: 'access', label: 'Access Management', icon: '🛡️' },
  { id: 'resources', label: 'Resource Manager', icon: '📚' },
  { id: 'analytics', label: 'Club Analytics', icon: '📊' },
];

const BOARD_ROLES = [
  'President',
  'Vice President',
  'HR',
  'General Secretary',
  'Trainer',
  'Marketing Manager',
  'Event Manager',
  'External Relations Manager',
  'Treasurer'
];

const SUBJECT_KEYS = Object.keys(coursesData);

const getBadgeClass = (type) => {
  if (!type) return 'cc-badge cc-badge-member';
  const t = type.toLowerCase();
  if (t === 'competition') return 'cc-badge cc-badge-competition';
  if (t === 'hackathon') return 'cc-badge cc-badge-hackathon';
  if (t === 'project deadline') return 'cc-badge cc-badge-deadline';
  return 'cc-badge cc-badge-workshop';
};

const ControlCenter = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
 
  // Live Firestore Data States
  const [members, setMembers] = useState([]);
  const [events, setEvents] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [allowedMembers, setAllowedMembers] = useState([]);
  const [spotlight, setSpotlight] = useState({ name: 'Loading...', track: '', reason: '', avatar: '' });

  // Form states
  const [spotlightDraft, setSpotlightDraft] = useState({ name: '', track: '', reason: '', avatar: '' });
  const [newEvent, setNewEvent] = useState({ title: '', date: '', type: 'Competition', mentor: '' });
  const [newTask, setNewTask] = useState({ title: '', assignedTo: 'Trainer', status: 'todo' });
  const [newMeeting, setNewMeeting] = useState({ title: '', date: '', content: '' });
  const [selectedSubject, setSelectedSubject] = useState('analyse');
  const [newResource, setNewResource] = useState({ title: '', url: '', category: 'courses' });
  const [subjectData, setSubjectData] = useState(null);
  const [newAdmin, setNewAdmin] = useState({ email: '', role: 'President' });
  const [newMember, setNewMember] = useState('');
  const [showEventForm, setShowEventForm] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showMeetingForm, setShowMeetingForm] = useState(false);
  const [showAdminForm, setShowAdminForm] = useState(false);
  const [showMemberForm, setShowMemberForm] = useState(false);
  const [isMigrating, setIsMigrating] = useState(false);

  const userName = auth.currentUser?.displayName?.split(' ')[0] || 'Admin';
  const userInitials = auth.currentUser?.displayName?.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'A';

  // Fetch everything from Firestore on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Admins
        const adminSnap = await getDocs(collection(db, 'admins'));
        setAdmins(adminSnap.docs.map(d => ({ id: d.id, ...d.data() })));

        // Fetch Whitelisted Emails
        const memberSnap = await getDocs(collection(db, 'members'));
        setAllowedMembers(memberSnap.docs.map(d => ({ id: d.id, ...d.data() })));

        // Fetch Events & Workshops
        const eventSnap = await getDocs(collection(db, 'events'));
        setEvents(eventSnap.docs.map(d => ({ id: d.id, ...d.data() })));

        // Fetch Tasks
        const taskSnap = await getDocs(collection(db, 'tasks'));
        setTasks(taskSnap.docs.map(d => ({ id: d.id, ...d.data() })));

        // Fetch Meetings
        const meetingSnap = await getDocs(collection(db, 'meetings'));
        setMeetings(meetingSnap.docs.map(d => ({ id: d.id, ...d.data() })));

        // Fetch Feedback
        const feedbackSnap = await getDocs(collection(db, 'feedback'));
        setFeedback(feedbackSnap.docs.map(d => ({ id: d.id, ...d.data() })));

        // Fetch Member Stats (XP)
        const statsSnap = await getDocs(collection(db, 'member_stats'));
        setMembers(statsSnap.docs.map(d => ({ id: d.id, ...d.data() })));

        // Fetch Spotlight
        const spotlightSnap = await getDocs(collection(db, 'spotlight'));
        if (!spotlightSnap.empty) {
          const sData = spotlightSnap.docs[0].data();
          setSpotlight({ id: spotlightSnap.docs[0].id, ...sData });
          setSpotlightDraft(sData);
        } else {
          setSpotlight(acmData.coderOfTheMonth);
          setSpotlightDraft(acmData.coderOfTheMonth);
        }
      } catch (e) {
        console.error("Firestore Fetch Error:", e);
      }
    };
    fetchData();
  }, []);

  // Fetch Subject Data when Resource Manager opens or selection changes
  useEffect(() => {
    if (activeSection === 'resources' && selectedSubject) {
      const fetchSub = async () => {
        const snap = await getDocs(collection(db, 'courses'));
        const target = snap.docs.find(d => d.id === selectedSubject);
        if (target) setSubjectData(target.data());
        else setSubjectData(null);
      };
      fetchSub();
    }
  }, [activeSection, selectedSubject]);

  const handleLogout = async () => {
    localStorage.removeItem('acm_role');
    await signOut(auth);
    navigate('/login');
  };

  const addAdmin = async () => {
    if (!newAdmin.email.trim()) return;
    const adminData = { email: newAdmin.email.trim().toLowerCase(), role: newAdmin.role };
    const docRef = await addDoc(collection(db, 'admins'), adminData);
    setAdmins(prev => [...prev, { id: docRef.id, ...adminData }]);
    setNewAdmin({ email: '', role: 'President' });
    setShowAdminForm(false);
  };

  const removeAdmin = async (id) => {
    await deleteDoc(doc(db, 'admins', id));
    setAdmins(prev => prev.filter(a => a.id !== id));
  };

  const addMember = async () => {
    if (!newMember.trim()) return;
    const docRef = await addDoc(collection(db, 'members'), { email: newMember.trim().toLowerCase() });
    setAllowedMembers(prev => [...prev, { id: docRef.id, email: newMember.trim().toLowerCase() }]);
    setNewMember('');
    setShowMemberForm(false);
  };

  const removeMember = async (id) => {
    await deleteDoc(doc(db, 'members', id));
    setAllowedMembers(prev => prev.filter(m => m.id !== id));
  };

  const addEvent = async () => {
    if (!newEvent.title.trim()) return;
    try {
      const docRef = await addDoc(collection(db, 'events'), {
        ...newEvent,
        createdAt: new Date()
      });
      setEvents(prev => [...prev, { ...newEvent, id: docRef.id }]);
      setNewEvent({ title: '', date: '', type: 'Competition', mentor: '' });
      setShowEventForm(false);
    } catch (e) { console.error(e); }
  };

  const addTask = async () => {
    if (!newTask.title.trim()) return;
    try {
      const taskData = { ...newTask, createdAt: new Date() };
      const docRef = await addDoc(collection(db, "tasks"), taskData);
      setTasks(prev => [...prev, { ...taskData, id: docRef.id }]);
      setNewTask({ title: '', assignedTo: 'Trainer', status: 'todo' });
      setShowTaskForm(false);
    } catch (e) { console.error(e); }
  };

  const updateTaskStatus = async (id, newStatus) => {
    try {
      await updateDoc(doc(db, "tasks", id), { status: newStatus });
      setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
    } catch (e) { console.error(e); }
  };

  const removeTask = async (id) => {
    try {
      await deleteDoc(doc(db, "tasks", id));
      setTasks(prev => prev.filter(t => t.id !== id));
    } catch (e) { console.error(e); }
  };

  const addMeeting = async () => {
    if (!newMeeting.title.trim() || !newMeeting.content.trim()) return;
    try {
      const meetData = { ...newMeeting, createdAt: new Date() };
      const docRef = await addDoc(collection(db, "meetings"), meetData);
      setMeetings(prev => [...prev, { ...meetData, id: docRef.id }]);
      setNewMeeting({ title: '', date: '', content: '' });
      setShowMeetingForm(false);
    } catch (e) { console.error(e); }
  };

  const removeMeeting = async (id) => {
    try {
      await deleteDoc(doc(db, "meetings", id));
      setMeetings(prev => prev.filter(m => m.id !== id));
    } catch (e) { console.error(e); }
  };

  const removeEvent = async (id) => {
    try {
      await deleteDoc(doc(db, 'events', id));
      setEvents(prev => prev.filter(e => e.id !== id));
    } catch (e) { console.error(e); }
  };

  const updateMemberXP = async (id, currentXP) => {
    try {
      const newXP = currentXP + 100;
      await updateDoc(doc(db, 'member_stats', id), { xp: newXP });
      setMembers(prev => prev.map(m => m.id === id ? { ...m, xp: newXP } : m));
    } catch (e) { console.error(e); }
  };

  const addResource = async () => {
    if (!newResource.title.trim() || !newResource.url.trim()) return;
    try {
      const category = newResource.category; // e.g., 'courses', 'td'
      const updatedList = [...(subjectData[category] || []), { title: newResource.title, url: newResource.url }];
      await updateDoc(doc(db, 'courses', selectedSubject), { [category]: updatedList });
      setSubjectData(prev => ({ ...prev, [category]: updatedList }));
      setNewResource(p => ({ ...p, title: '', url: '' }));
    } catch (e) { console.error(e); }
  };

  const removeResource = async (category, index) => {
    try {
      const updatedList = subjectData[category].filter((_, i) => i !== index);
      await updateDoc(doc(db, 'courses', selectedSubject), { [category]: updatedList });
      setSubjectData(prev => ({ ...prev, [category]: updatedList }));
    } catch (e) { console.error(e); }
  };

  const publishSpotlight = async () => {
    try {
      if (spotlight?.id) {
        await updateDoc(doc(db, 'spotlight', spotlight.id), spotlightDraft);
        setSpotlight({ ...spotlightDraft, id: spotlight.id });
      } else {
        const docRef = await addDoc(collection(db, 'spotlight'), spotlightDraft);
        setSpotlight({ ...spotlightDraft, id: docRef.id });
      }
      alert("Spotlight published successfully!");
    } catch (e) { console.error(e); }
  };

  const migrateData = async () => {
    if (!window.confirm("This will push all local acmData.json to Firestore. Proceed?")) return;
    setIsMigrating(true);
    try {
      // Migrate Events
      for (const e of acmData.calendar) {
        await addDoc(collection(db, 'events'), { ...e, type: e.type });
      }
      for (const w of acmData.workshops) {
        await addDoc(collection(db, 'events'), { ...w, type: 'Workshop' });
      }
      // Migrate Members Stats
      for (const m of acmData.members) {
        await addDoc(collection(db, 'member_stats'), m);
      }
      // Migrate Spotlight
      await addDoc(collection(db, 'spotlight'), acmData.coderOfTheMonth);
      
      // Migrate Courses (NEW)
      for (const [key, data] of Object.entries(coursesData)) {
        await setDoc(doc(db, 'courses', key), data);
      }
      
      alert("Migration complete! Please refresh the page.");
    } catch (e) {
      console.error(e);
      alert("Migration failed.");
    } finally {
      setIsMigrating(false);
    }
  };

  const currentSection = NAV_ITEMS.find(n => n.id === activeSection);

  return (
    <div className="cc-root">
      {/* SIDEBAR */}
      <aside className="cc-sidebar">
        <div className="cc-sidebar-brand">
          <h2>👑 Control Center</h2>
          <p>ACM Executive Board</p>
        </div>
        <nav className="cc-nav">
          <div className="cc-nav-section">Dashboard</div>
          {NAV_ITEMS.slice(0, 1).map(item => (
            <div
              key={item.id}
              className={`cc-nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </div>
          ))}
          <div className="cc-nav-section">Management</div>
          {NAV_ITEMS.slice(1, 4).map(item => (
            <div
              key={item.id}
              className={`cc-nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </div>
          ))}
          <div className="cc-nav-section">System</div>
          {NAV_ITEMS.slice(4).map(item => (
            <div
              key={item.id}
              className={`cc-nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </nav>
        <div className="cc-sidebar-footer">
          <button className="cc-exit-btn" style={{ color: '#e05555', borderColor: 'rgba(224,85,85,0.2)' }} onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="cc-main">
        {/* TOPBAR */}
        <div className="cc-topbar">
          <div className="cc-topbar-title">
            <h1>{currentSection?.icon} {currentSection?.label}</h1>
            <p>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <div className="cc-topbar-user">
            <div className="cc-user-avatar">{userInitials}</div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>{userName}</div>
              <span className="cc-user-role">Executive Board</span>
            </div>
          </div>
        </div>

        <div className="cc-content">

          {/* ---- OVERVIEW ---- */}
          {activeSection === 'overview' && (
            <>
              <div className="cc-stats-row">
                <div className="cc-stat-card" style={{ '--accent': '#ffd700' }}>
                  <div className="cc-stat-icon">👥</div>
                  <div className="cc-stat-label">Total Members</div>
                  <div className="cc-stat-value">{allowedMembers.length}</div>
                  <div className="cc-stat-sub">Whitelisted in Firebase</div>
                  <button 
                    className="cc-btn cc-btn-ghost" 
                    style={{ marginTop: '10px', fontSize: '0.7rem' }} 
                    onClick={migrateData} 
                    disabled={isMigrating}
                  >
                    {isMigrating ? 'Syncing...' : '🔄 Sync JSON to Firestore'}
                  </button>
                </div>
                <div className="cc-stat-card" style={{ '--accent': '#ff6060' }}>
                  <div className="cc-stat-icon">👑</div>
                  <div className="cc-stat-label">Board Members</div>
                  <div className="cc-stat-value">{admins.length}</div>
                  <div className="cc-stat-sub">Executive access</div>
                </div>
                <div className="cc-stat-card" style={{ '--accent': '#70b8ff' }}>
                  <div className="cc-stat-icon">📅</div>
                  <div className="cc-stat-label">Upcoming Events</div>
                  <div className="cc-stat-value">{events.length}</div>
                  <div className="cc-stat-sub">Across all categories</div>
                </div>
                <div className="cc-stat-card" style={{ '--accent': '#60d890' }}>
                  <div className="cc-stat-icon">⭐</div>
                  <div className="cc-stat-label">Spotlight</div>
                  <div className="cc-stat-value" style={{ fontSize: '1rem', paddingTop: '4px' }}>{spotlight.name}</div>
                  <div className="cc-stat-sub">{spotlight.track}</div>
                </div>
              </div>

              <div className="cc-two-col">
                <div className="cc-panel">
                  <div className="cc-panel-header">
                    <div><h3>📅 Recent Events</h3><p>Latest scheduled activities</p></div>
                  </div>
                  <div className="cc-panel-body">
                    {events.slice(0, 4).map(evt => (
                      <div className="cc-event-item" key={evt.id}>
                        <div>
                          <div className="cc-event-title">{evt.title}</div>
                          <div className="cc-event-meta">{evt.date}</div>
                        </div>
                        <span className={getBadgeClass(evt.type)}>{evt.type}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="cc-panel">
                  <div className="cc-panel-header">
                    <div><h3>⭐ Current Spotlight</h3><p>Publicly featured on the member hub</p></div>
                  </div>
                  <div className="cc-panel-body">
                    <div className="cc-spotlight-preview">
                      <div className="cc-spotlight-avatar">{spotlight.avatar}</div>
                      <div className="cc-spotlight-info">
                        <h4>{spotlight.name}</h4>
                        <div className="track">{spotlight.track}</div>
                        <div className="reason">"{spotlight.reason}"</div>
                      </div>
                    </div>
                    <button className="cc-btn cc-btn-ghost" onClick={() => setActiveSection('spotlight')}>Edit Spotlight →</button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ---- EXECUTIVE TASKS (Kanban) ---- */}
          {activeSection === 'tasks' && (
            <div className="cc-tasks-container">
              <div className="cc-panel-header" style={{ marginBottom: '20px', background: '#111119', borderRadius: '12px' }}>
                <div><h3>📋 Executive Task Board</h3><p>Assign and track board responsibilities</p></div>
                <button className="cc-btn cc-btn-primary" onClick={() => setShowTaskForm(f => !f)}>
                  {showTaskForm ? 'Cancel' : '+ New Task'}
                </button>
              </div>

              {showTaskForm && (
                <div className="cc-panel" style={{ padding: '20px', marginBottom: '24px' }}>
                  <div className="cc-form-row">
                    <div className="cc-form-group">
                      <label className="cc-label">Task Title</label>
                      <input className="cc-input" placeholder="e.g. Design posters for Hackathon" value={newTask.title} onChange={e => setNewTask(p => ({ ...p, title: e.target.value }))} />
                    </div>
                    <div className="cc-form-group">
                      <label className="cc-label">Assign To</label>
                      <select className="cc-input" value={newTask.assignedTo} onChange={e => setNewTask(p => ({ ...p, assignedTo: e.target.value }))}>
                        {BOARD_ROLES.map(role => <option key={role}>{role}</option>)}
                      </select>
                    </div>
                  </div>
                  <button className="cc-btn cc-btn-primary" onClick={addTask}>Create Task</button>
                </div>
              )}

              <div className="cc-kanban-grid">
                {['todo', 'in-progress', 'done'].map(status => (
                  <div className="cc-kanban-col" key={status}>
                    <div className="cc-kanban-col-header">
                      {status === 'todo' ? '📝 TO DO' : status === 'in-progress' ? '⚡ IN PROGRESS' : '✅ DONE'}
                      <span className="count">{tasks.filter(t => t.status === status).length}</span>
                    </div>
                    <div className="cc-kanban-list">
                      {tasks.filter(t => t.status === status).map(task => (
                        <div className="cc-task-card" key={task.id}>
                          <div className="cc-task-title">{task.title}</div>
                          <div className="cc-task-meta">👤 {task.assignedTo}</div>
                          <div className="cc-task-actions">
                            {status !== 'todo' && <button onClick={() => updateTaskStatus(task.id, 'todo')}>←</button>}
                            {status !== 'in-progress' && <button onClick={() => updateTaskStatus(task.id, 'in-progress')}>⚡</button>}
                            {status !== 'done' && <button onClick={() => updateTaskStatus(task.id, 'done')}>→</button>}
                            <button className="del" onClick={() => removeTask(task.id)}>🗑️</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ---- MEMBER CRM ---- */}
          {activeSection === 'members' && (
            <div className="cc-panel">
              <div className="cc-panel-header">
                <div><h3>👥 Member Roster</h3><p>All Codeforces-linked members (from local data)</p></div>
              </div>
              <div className="cc-panel-body" style={{ padding: 0 }}>
                <table className="cc-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>CF Handle</th>
                      <th>XP</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((m, i) => (
                      <tr key={m.id || m.handle}>
                        <td style={{ color: '#444', fontSize: '0.8rem' }}>{i + 1}</td>
                        <td style={{ fontWeight: 600, color: '#fff' }}>{m.name || '—'}</td>
                        <td className="handle-cell">{m.handle}</td>
                        <td>
                          <span style={{ color: '#ffd700', fontWeight: 700 }}>{(m.xp || 0).toLocaleString()}</span>
                          <span style={{ color: '#444', fontSize: '0.75rem' }}> XP</span>
                        </td>
                        <td>
                          <button className="cc-btn cc-btn-success" style={{ fontSize: '0.75rem', padding: '5px 12px' }}
                            onClick={() => updateMemberXP(m.id, m.xp)}>
                            +100 XP
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ---- EVENTS & WORKSHOPS ---- */}
          {activeSection === 'events' && (
            <div className="cc-panel">
              <div className="cc-panel-header">
                <div><h3>📅 Events & Workshops Manager</h3><p>Add, modify, or remove scheduled activities</p></div>
                <button className="cc-btn cc-btn-primary" onClick={() => setShowEventForm(f => !f)}>
                  {showEventForm ? 'Cancel' : '+ Add Event'}
                </button>
              </div>
              <div className="cc-panel-body">
                {showEventForm && (
                  <div style={{ background: '#0d0d16', border: '1px solid rgba(255,215,0,0.15)', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
                    <div style={{ fontWeight: 700, color: '#fff', marginBottom: '16px', fontSize: '0.9rem' }}>New Event</div>
                    <div className="cc-form-row">
                      <div className="cc-form-group">
                        <label className="cc-label">Title</label>
                        <input className="cc-input" placeholder="Event name" value={newEvent.title} onChange={e => setNewEvent(p => ({ ...p, title: e.target.value }))} />
                      </div>
                      <div className="cc-form-group">
                        <label className="cc-label">Date</label>
                        <input className="cc-input" placeholder="e.g. Nov 15, 2026" value={newEvent.date} onChange={e => setNewEvent(p => ({ ...p, date: e.target.value }))} />
                      </div>
                    </div>
                    <div className="cc-form-group">
                      <label className="cc-label">Type</label>
                      <select className="cc-input" value={newEvent.type} onChange={e => setNewEvent(p => ({ ...p, type: e.target.value }))}>
                        <option>Competition</option>
                        <option>Hackathon</option>
                        <option>Workshop</option>
                        <option>Project Deadline</option>
                      </select>
                    </div>
                    <button className="cc-btn cc-btn-primary" onClick={addEvent}>Save Event</button>
                  </div>
                )}
                {events.length === 0 && <div className="cc-empty">No events yet. Add one above.</div>}
                {events.map(evt => (
                  <div className="cc-event-item" key={evt.id}>
                    <div>
                      <div className="cc-event-title">{evt.title}</div>
                      <div className="cc-event-meta">{evt.date}{evt.mentor ? ` · Mentor: ${evt.mentor}` : ''}</div>
                    </div>
                    <div className="cc-event-actions">
                      <span className={getBadgeClass(evt.type)}>{evt.type}</span>
                      <button className="cc-btn cc-btn-danger" style={{ padding: '5px 12px', fontSize: '0.78rem' }} onClick={() => removeEvent(evt.id)}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ---- MEETING MINUTES ---- */}
          {activeSection === 'meetings' && (
            <div className="cc-panel">
              <div className="cc-panel-header">
                <div><h3>📝 Board Meeting Minutes</h3><p>Archive of past executive decisions</p></div>
                <button className="cc-btn cc-btn-primary" onClick={() => setShowMeetingForm(f => !f)}>
                  {showMeetingForm ? 'Cancel' : '+ New Minutes'}
                </button>
              </div>
              <div className="cc-panel-body">
                {showMeetingForm && (
                  <div style={{ background: '#0d0d16', padding: '20px', borderRadius: '12px', marginBottom: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="cc-form-row">
                      <div className="cc-form-group">
                        <label className="cc-label">Meeting Title</label>
                        <input className="cc-input" placeholder="e.g. Weekly Strategy Sync" value={newMeeting.title} onChange={e => setNewMeeting(p => ({ ...p, title: e.target.value }))} />
                      </div>
                      <div className="cc-form-group">
                        <label className="cc-label">Date</label>
                        <input className="cc-input" placeholder="Oct 20, 2026" value={newMeeting.date} onChange={e => setNewMeeting(p => ({ ...p, date: e.target.value }))} />
                      </div>
                    </div>
                    <div className="cc-form-group">
                      <label className="cc-label">Notes / Decisions</label>
                      <textarea className="cc-input" style={{ minHeight: '120px', resize: 'vertical' }} placeholder="Summary of what was discussed..." value={newMeeting.content} onChange={e => setNewMeeting(p => ({ ...p, content: e.target.value }))} />
                    </div>
                    <button className="cc-btn cc-btn-primary" onClick={addMeeting}>Save Minutes</button>
                  </div>
                )}

                {meetings.length === 0 && <div className="cc-empty">No meeting minutes archived yet.</div>}
                <div className="cc-minutes-list">
                  {[...meetings].sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds).map(m => (
                    <div className="cc-meeting-item" key={m.id}>
                      <div className="cc-meeting-info">
                        <div className="cc-meeting-title">{m.title}</div>
                        <div className="cc-meeting-date">🗓️ {m.date}</div>
                        <div className="cc-meeting-content">{m.content}</div>
                      </div>
                      <button className="cc-btn cc-btn-danger" style={{ padding: '5px 10px', height: 'fit-content' }} onClick={() => removeMeeting(m.id)}>🗑️</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ---- SPOTLIGHT ---- */}
          {activeSection === 'spotlight' && (
            <div className="cc-two-col">
              <div className="cc-panel">
                <div className="cc-panel-header">
                  <div><h3>⭐ Coder of the Month</h3><p>Edit and publish the member spotlight</p></div>
                </div>
                <div className="cc-panel-body">
                  <div className="cc-form-group">
                    <label className="cc-label">Member Name</label>
                    <input className="cc-input" value={spotlightDraft.name} onChange={e => setSpotlightDraft(p => ({ ...p, name: e.target.value }))} />
                  </div>
                  <div className="cc-form-group">
                    <label className="cc-label">Track / Role</label>
                    <input className="cc-input" value={spotlightDraft.track} onChange={e => setSpotlightDraft(p => ({ ...p, track: e.target.value }))} />
                  </div>
                  <div className="cc-form-group">
                    <label className="cc-label">Reason for Spotlight</label>
                    <input className="cc-input" value={spotlightDraft.reason} onChange={e => setSpotlightDraft(p => ({ ...p, reason: e.target.value }))} />
                  </div>
                  <div className="cc-form-group">
                    <label className="cc-label">Avatar Emoji</label>
                    <input className="cc-input" value={spotlightDraft.avatar} onChange={e => setSpotlightDraft(p => ({ ...p, avatar: e.target.value }))} />
                  </div>
                  <button className="cc-btn cc-btn-primary" style={{ marginTop: '8px' }} onClick={publishSpotlight}>Publish Spotlight</button>
                </div>
              </div>

              <div className="cc-panel">
                <div className="cc-panel-header">
                  <div><h3>Live Preview</h3><p>This is what members will see on the Hub</p></div>
                </div>
                <div className="cc-panel-body">
                  <div className="cc-spotlight-preview">
                    <div className="cc-spotlight-avatar">{spotlight.avatar}</div>
                    <div className="cc-spotlight-info">
                      <h4>{spotlight.name}</h4>
                      <div className="track">{spotlight.track}</div>
                      <div className="reason">"{spotlight.reason}"</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#444' }}>Click "Publish Spotlight" on the left to apply changes.</p>
                </div>
              </div>
            </div>
          )}

          {/* ---- RESOURCE MANAGER (NEW) ---- */}
          {activeSection === 'resources' && (
            <div className="cc-resources-container">
              <div className="cc-panel-header" style={{ marginBottom: '24px', background: '#111119', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                   <div><h3>📚 Educational Resources Manager</h3><p>Manage courses, TDs, and exams for all subjects</p></div>
                   <select 
                     className="cc-input" 
                     style={{ width: '200px', background: '#1a1a2e', borderColor: 'rgba(255,215,0,0.3)' }}
                     value={selectedSubject}
                     onChange={e => setSelectedSubject(e.target.value)}
                   >
                     {SUBJECT_KEYS.map(key => <option key={key} value={key}>{key.toUpperCase()}</option>)}
                   </select>
                </div>
              </div>

              <div className="cc-two-col">
                <div className="cc-panel">
                  <div className="cc-panel-header">
                    <div><h3>📂 Add New Material to {selectedSubject.toUpperCase()}</h3><p>Assign a title and a valid Drive/PDF link</p></div>
                  </div>
                  <div className="cc-panel-body">
                    <div className="cc-form-group">
                      <label className="cc-label">Category</label>
                      <select className="cc-input" value={newResource.category} onChange={e => setNewResource(v => ({ ...v, category: e.target.value }))}>
                        <option value="courses">📖 Courses</option>
                        <option value="summaries">📝 Summaries</option>
                        <option value="tp">🔬 TP</option>
                        <option value="td">📋 TD</option>
                        <option value="ds">📊 DS</option>
                        <option value="exams">🎓 Exams</option>
                      </select>
                    </div>
                    <div className="cc-form-group">
                      <label className="cc-label">Material Title</label>
                      <input className="cc-input" placeholder="e.g. Chapitre 1: Introduction" value={newResource.title} onChange={e => setNewResource(v => ({ ...v, title: e.target.value }))} />
                    </div>
                    <div className="cc-form-group">
                      <label className="cc-label">Resource URL</label>
                      <input className="cc-input" placeholder="https://drive.google.com/..." value={newResource.url} onChange={e => setNewResource(v => ({ ...v, url: e.target.value }))} />
                    </div>
                    <button className="cc-btn cc-btn-primary" style={{ width: '100%' }} onClick={addResource}>Add Link to Firestore</button>
                  </div>
                </div>

                <div className="cc-panel">
                  <div className="cc-panel-header">
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                      <div><h3>👀 Preview / Manage</h3><p>View currently linked resources</p></div>
                      <div className="cc-badge cc-badge-admin">{newResource.category.toUpperCase()}</div>
                    </div>
                  </div>
                  <div className="cc-panel-body" style={{ maxHeight: '450px', overflowY: 'auto' }}>
                    {!subjectData && <div className="cc-empty">No data for this subject in Firestore yet. Use the "Sync" tool in Overview to migrate.</div>}
                    {subjectData && (subjectData[newResource.category] || []).length === 0 && <div className="cc-empty">No materials in this category.</div>}
                    {subjectData && (subjectData[newResource.category] || []).map((res, i) => (
                      <div className="cc-event-item" key={i} style={{ padding: '12px', marginBottom: '8px' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.85rem' }}>{res.title}</div>
                          <div style={{ fontSize: '0.7rem', color: '#555', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '300px' }}>{res.url}</div>
                        </div>
                        <button className="cc-btn cc-btn-danger" style={{ padding: '4px 10px', fontSize: '0.7rem' }} onClick={() => removeResource(newResource.category, i)}>Remove</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ---- ACCESS MANAGEMENT ---- */}
          {activeSection === 'access' && (
            <div className="cc-two-col">
              {/* Admins */}
              <div className="cc-panel">
                <div className="cc-panel-header">
                  <div><h3>👑 Executive Board</h3><p>Can access the Control Center</p></div>
                  <button className="cc-btn cc-btn-primary" onClick={() => setShowAdminForm(f => !f)}>{showAdminForm ? 'Cancel' : '+ Add'}</button>
                </div>
                <div className="cc-panel-body">
                  {showAdminForm && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px', background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '10px' }}>
                      <input className="cc-input" placeholder="email@gmail.com" value={newAdmin.email} onChange={e => setNewAdmin(p => ({ ...p, email: e.target.value }))} />
                      <select className="cc-input" value={newAdmin.role} onChange={e => setNewAdmin(p => ({ ...p, role: e.target.value }))}>
                        {BOARD_ROLES.map(role => <option key={role}>{role}</option>)}
                      </select>
                      <button className="cc-btn cc-btn-primary" onClick={addAdmin}>Add Board Member</button>
                    </div>
                  )}
                  <div className="cc-access-list">
                    {admins.length === 0 && <div className="cc-empty">No admins found in Firestore.</div>}
                    {admins.map(a => (
                      <div className="cc-access-item" key={a.id}>
                        <div>
                          <div className="cc-access-email">{a.email}</div>
                          <span className="cc-badge cc-badge-admin">{a.role || 'Board'}</span>
                        </div>
                        <button className="cc-btn cc-btn-danger" style={{ padding: '5px 12px', fontSize: '0.75rem' }} onClick={() => removeAdmin(a.id)}>Remove</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Members */}
              <div className="cc-panel">
                <div className="cc-panel-header">
                  <div><h3>🎓 Whitelisted Members</h3><p>Can access the Member Hub</p></div>
                  <button className="cc-btn cc-btn-primary" onClick={() => setShowMemberForm(f => !f)}>{showMemberForm ? 'Cancel' : '+ Add'}</button>
                </div>
                <div className="cc-panel-body">
                  {showMemberForm && (
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
                      <input className="cc-input" placeholder="student@gmail.com" value={newMember} onChange={e => setNewMember(e.target.value)} />
                      <button className="cc-btn cc-btn-primary" onClick={addMember}>Add</button>
                    </div>
                  )}
                  <div className="cc-access-list" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {allowedMembers.length === 0 && <div className="cc-empty">No members whitelisted yet.</div>}
                    {allowedMembers.map(m => (
                      <div className="cc-access-item" key={m.id}>
                        <div>
                          <div className="cc-access-email">{m.email}</div>
                          <span className="cc-badge cc-badge-member">Member</span>
                        </div>
                        <button className="cc-btn cc-btn-danger" style={{ padding: '5px 12px', fontSize: '0.75rem' }} onClick={() => removeMember(m.id)}>Remove</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ---- ANALYTICS ---- */}
          {activeSection === 'analytics' && (
            <div className="cc-analytics-container">
              <div className="cc-analytics-grid" style={{ marginBottom: '24px' }}>
                <div className="cc-analytics-card">
                  <div className="big-num">{allowedMembers.length + admins.length}</div>
                  <div className="label">Total Club Members</div>
                </div>
                <div className="cc-analytics-card">
                  <div className="big-num">{admins.length}</div>
                  <div className="label">Board Members</div>
                </div>
                <div className="cc-analytics-card">
                  <div className="big-num">{feedback.length}</div>
                  <div className="label">Feedback Reports</div>
                </div>
              </div>

              <div className="cc-two-col">
                {/* Top Performers */}
                <div className="cc-panel">
                  <div className="cc-panel-header">
                    <div><h3>📊 Top XP Earners</h3><p>Highest performing members</p></div>
                  </div>
                  <div className="cc-panel-body" style={{ padding: 0 }}>
                    <table className="cc-table">
                      <thead>
                        <tr>
                          <th>Rank</th>
                          <th>Name</th>
                          <th>XP</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...members].sort((a, b) => (b.xp || 0) - (a.xp || 0)).slice(0, 5).map((m, i) => (
                          <tr key={m.handle || m.id}>
                            <td style={{ color: i === 0 ? '#ffd700' : '#555', fontWeight: 700 }}>
                              {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}
                            </td>
                            <td style={{ fontWeight: 600, color: '#fff' }}>{m.name || m.handle}</td>
                            <td style={{ color: '#ffd700', fontWeight: 700 }}>{(m.xp || 0).toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Member Voice (Feedback) */}
                <div className="cc-panel">
                  <div className="cc-panel-header">
                    <div><h3>📣 Voice of the Club</h3><p>Recent member feedback and ratings</p></div>
                  </div>
                  <div className="cc-panel-body" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {feedback.length === 0 && <div className="cc-empty">No feedback received yet.</div>}
                    <div className="cc-feedback-list">
                      {[...feedback].sort((a, b) => b.timestamp?.seconds - a.timestamp?.seconds).map(fb => (
                        <div className="cc-feedback-item" key={fb.id}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <span className="user">{fb.handle}</span>
                            <span className="rating">{'⭐'.repeat(fb.rating)}</span>
                          </div>
                          <div className="msg">"{fb.message}"</div>
                          <div className="time">{fb.timestamp?.toDate ? fb.timestamp.toDate().toLocaleDateString() : 'Just now'}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default ControlCenter;

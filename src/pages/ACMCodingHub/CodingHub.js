import React, { useState, useEffect } from 'react';
import background from '../../assets/back1.png';
import './CodingHub.css';
import { auth, db } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const CodingHub = () => {
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useState([]);
  const [loadingLB, setLoadingLB] = useState(true);
  const [activePage, setActivePage] = useState('portal');
  const userName = auth.currentUser?.displayName?.split(' ')[0] || 'Challenger';

  // Firestore Data States
  const [members, setMembers] = useState([]);
  const [events, setEvents] = useState([]);
  const [problemSheets, setProblemSheets] = useState([]);
  const [spotlight, setSpotlight] = useState(null);
  const [cfHandle, setCfHandle] = useState(localStorage.getItem('acm_cf_handle') || '');
  const [handleInput, setHandleInput] = useState('');
  const [flameScore, setFlameScore] = useState(0);
  const [smartProblem, setSmartProblem] = useState(null);
  const [loadingCoach, setLoadingCoach] = useState(false);
  const [upcomingContest, setUpcomingContest] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  // Feedback state
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', rating: 5 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchHubData = async () => {
      try {
        // 1. Fetch Events
        const eventSnap = await getDocs(collection(db, 'events'));
        setEvents(eventSnap.docs.map(d => ({ id: d.id, ...d.data() })));

        // 2. Fetch Spotlight
        const spotlightSnap = await getDocs(collection(db, 'spotlight'));
        if (!spotlightSnap.empty) setSpotlight(spotlightSnap.docs[0].data());

        // 3. Fetch Problem Sheets
        const sheetsSnap = await getDocs(collection(db, 'problem_sheets'));
        setProblemSheets(sheetsSnap.docs.map(d => ({ id: d.id, ...d.data() })));

        // 4. Fetch Member Stats & Codeforces Leaderboard
        const statsSnap = await getDocs(collection(db, 'member_stats'));
        const memberList = statsSnap.docs.map(d => d.data());
        setMembers(memberList);

        if (memberList.length > 0) {
          const handlesStr = memberList.map(m => m.handle).join(';');
          const res = await fetch(`https://codeforces.com/api/user.info?handles=${handlesStr}`);
          const data = await res.json();
          
          if (data.status === 'OK') {
            const mergedData = data.result.map(user => {
              const member = memberList.find(m => m.handle.toLowerCase() === user.handle.toLowerCase());
              return {
                ...user,
                xp: member ? member.xp : 0,
                realName: member ? member.name : user.handle
              };
            });
            setLeaderboard(mergedData.sort((a, b) => b.xp - a.xp));
          }
        }
      } catch (err) {
        console.error("Hub Sync Error:", err);
      } finally {
        setLoadingLB(false);
      }
    };

    const fetchContests = async () => {
      try {
        const res = await fetch('https://codeforces.com/api/contest.list?gym=false');
        const data = await res.json();
        if (data.status === 'OK') {
          const upcoming = data.result
            .filter(c => c.phase === 'BEFORE')
            .sort((a, b) => a.relativeTimeSeconds - b.relativeTimeSeconds)[0]; // Closest first
          if (upcoming) setUpcomingContest(upcoming);
        }
      } catch (e) { console.error(e); }
    };

    fetchHubData();
    fetchContests();
  }, []);

  // Countdown effect
  useEffect(() => {
    if (!upcomingContest) return;
    const interval = setInterval(() => {
      const nowSeconds = Math.floor(Date.now() / 1000);
      const diff = upcomingContest.startTimeSeconds - nowSeconds;
      if (diff > 0) {
        setTimeLeft({
          d: Math.floor(diff / (3600 * 24)),
          h: Math.floor((diff % (3600 * 24)) / 3600),
          m: Math.floor((diff % 3600) / 60),
          s: Math.floor(diff % 60)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [upcomingContest]);

  // 2. Fetch Gamification Data if Handle is Linked
  useEffect(() => {
    if (!cfHandle) return;
    
    const fetchUserGamification = async () => {
      setLoadingCoach(true);
      try {
        // A. Fetch their info to get rating
        const infoRes = await fetch(`https://codeforces.com/api/user.info?handles=${cfHandle}`);
        const infoData = await infoRes.json();
        let userRating = 800; // default Newbie
        if (infoData.status === 'OK' && infoData.result[0].rating) {
          userRating = infoData.result[0].rating;
        }

        // B. Fetch last 100 submissions to calculate Flame Score (OKs in last 30 days)
        const statRes = await fetch(`https://codeforces.com/api/user.status?handle=${cfHandle}&from=1&count=100`);
        const statData = await statRes.json();
        if (statData.status === 'OK') {
          const thirtyDaysAgo = (Date.now() / 1000) - (30 * 24 * 60 * 60);
          const recentOKs = statData.result.filter(sub => sub.verdict === 'OK' && sub.creationTimeSeconds > thirtyDaysAgo);
          setFlameScore(recentOKs.length);
        }

        // C. Smart Coach: Suggest a problem slightly above their rating (+100)
        let targetRating = Math.round(userRating / 100) * 100 + 100;
        // Fetch specific tag to reduce payload size (e.g. implementation or math)
        const probRes = await fetch(`https://codeforces.com/api/problemset.problems?tags=implementation`);
        const probData = await probRes.json();
        if (probData.status === 'OK') {
          const validProblems = probData.result.problems.filter(p => p.rating === targetRating);
          if (validProblems.length > 0) {
            const randomProb = validProblems[Math.floor(Math.random() * validProblems.length)];
            setSmartProblem(randomProb);
          }
        }
      } catch (err) {
        console.error("Coach API Error:", err);
      } finally {
        setLoadingCoach(false);
      }
    };

    fetchUserGamification();
  }, [cfHandle]);

  const saveHandle = () => {
    if (!handleInput.trim()) return;
    localStorage.setItem('acm_cf_handle', handleInput.trim());
    setCfHandle(handleInput.trim());
  };

  const submitFeedback = async () => {
    if (!feedback.message.trim()) return;
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'feedback'), {
        ...feedback,
        handle: cfHandle || 'Anonymous',
        timestamp: new Date()
      });
      alert("Feedback submitted! Thank you.");
      setFeedback({ message: '', rating: 5 });
      setShowFeedbackForm(false);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const getRankClass = (rank) => {
    if (!rank) return 'rank-newbie';
    if (rank.includes('grandmaster')) return 'rank-grandmaster';
    if (rank.includes('master')) return 'rank-master';
    if (rank.includes('candidate')) return 'rank-candidate';
    if (rank.includes('expert')) return 'rank-expert';
    if (rank.includes('specialist')) return 'rank-specialist';
    if (rank.includes('pupil')) return 'rank-pupil';
    return 'rank-newbie';
  };

  return (
    <section 
      className="coding-hub-section" 
      style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(10,10,10,0.85), rgba(0,0,0,0.98)), url(${background})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundAttachment: "fixed" 
      }}
    >
      <div className="hub-dashboard">
        
        {activePage === 'portal' && (
          <>
            <div className="hub-header">
              <div className="hub-title-area">
                <h1>Welcome back, {userName}</h1>
                <p style={{ opacity: 0.8, fontStyle: "italic", letterSpacing: "0.05em", textTransform: "none" }}>
                  "First, solve the problem. Then, write the code." — John Johnson
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => setShowFeedbackForm(f => !f)} className="hub-feedback-btn">
                  📣 {showFeedbackForm ? 'Close' : 'Feedback'}
                </button>
                <button onClick={handleLogout} className="hub-logout-btn">
                  Sign Out
                </button>
              </div>
            </div>

            {showFeedbackForm && (
              <div className="hub-feedback-panel fade-in">
                <h3 style={{ marginBottom: '10px' }}>What's on your mind?</h3>
                <textarea 
                  className="hub-input" 
                  style={{ minHeight: '80px', marginBottom: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)' }}
                  placeholder="Suggestions, bugs, or just a shoutout..."
                  value={feedback.message}
                  onChange={e => setFeedback(p => ({ ...p, message: e.target.value }))}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Rating:</span>
                    <select className="hub-input" style={{ width: 'auto', padding: '4px 8px' }} value={feedback.rating} onChange={e => setFeedback(p => ({ ...p, rating: Number(e.target.value) }))}>
                      {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} ⭐</option>)}
                    </select>
                  </div>
                  <button className="portal-btn" style={{ padding: '8px 20px', fontSize: '0.7rem' }} onClick={submitFeedback} disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Submit 🚀'}
                  </button>
                </div>
              </div>
            )}

            <div className="hub-portal-container">
              {/* Problem Solving Portal */}
              <div className="portal-card" onClick={() => setActivePage('problem-solving')}>
                <h2>Problem Solving</h2>
                <p>Gamified competitive programming arena. Raise your flame streak, solve the POTD, and climb the live Codeforces ranks.</p>
                <button className="portal-btn">Enter Arena</button>
              </div>

              {/* Executive Board Portal (Premium Standalone) */}
              {localStorage.getItem('acm_role') === 'admin' && (
                <div className="portal-card" onClick={() => navigate('/control-center')} style={{ animationDelay: '0.2s', border: '1px solid rgba(255, 215, 0, 0.4)' }}>
                  <h2>Executive Board</h2>
                  <p>Master Control Panel. Manage users, update the unified calendar, and curate learning labs.</p>
                  <button className="portal-btn" style={{ background: 'linear-gradient(90deg, #d4af37, #ffd700)', color: 'black' }}>Open Command Center</button>
                </div>
              )}
            </div>

            {/* === GLOBAL EVENTS & ROADMAPS (Moved to Portal) === */}
            <div className="bento-grid-top fade-in" style={{ marginTop: '40px', animationDelay: '0.4s' }}>
              <div className="bento-box hover-lift" style={{ borderTop: '2px solid #5bc8f5' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Event Calendar</h3>
                <div className="hub-list">
                  {events.filter(e => e.type !== 'Workshop').map(evt => (
                    <div key={evt.id} className="hub-list-item">
                      <h4 style={{ margin: '0 0 5px 0' }}>{evt.title}</h4>
                      <p><strong>Type:</strong> {evt.type}</p>
                      <p className="evt-date">🗓️ {evt.date}</p>
                    </div>
                  ))}
                  {events.filter(e => e.type !== 'Workshop').length === 0 && <p style={{ color: '#666', fontSize: '0.8rem' }}>No upcoming events.</p>}
                </div>
              </div>
 
              <div className="bento-box hover-lift" style={{ borderTop: '2px solid #a78bfa' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Upcoming Workshops</h3>
                <div className="hub-list">
                  {events.filter(e => e.type === 'Workshop').map(ws => (
                    <div key={ws.id} className="hub-list-item">
                      <h4 style={{ margin: '0 0 5px 0' }}>{ws.title}</h4>
                      <p><strong>Topic:</strong> {ws.type || 'Tech'} | <strong>Mentor:</strong> {ws.mentor || 'ACM Board'}</p>
                      <p className="evt-date">🗓️ {ws.date}</p>
                    </div>
                  ))}
                  {events.filter(e => e.type === 'Workshop').length === 0 && <p style={{ color: '#666', fontSize: '0.8rem' }}>Stay tuned for new workshops!</p>}
                </div>
              </div>
            </div>
 
            {/* === SPOTLIGHT & ANNOUNCEMENTS === */}
            {spotlight && (
              <div className="bento-box spotlight-box fade-in" style={{ marginTop: '24px', animationDelay: '0.6s', borderLeft: '4px solid #ffd700' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div className="spotlight-avatar" style={{ fontSize: '3rem', background: 'rgba(255,215,0,0.1)', padding: '20px', borderRadius: '50%' }}>
                    {spotlight.avatar || '⭐'}
                  </div>
                  <div>
                    <h3 style={{ color: '#ffd700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '5px' }}>Member Spotlight</h3>
                    <h2 style={{ fontSize: '1.8rem', margin: '0 0 10px 0' }}>{spotlight.name}</h2>
                    <p style={{ color: '#aaa', fontStyle: 'italic', maxWidth: '600px' }}>"{spotlight.reason}"</p>
                    <div style={{ marginTop: '15px' }}>
                      <span className="cc-badge cc-badge-workshop" style={{ background: 'rgba(255,255,255,0.05)', color: '#eee' }}>{spotlight.track}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* ===================== PROBLEM SOLVING PAGE ===================== */}
        {activePage === 'problem-solving' && (
          <div className="dedicated-page fade-in">
            <button className="back-btn" onClick={() => setActivePage('portal')}>
              ← Back to Portal
            </button>
            <h2>Problem Solving Arena</h2>
            <p className="page-desc">Advanced competitive programming training ground. Analyze performance and track metrics.</p>
            
            <div className="ps-layout">
              {/* === MAIN CONTENT (LEFT) === */}
              <div className="ps-main">
                <div className="bento-box coach-box hover-lift">
                  <h3>AI Performance Coach</h3>
                  {!cfHandle ? (
                    <div style={{ marginTop: '20px', color: '#aaa' }}>
                      <p>Link your Codeforces handle on the sidebar to unlock your personalized track!</p>
                    </div>
                  ) : loadingCoach ? (
                    <p style={{ marginTop: '20px', color: '#aaa' }}>Analyzing your skill level...</p>
                  ) : smartProblem ? (
                    <div className="smart-problem-card">
                      <h4 className="prob-title">{smartProblem.name}</h4>
                      <p className="prob-meta">Target Rating: <strong>{smartProblem.rating}</strong> | Tags: {smartProblem.tags?.slice(0,3).join(', ')}</p>
                      <p style={{ margin: '15px 0', color: '#ccc' }}>
                        Based on your recent performance, solving this exact problem will push your limits and maximize your ACM XP growth.
                      </p>
                      <a 
                        href={`https://codeforces.com/problemset/problem/${smartProblem.contestId}/${smartProblem.index}`} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="portal-btn" 
                        style={{ display: 'inline-block', textDecoration: 'none', padding: '10px 25px', fontSize: '1rem', marginTop: '10px' }}
                      >
                        Start Challenge
                      </a>
                    </div>
                  ) : (
                    <p>No problem found.</p>
                  )}
                </div>

                {/* === CONTEST COUNTDOWN === */}
                <div className="bento-box hover-lift" style={{ marginTop: '24px' }}>
                  <h3>Next Codeforces Round</h3>
                  {upcomingContest ? (
                    <div style={{ padding: '15px 0' }}>
                      <h4 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.1rem', fontWeight: 600 }}>{upcomingContest.name}</h4>
                      <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-start' }}>
                        <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '15px', textAlign: 'center', minWidth: '70px' }}>
                          <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff' }}>{timeLeft.d}</div>
                          <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#888', letterSpacing: '2px', marginTop: '5px' }}>Days</div>
                        </div>
                        <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '15px', textAlign: 'center', minWidth: '70px' }}>
                          <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff' }}>{timeLeft.h}</div>
                          <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#888', letterSpacing: '2px', marginTop: '5px' }}>Hrs</div>
                        </div>
                        <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '15px', textAlign: 'center', minWidth: '70px' }}>
                          <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff' }}>{timeLeft.m}</div>
                          <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#888', letterSpacing: '2px', marginTop: '5px' }}>Min</div>
                        </div>
                        <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '15px', textAlign: 'center', minWidth: '70px' }}>
                          <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff' }}>{timeLeft.s}</div>
                          <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#888', letterSpacing: '2px', marginTop: '5px' }}>Sec</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p style={{ color: '#aaa', marginTop: '10px' }}>Fetching official Codeforces schedule...</p>
                  )}
                </div>

                {/* === LIVE ACTIVITY TICKER === */}
                <div className="bento-box hover-lift" style={{ marginTop: '24px' }}>
                  <h3>Live Arena Feed</h3>
                  <div className="ticker-container" style={{ marginTop: '15px', maxHeight: '180px', overflowY: 'auto', paddingRight: '10px' }}>
                    {[
                      { user: 'jiangly', action: 'solved', problem: 'E. Watermelon (800)', time: '2 mins ago', color: '#e8192c' },
                      { user: 'Benq', action: 'attempted', problem: 'C. Given Length', time: '12 mins ago', color: '#bbb' },
                      { user: 'tourist', action: 'solved', problem: 'A. Way Too Long Words', time: '18 mins ago', color: '#e8192c' },
                      { user: 'elaaelfahem', action: 'achieved', problem: 'New Peak Rating', time: '1 hr ago', color: '#e8192c' }
                    ].map((act, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 15px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '8px' }}>
                        <div>
                          <span style={{ fontWeight: 600, color: '#fff' }}>{act.user}</span>{' '}
                          <span style={{ color: '#888' }}>{act.action}</span>{' '}
                          <strong style={{ color: act.color, fontWeight: 500 }}>{act.problem}</strong>
                        </div>
                        <span style={{ fontSize: '0.75rem', color: '#666' }}>{act.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bento-box hover-lift" style={{ marginTop: '24px' }}>
                  <h3>Algorithmic Problem Sheets</h3>
                  <p style={{ color: '#aaa', marginBottom: '20px' }}>Curated sheets by difficulty level to master topics.</p>
                  <div className="hub-list">
                  <div className="hub-list">
                    {problemSheets.map(sheet => (
                      <div key={sheet.id} className="hub-list-item">
                        <h4 style={{ margin: '0 0 5px 0' }}>{sheet.title}</h4>
                        <p>Level: {sheet.difficulty}</p>
                        {sheet.link && sheet.link !== '#' ? (
                          <a href={sheet.link} target="_blank" rel="noreferrer" className="hub-link">Open PDF Document →</a>
                        ) : (
                          <span style={{ fontSize: '0.8rem', color: '#666', fontStyle: 'italic', display: 'block', marginTop: '5px' }}>
                            (PDF not uploaded yet by the Board)
                          </span>
                        )}
                      </div>
                    ))}
                    {problemSheets.length === 0 && <p style={{ color: '#666', fontSize: '0.8rem' }}>No problem sheets released yet.</p>}
                  </div>
                  </div>
                </div>
              </div>

              {/* === SIDEBAR (RIGHT) === */}
              <div className="ps-sidebar">
                <div className="bento-box coder-box">
                  <h3>Consistency Tracker</h3>
                  
                  {!cfHandle ? (
                    <div className="handle-link-area">
                      <p style={{ fontSize: '0.9rem', color: '#ccc', marginBottom: '15px' }}>Enter your Codeforces handle to view your streak.</p>
                      <input 
                        type="text" 
                        className="hub-input" 
                        placeholder="CF Username..." 
                        value={handleInput} 
                        onChange={e => setHandleInput(e.target.value)} 
                      />
                      <button onClick={saveHandle} className="portal-btn" style={{ padding: '8px 20px', fontSize: '0.9rem', display: 'block', width: '100%', marginTop: '10px' }}>
                        LINK HANDLE
                      </button>
                    </div>
                  ) : (
                    <div className="coder-profile">
                      <div className="coder-avatar" style={{ fontSize: '3rem', width: '120px', height: '120px', border: flameScore > 0 ? '3px solid #ff4040' : '3px solid #555' }}>
                        {flameScore}
                      </div>
                      <div className="coder-info">
                        <h3>{cfHandle}</h3>
                        <span className="coder-track" style={{ background: flameScore > 0 ? '#e50303' : '#555' }}>{flameScore > 0 ? 'STREAK ACTIVE' : 'NO STREAK'}</span>
                        <p style={{ fontSize: '0.85rem' }}>You've solved {flameScore} problems in the last 30 days. {flameScore === 0 ? 'Start solving to ignite your streak!' : 'Keep it up!'}</p>
                        <button onClick={() => { setCfHandle(''); localStorage.removeItem('acm_cf_handle'); }} className="hub-link" style={{ background: 'none', border: 'none', cursor: 'pointer', marginTop: '10px' }}>Unlink Handle</button>
                      </div>
                    </div>
                  )}
                  <div className="coder-bg-glow" style={{ opacity: flameScore > 0 ? 1 : 0.2 }}></div>
                </div>

                <div className="bento-box leaderboard-box">
                  <h3>Live Rankings</h3>
                  {loadingLB ? (
                    <p style={{ color: '#aaa' }}>Fetching API...</p>
                  ) : (
                    <div style={{ overflowX: 'auto' }}>
                      <table className="leaderboard-table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Handle</th>
                            <th>Rating</th>
                            <th>XP</th>
                          </tr>
                        </thead>
                        <tbody>
                          {leaderboard.map((user, idx) => (
                            <tr key={user.handle}>
                              <td>{idx + 1}</td>
                              <td className={getRankClass(user.rank)} style={{ fontWeight: 'bold' }}>{user.handle}</td>
                              <td className={getRankClass(user.rank)}>{user.rating || '-'}</td>
                              <td className="xp-points" style={{ fontSize: '0.9rem' }}>{user.xp.toLocaleString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Note: Workshops page was merged into the portal gateway */}
      </div>
    </section>
  );
};

export default CodingHub;

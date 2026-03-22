import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import coursesData from '../../data/courses.json';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import ResourceCard from '../ResourceCard/ResourceCard';
import '../../pages/Matiere/matiere.css';
import './SubjectTemplate.css';
import './SkeletonLoader.css';

import coursesImg from '../../assets/cours.png';
import summariesImg from '../../assets/resume.png';
import exercicesImg from '../../assets/ex.png';
import examesImg from '../../assets/exam.png';
import devoirsImg from '../../assets/DS.png';
import tdimg from '../../assets/td.png';
import background from '../../assets/back1.png';

const TABS = [
  { key: 'all',       label: 'All' },
  { key: 'courses',   label: '📖 Courses' },
  { key: 'summaries', label: '📝 Summaries' },
  { key: 'tp',        label: '🔬 TP' },
  { key: 'td',        label: '📋 TD' },
  { key: 'ds',        label: '📊 DS' },
  { key: 'exams',     label: '🎓 Exams' },
];

const SubjectTemplate = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [course, setCourse] = useState(coursesData[courseId?.toLowerCase()] || null);
  
  // Set document title dynamically and simulate loading
  useEffect(() => {
    const cid = courseId?.toLowerCase();
    setIsLoading(true);
    
    const fetchSubject = async () => {
      try {
        const docRef = doc(db, 'courses', cid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setCourse(docSnap.data());
        } else {
          // Fallback to local
          setCourse(coursesData[cid]);
        }
      } catch (e) {
        console.error("Firestore Fetch error:", e);
        setCourse(coursesData[cid]);
      } finally {
        setIsLoading(false);
      }
    };

    if (cid) {
      fetchSubject();
    } else {
      setIsLoading(false);
    }
    
    return () => { 
      document.title = 'SOS ACM';
    };
  }, [courseId]);

  useEffect(() => {
    if (course) document.title = `${course.title} | SOS ACM`;
  }, [course]);


  // The course data is now handled by the state 'course' from the useEffect above

  if (!course) {
    return (
      <section className="archive-section" style={{ backgroundImage: `url(${background})`, backgroundPosition: "center", backgroundSize: "cover", minHeight: "100vh" }}>
        <div className="subject-resources">
          <div className="resources-header">
            <h1>Course Not Found</h1>
            <p>We couldn't find the course materials you were looking for.</p>
          </div>
        </div>
      </section>
    );
  }

  const showCard = (key) => activeTab === 'all' || activeTab === key;

  if (isLoading) {
    return (
      <section className="archive-section" style={{ backgroundImage: `url(${background})`, backgroundPosition: "center", backgroundSize: "cover", minHeight: "100vh" }}>
        <div className="subject-resources">
          <div className="resources-header">
            <div className="skeleton skeleton-header-title"></div>
            <div className="skeleton skeleton-header-subtitle"></div>
          </div>
          <div className="skeleton-tabs">
            {[1,2,3,4,5,6].map(i => <div key={i} className="skeleton skeleton-tab"></div>)}
          </div>
          <div className="resources-grid">
            {[1,2,3,4,5,6].map(i => <div key={i} className="skeleton skeleton-card"></div>)}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="archive-section" style={{ backgroundImage: `url(${background})`, backgroundPosition: "center", backgroundSize: "cover" }}>
      <div className="subject-resources">
        <div className="resources-header">
          <h1>{course.title || "Subject Resources"}</h1>
          <p>{course.description || "ALL THE RESOURCES YOU NEED FOR THIS SUBJECT, IN ONE PLACE."}</p>
        </div>

        {/* Tab Navigation */}
        <div className="tab-nav">
          {TABS.map(tab => (
            <button
              key={tab.key}
              className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Resource Cards */}
        <div className="resources-grid">
          {showCard('courses')   && <ResourceCard title="COURSES"   icon={coursesImg}   links={course.courses}   isMainCard={true} />}
          {showCard('summaries') && <ResourceCard title="SUMMARIES" icon={summariesImg} links={course.summaries} isMainCard={true} />}
          {showCard('tp')        && <ResourceCard title="TP"        icon={exercicesImg} links={course.tp} />}
          {showCard('td')        && <ResourceCard title="TD"        icon={tdimg}        links={course.td} />}
          {showCard('ds')        && <ResourceCard title="DS"        icon={devoirsImg}   links={course.ds} />}
          {showCard('exams')     && <ResourceCard title="EXAMENS"   icon={examesImg}    links={course.exams} />}
        </div>
      </div>
    </section>
  );
};

export default SubjectTemplate;

import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import background from '../../assets/back1.png'; // Using the background from existing styles
import './Login.css';

const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Now querying Firestore for admins! No more hardcoded list required here.
  
  const handleMemberSignIn = async () => {
    try {
      setError('');
      const result = await signInWithPopup(auth, googleProvider);
      const userEmail = result.user.email.toLowerCase();

      // 🛡️ CHECK IF MEMBER IS WHITELISTED
      const memberRef = collection(db, "members");
      const q = query(memberRef, where("email", "==", userEmail));
      const querySnapshot = await getDocs(q);

      // Also check if they are an admin (Admins should always be allowed in as members)
      const adminRef = collection(db, "admins");
      const adminQ = query(adminRef, where("email", "==", userEmail));
      const adminSnapshot = await getDocs(adminQ);

      if (querySnapshot.empty && adminSnapshot.empty) {
        await auth.signOut();
        throw new Error('Access Denied: Your email is not on the authorized member list.');
      }

      localStorage.setItem('acm_role', 'member');
      navigate('/codinghub');
    } catch (error) {
      console.error(error);
      setError(error.message || 'Failed to authorize Member Access.');
    }
  };

  const handleBoardSignIn = async () => {
    try {
      setError('');
      const result = await signInWithPopup(auth, googleProvider);
      const userEmail = result.user.email.toLowerCase();
      
      // 🕵️ LIVE FIRESTORE CHECK
      const adminRef = collection(db, "admins");
      const q = query(adminRef, where("email", "==", userEmail));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await auth.signOut();
        throw new Error('Access Denied: Your email is not whitelisted in the Executive Board database.');
      }

      localStorage.setItem('acm_role', 'admin');
      navigate('/control-center');
    } catch (error) {
      console.error(error);
      setError(error.message || 'Failed to authorize Board Access.');
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="login-card">
        <h2>ACM Members Only</h2>
        <p>Please sign in with your authorized account to access.</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <button className="google-sign-in-btn" onClick={handleMemberSignIn}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" />
          Member Sign In
        </button>

        <p className="login-note">
          <i>Note: Ensure you are using an authorized email to gain access.</i>
        </p>

        <div style={{ marginTop: '20px', fontSize: '13px' }}>
           <span onClick={handleBoardSignIn} style={{ color: '#ffd700', cursor: 'pointer', opacity: 0.8, transition: '0.2s' }} onMouseOver={e => e.target.style.opacity = 1} onMouseOut={e => e.target.style.opacity = 0.8}>
             Or log in as Executive Board
           </span>
        </div>
      </div>
    </div>
  );
};

export default Login;

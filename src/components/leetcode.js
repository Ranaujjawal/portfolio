import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/leetcode.css'; // Import your CSS file for styling

const LeetCodeProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('https://leetcod-api-endpoint.vercel.app/leet/ranaujjawal692');
        setProfileData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching profile data</div>;
  }

  const {
    usename,
    totalSolved,
    easySolved,
    totalEasy,
    mediumSolved,
    totalMedium,
    hardSolved,
    totalHard,
    ranking,
    contributionPoint,
    reputation
  } = profileData;

  const easyPercentage = ((easySolved / totalEasy) * 100).toFixed(2);
  const mediumPercentage = ((mediumSolved / totalMedium) * 100).toFixed(2);
  const hardPercentage = ((hardSolved / totalHard) * 100).toFixed(2);

  return (
    <a href="https://leetcode.com/u/ranaujjawal692/" target="_blank" rel="noopener noreferrer" className="leetcode-profile-link">
    <div className="leetcode-profile">
       
      <img src="https://assets.leetcode.com/users/ranaujjawal692/avatar_1721240992.png" alt="Profile" className="profile-photo" />
      <div className="profile-details">
      <h2>Leet Code</h2>
        <h4>{usename}</h4>
        <p>Ranking: {ranking}</p>
        <p>Contribution Points: {contributionPoint}</p>
        <p>Reputation: {reputation}</p>
        <div className="solved-stats">
          <div className="stat">
            <p>Easy: {easySolved}/{totalEasy}</p>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${easyPercentage}%` }}></div>
            </div>
          </div>
          <div className="stat">
            <p>Medium: {mediumSolved}/{totalMedium}</p>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${mediumPercentage}%` }}></div>
            </div>
          </div>
          <div className="stat">
            <p>Hard: {hardSolved}/{totalHard}</p>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${hardPercentage}%` }}></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </a>
  );
};

export default LeetCodeProfile;

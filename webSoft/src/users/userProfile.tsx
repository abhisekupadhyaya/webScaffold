import React, { useState } from 'react';
import { fetchProfile, UserProfile as UserProfileType } from './profileService';

interface UserProfileProps {
  token: string;
  onLogout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ token, onLogout }) => {
  const [profile, setProfile] = useState<UserProfileType | null>(null);

  const getProfile = async () => {
    try {
      const profileData = await fetchProfile(token);
      setProfile(profileData);
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <button onClick={getProfile}>Fetch Profile</button>
      {profile && (
        <div>
          <p>userID: {profile.userId}</p>
          <p>Username: {profile.username}</p>
          {/* Render more profile fields as needed */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;

export interface UserProfile {
    // Define the structure of your profile data here
    // For example:
    userId: string;
    username: string;
    // Add more fields as needed
  }
  
  export const fetchProfile = async (token: string): Promise<UserProfile> => {
    const response = await fetch('/app/profile', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to fetch profile');
    }
  };
  
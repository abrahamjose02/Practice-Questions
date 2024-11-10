import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Navigate to the dashboard and replace login page in history
    navigate('/dashboard', { replace: true });
  };

  return (
    <button onClick={handleLogin}>Login</button>
  );
}



import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile', { state: { userId: 123, userName: 'JohnDoe' } });
  };

  return (
    <button onClick={goToProfile}>Go to Profile Page</button>
  );
}


import { useLocation } from 'react-router-dom';

function ProfilePage() {
  const location = useLocation();
  const { userId, userName } = location.state || {}; // Destructure the state data

  return (
    <div>
      <h1>Profile Page</h1>
      <p>User ID: {userId}</p>
      <p>User Name: {userName}</p>
    </div>
  );
}


import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <button onClick={goBack}>Go Back</button>
  );
}



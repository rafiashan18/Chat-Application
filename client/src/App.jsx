import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { useDispatch } from 'react-redux';
import { useUserInfoQuery } from './features/auth/authApi';
import { useEffect } from 'react';
import { setUser, clearUser } from './features/auth/userSlice';
import LoadingSpinner from './components/common/LoadingSpinner';

function App() {
  const dispatch = useDispatch();
  
  const { 
    data: userInfo, 
    error, 
    isLoading 
  } = useUserInfoQuery();

  useEffect(() => {
    if (userInfo?.user) {
      dispatch(setUser(userInfo.user));
    } else if (error) {
      dispatch(clearUser());
    }
  }, [userInfo, error, dispatch]);

  // Show loading while checking authentication
  if (isLoading) {
    return <div><LoadingSpinner/></div>;
  }

  return (
    <>
      <div className='flex w-screen h-screen'>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
import { Routes, Route } from 'react-router-dom';
import LoginScreen from '../screens/user/LoginScreen';
import SignupScreen from '../screens/user/SignupScreen';
import ChatScreen from '../screens/user/ChatScreen';
import ProtectedRoute from '../routes/ProtectedRoute';

const AppRoutes = () => {
    return (
        <Routes>
                <Route path='/' element={
                <ProtectedRoute>
                    <ChatScreen />
                </ProtectedRoute>
            } />
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path='/signup' element={<SignupScreen />}/> 
        
        </Routes>
    )
}

export default AppRoutes
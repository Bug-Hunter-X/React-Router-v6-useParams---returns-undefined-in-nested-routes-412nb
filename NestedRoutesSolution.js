// Solution: Use Route to ensure access to params
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function UserProfile() {
  let { userId } = useParams();
  return (
    <div>
      <h1>User Profile: {userId}</h1>
    </div>
  );
}

function UserPage() {
  return (
    <Routes>
       <Route path=':userId/profile' element={<UserProfile/>} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="users/:userId" element={<UserPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
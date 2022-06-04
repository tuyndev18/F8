import Login from 'Components/Auth/Login';
import Register from 'Components/Auth/Register';
import AuthPage from 'Pages/Auth';
import HomePage from 'Pages/Home';
import Blog from 'Pages/Home/Blog';
import LearningPage from 'Pages/Home/Learning';
import Learning from 'Pages/Home/Learning/Learning';
import TypeLearning from 'Pages/Home/Learning/TypeLearning';
import Main from 'Pages/Home/Main';
import NotFound from 'Pages/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CoursesPage from 'Pages/Home/Courses';
import PostsPage from 'Pages/Posts';
import CreatePostPage from 'Pages/CreatePost';
import PersonalPage from 'Pages/Personal';
import Courses from 'Pages/Home/Courses/Courses';
import Details from 'Pages/Home/Courses/Details';

function App() {
  return (
    <Routes>
      <Route path='new-post' element={<CreatePostPage />} />
      <Route path='@:username' element={<PersonalPage />} />
      <Route path='auth' element={<AuthPage />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
      <Route path='blog/:slug' element={<PostsPage />} />
      <Route path='/' element={<HomePage />}>
        <Route path='' element={<Main />} />
        <Route path='learning' element={<LearningPage />}>
          <Route path='' element={<Learning />} />
          <Route path='front-end-development' element={<TypeLearning />} />
          <Route path='back-end-development' element={<TypeLearning />} />
        </Route>
        <Route path='courses' element={<CoursesPage />}>
          <Route path='' element={<Courses />} />
          <Route path=':slug' element={<Details />} />
        </Route>
        <Route path='blog' element={<Blog />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

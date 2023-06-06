import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppAppBar from './modules/views/AppAppBar';
import AppFooter from './modules/views/AppFooter';
import ForgotPassword from './pages/ForgotPassword';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Terms from './pages/Terms';
import Tourism from './pages/Tourism';
import SearchResults from './pages/Tourism/SearchResults';
import TripDetails from './pages/Tourism/TripDetails';
import CreateBusiness from './pages/business/CreateBusiness';
import UserProfile from './pages/UserProfile';
import SingleTour from './pages/Tourism/SingleTour';
import PublishTrip from './pages/Tourism/PublishTrip';
import Favourites from './pages/favourites/Favourites';
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      <AppAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/tourism/*" element={<Tourism />} />
          <Route path="/tourism/results" element={<SearchResults />} />
          <Route path="/details/:id" element={<TripDetails />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/tour/:id" element={<SingleTour />} />
          <Route path="/create-business" element={<CreateBusiness />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/publish-trip" element={<PublishTrip />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      <AppFooter />
    </div>
  );
}

export default App;

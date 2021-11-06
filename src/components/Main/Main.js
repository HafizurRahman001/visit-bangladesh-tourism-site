import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../AuthProvider/AuthProvider';
import AboutUs from '../../Pages/About Us/AboutUs';
import AddNewPlaces from '../../Pages/Add New place/AddNewPlaces';
import Contact from '../../Pages/Contact/Contact';
import DashBoard from '../../Pages/Dash Board/DashBoard';
import LogIn from '../../Pages/LogIn/LogIn';
import ManageAllBookings from '../../Pages/Manage all bookings/ManageAllBookings';
import MyBookings from '../../Pages/My Bookings/MyBookings';
import ConformBooking from '../Conform Booking/ConformBooking';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Main = () => {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                        <Route path='/home'>
                            <Home></Home>
                        </Route>
                        <Route path='/login'>
                            <LogIn></LogIn>
                        </Route>
                        <Route path='/contact-us'>
                            <Contact></Contact>
                        </Route>
                        <Route path='/about-us'>
                            <AboutUs></AboutUs>
                        </Route>
                        <PrivateRoute path='/booking/:id'>
                            <ConformBooking></ConformBooking>
                        </PrivateRoute>
                        <PrivateRoute path='/dash-board'>
                            <DashBoard></DashBoard>
                        </PrivateRoute>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                        <Route path='*'>
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
};

export default Main;
import Home from '../pages/Home';
import Pay from '../pages/Pay';
import AboutStellar from '../pages/AboutStellar';
import BookRoom from '../pages/BookRoom';
import ConferenceEvents from '../pages/ConferenceEvents';
import Contact from '../pages/Contact';
import InfoAccount from '../pages/InfoAccount';
import ListOfTransaction from '../pages/ListOfTransaction';
import MyReservation from '../pages/MyReservation';
import * as PasswordAndSecuruty from '../pages/PasswordAndSecuruty';
import RestaurentAndBar from '../pages/RestaurentAndBar';
import Utilities from '../pages/Utilities';
import ViewPrice from '../pages/ViewPrice';

import Error404 from '../pages/Error404';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import * as ForgotPassword from '../pages/ForgotPassword';
import config from '../config/index';

const publishRoute = [
    { path: config.Routes.home, component: Home },
    { path: config.Routes.aboutStellar, component: AboutStellar },
    { path: config.Routes.bookRoom, component: BookRoom },
    { path: config.Routes.conferenceEvents, component: ConferenceEvents },
    { path: config.Routes.contact, component: Contact },
    { path: config.Routes.myReservation, component: MyReservation },
    { path: config.Routes.changePass, component: PasswordAndSecuruty.ChangePass },
    { path: config.Routes.pay, component: Pay },
    { path: config.Routes.restaurentAndBar, component: RestaurentAndBar },
    { path: config.Routes.utilities, component: Utilities },
    { path: config.Routes.viewPrice, component: ViewPrice },
    { path: config.Routes.signIn, component: SignIn, layout: null },
    { path: config.Routes.register, component: Register, layout: null },
    { path: config.Routes.forgotPassword, component: ForgotPassword.ForgotPassword, layout: null },
    { path: config.Routes.OTP, component: ForgotPassword.OTP, layout: null },
    { path: config.Routes.error, component: Error404, layout: null },
];

// required sign in
const privateRoute = [
    { path: config.Routes.listOfTransaction, component: ListOfTransaction },
    { path: config.Routes.infoAccount, component: InfoAccount },
    { path: config.Routes.passwordAndSecuruty, component: PasswordAndSecuruty.PasswordAndSecuruty },
];

export { publishRoute, privateRoute };

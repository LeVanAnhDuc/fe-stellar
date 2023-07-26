import Home from '../pages/Home';
import Pay from '../pages/Pay';
import AboutStellar from '../pages/AboutStellar';
import BookRoom from '../pages/BookRoom';
import ConferenceEvents from '../pages/ConferenceEvents';
import Contact from '../pages/Contact';
import InfoAccount from '../pages/InfoAccount';
import ListOfTransaction from '../pages/ListOfTransaction';
import MyReservation from '../pages/MyReservation';
import PasswordAndSecuruty from '../pages/PasswordAndSecuruty';
import RestaurentAndBar from '../pages/RestaurentAndBar';
import Utilities from '../pages/Utilities';
import ViewPrice from '../pages/ViewPrice';

import Error404 from '../pages/Error404';
import SignIn from '../pages/SignIn';

const publishRoute = [
    { path: '/', component: Home },
    { path: '/ve-Stellar', component: AboutStellar },
    { path: '/dat-phong', component: BookRoom },
    { path: '/hoi-thao-su-kien', component: ConferenceEvents },
    { path: '/lien-he', component: Contact },
    { path: '/thong-tin-tai-khoan', component: InfoAccount },
    { path: '/danh-sach-giao-dich', component: ListOfTransaction },
    { path: '/dat-cho-cua-toi', component: MyReservation },
    { path: '/mat-khau-bao-mat', component: PasswordAndSecuruty },
    { path: '/thanh-toan', component: Pay },
    { path: '/nha-hang-quan-bar', component: RestaurentAndBar },
    { path: '/tien-ich', component: Utilities },
    { path: '/xem-gia', component: ViewPrice },
    { path: '/dang-nhap', component: SignIn, layout: null },

    { path: '/error', component: Error404, layout: null },
];

// required sign in
const privateRoute = [];

export { publishRoute, privateRoute };

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publishRoute, privateRoute } from './routes';
import { DefaultLayout } from './Layouts';
import { Fragment } from 'react';
import ScrollAutoTop from './components/ScrollAutoTop/ScrollAutoTop';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getStateHeaderSlice } from '../src/redux/select';

function App() {
    const { isSignIn } = useSelector(getStateHeaderSlice);
    return (
        <>
            {(!isSignIn && (
                <Router>
                    <ScrollAutoTop />
                    <div className="App">
                        <Routes>
                            {publishRoute.map((item, index) => {
                                const Layout = item.layout === null ? Fragment : item.layout || DefaultLayout;

                                const Element = item.component;
                                return (
                                    <Route
                                        key={index}
                                        path={item.path}
                                        element={
                                            <Layout>
                                                <Element />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </div>
                </Router>
            )) || (
                <Router>
                    <ScrollAutoTop />
                    <div className="App">
                        <Routes>
                            {[...publishRoute, ...privateRoute].map((item, index) => {
                                const Layout = item.layout === null ? Fragment : item.layout || DefaultLayout;

                                const Element = item.component;
                                return (
                                    <Route
                                        key={index}
                                        path={item.path}
                                        element={
                                            <Layout>
                                                <Element />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </div>
                </Router>
            )}
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                limit={1}
            />
            {/* <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            /> */}
        </>
    );
}

export default App;

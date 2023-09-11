import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publishRoute } from './routes';
import { DefaultLayout } from './Layouts';
import { Fragment } from 'react';
import ScrollAutoTop from './components/ScrollAutoTop/ScrollAutoTop';
// import ScrollClickTop from './components/ScrollClickTop/ScrollClickTop';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <>
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
                                        <>
                                            <Layout>
                                                <Element />
                                                {/* <ScrollClickTop /> */}
                                            </Layout>
                                        </>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
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
            />
        </>
    );
}

export default App;

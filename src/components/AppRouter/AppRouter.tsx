import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { privateRouter, publicRouter } from '../../router';

const AppRouter: FC = () => {
    const { isAuth } = useTypedSelector((state) => state.auth);
    return (
        <>
            {isAuth ? (
                <Routes>
                    {privateRouter.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Routes>
            ) : (
                <Routes>
                    {publicRouter.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Routes>
            )}
        </>
    );
};

export default AppRouter;

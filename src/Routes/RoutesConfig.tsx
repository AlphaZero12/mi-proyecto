
import Contacto from '../views/contact/contacto';
import Inicio from '../views/pages/inicio';
import Acerca from '../views/about/acerca';

export const routes = [
    {
        path: '/about',
        element: <Acerca />
    },
    {
        path: '/contact',
        element: <Contacto />
    },
    {
        path: '/pages',
        element: <Inicio />
    }
];

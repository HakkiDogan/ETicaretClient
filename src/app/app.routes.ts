import { Routes } from '@angular/router';
import { Layout } from './admin/layout/layout';
import { Dashboard } from './admin/components/dashboard/dashboard';
import { Home } from './ui/components/home/home';

export const routes: Routes = [
    {
        path: 'admin',
        component: Layout,
        children: [
            {
                path: '',
                component: Dashboard
            },
            {
                path: 'customers',
                loadChildren: () => import('./admin/components/customers/customers-module').then(m => m.CustomersModule)
            },
            {
                path: 'orders',
                loadChildren: () => import('./admin/components/orders/orders-module').then(m => m.OrdersModule)
            }, 
            {
                path: 'products',
                loadChildren: () => import('./admin/components/products/products-module').then(m => m.ProductsModule)
            }                   
        ]
    },
    {
        path: '',
        component: Home
    },
    {
        path: 'basket',
        loadChildren: () => import('./ui/components/baskets/baskets-module').then(m => m.BasketsModule)
    },
    {
        path: 'products',
        loadChildren: () => import('./ui/components/products/products-module').then(m => m.ProductsModule)
    }
];

import { Routes } from '@angular/router';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { authRoutes } from './routes/auth/auth.routes';
import { productsRoutes } from './routes/products/products.routes';
import { categoriesRoutes } from './routes/categories/categories.routes';
import { taskRoutes } from './routes/task/task.routes';

export const routes: Routes = [
    {
        path: '', //Route belirtilen path ile eşleştiğinde ilgili componenti yerleştirir
        component: HomePageComponent //Angular'a nereye yerleştireceğini söylememiz gerekiyor. Uygulamanın başladığı yere yerleştiriyoruz
        //karşılaştığı ilk rooter-outlet etiketine bu componenti yerleştirecek
    },
    
    ...authRoutes, //authRoutes içindeki tüm rootları array'e ekleyecek

    ...productsRoutes,

    ...categoriesRoutes,

    ...taskRoutes
];

import { Routes } from '@angular/router';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { authRoutes } from './routes/auth/auth.routes';
import { productsRoutes } from './routes/products/products.routes';
import { categoriesRoutes } from './routes/categories/categories.routes';
import { taskRoutes } from './routes/task/task.routes';
import { BasicLayoutComponent } from './shared/components/basic-layout/basic-layout.component';

export const routes: Routes = [
    {
        path: '', //Route belirtilen path ile eşleştiğinde ilgili componenti yerleştirir
        component: BasicLayoutComponent, //Angular'a nereye yerleştireceğini söylememiz gerekiyor. Uygulamanın başladığı yere yerleştiriyoruz
        //karşılaştığı ilk rooter-outlet etiketine bu componenti yerleştirecek
        children: [
            {
              path: '',
              component: HomePageComponent,
            },
            // Child Route'lar, parent route'daki component'den -BasicLayoutComponent- başlayarak ilk karşılaştığı <router-outlet></router-outlet> etiketine yerleştirilir.
        
            ...authRoutes, //authRoutes içindeki tüm rootları array'e ekleyecek
        
            ...productsRoutes,
        
            ...categoriesRoutes,
        
            ...taskRoutes
        ],
    },
];

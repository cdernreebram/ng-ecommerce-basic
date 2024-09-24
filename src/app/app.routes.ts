import { Routes } from '@angular/router';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';

export const routes: Routes = [
    {path:'',component:ProductViewComponent},
    {path:'product-detail/:productid',component:ProductDetailComponent},
    {path:'cart-page',component:CartPageComponent},
    
];

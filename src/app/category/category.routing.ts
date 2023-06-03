import { Routes } from '@angular/router';
import { FullComponent } from '../layouts/full/full.component'
import { CategoryComponent} from '../category/category.component'
import { AuthGuardService } from '../services/auth-guard.service';  




export const CategoryRoutes: Routes = [
	{
		path: '',
		component: FullComponent,		
		children: [		
			
			{
				path: 'categories',
				component: CategoryComponent,
				canActivate: [AuthGuardService],
				data: {
					title: 'Category',
					urls: [
					  { title: 'Dashboard', url: '/category/categories' },
					  { title: 'Category',url:'/category/categories' },
					  { title: 'category' }
					]
				  }		   
			}
		]
	}
];

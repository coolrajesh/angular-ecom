import { Routes } from '@angular/router';
import { FullComponent } from '../layouts/full/full.component'
import { CategoryComponent} from '../category/category.component'



export const CategoryRoutes: Routes = [
	{
		path: '',
		component: FullComponent,
		children: [		
			
			{
				path: 'categories',
				component: CategoryComponent
			}
		]
	}
];

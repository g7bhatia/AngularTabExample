import {Routes, RouterModule} from "@angular/router";

import { TabsetComponent } from './tabs/tabset.component';

const APP_ROUTES: Routes=[
   {path : 'tab',component: TabsetComponent}
   
            
		  
];

export const routing = RouterModule.forRoot(APP_ROUTES);
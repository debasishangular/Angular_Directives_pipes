import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputOutputComponent } from './input-output/input-output.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ParentDirectiveComponent } from './directive/parent-directive/parent-directive.component';
import { InBuiltComponent } from './directive/in-built/in-built.component';
// tslint:disable-next-line: max-line-length
import { AttributeDirectiveDispalyComponent } from './directive/parent-directive/attribute-directive-dispaly/attribute-directive-dispaly.component';
// tslint:disable-next-line: max-line-length
import { StructuralDirectiveDisplayComponent } from './directive/parent-directive/structural-directive-display/structural-directive-display.component';
import { PipeComponent } from './pipe/pipe.component';
import { InBuiltPipeComponent } from './pipe/in-built-pipe/in-built-pipe.component';
import { ParentUIComponent } from './pipe/CustomPipes/parent-ui/parent-ui.component';

export const routes: Routes = [
  { path: 'inputoutput', component: InputOutputComponent },
  { path: 'viewchild', component: ViewChildComponent},
  { path: 'contentProjection', component: ContentProjectionComponent},
  { path: 'directive', component: ParentDirectiveComponent,
  children: [
    {path: '', redirectTo: 'inbuilt', pathMatch: 'full'},
    {path: 'inbuilt', component: InBuiltComponent},
    {path: 'attribute', component: AttributeDirectiveDispalyComponent},
    {path: 'structural', component: StructuralDirectiveDisplayComponent}
  ]
    },
    { path: 'pipe', component: PipeComponent,
    children: [
      {path: '', redirectTo: 'inbuiltpipe', pathMatch: 'full'},
     { path: 'inbuiltpipe', component: InBuiltPipeComponent },
     { path: 'custompipe', component: ParentUIComponent }
    ]

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

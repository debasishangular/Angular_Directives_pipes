import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputOutputComponent } from './input-output/input-output.component';
import { ChildOneComponent } from './input-output/child-one/child-one.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ChildComponent } from './view-child/child/child.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ContentChildComponent } from './Content-projection/content-child/content-child.component';
import { ParentDirectiveComponent } from './directive/parent-directive/parent-directive.component';
import { InBuiltComponent } from './directive/in-built/in-built.component';
import { MouseActionDirective } from './directive/Attribute/mouse-action.directive';
// import { ImportDirective } from './directive/Structural/import.directive';
import { DltLoopDirective } from './directive/Structural/dlt-loop.directive';
// tslint:disable-next-line: max-line-length
import { AttributeDirectiveDispalyComponent } from './directive/parent-directive/attribute-directive-dispaly/attribute-directive-dispaly.component';
import { MyColorDirective } from './directive/Attribute/my-color.directive';
// tslint:disable-next-line: max-line-length
import { StructuralDirectiveDisplayComponent } from './directive/parent-directive/structural-directive-display/structural-directive-display.component';
import { PipeComponent } from './pipe/pipe.component';
import { InBuiltPipeComponent } from './pipe/in-built-pipe/in-built-pipe.component';
import { DivisionPipe } from './pipe/CustomPipes/division.pipe';
import { ParentUIComponent } from './pipe/CustomPipes/parent-ui/parent-ui.component';
import { PurePipe } from './pipe/CustomPipes/pure.pipe';
import { ImpurePipePipe } from './pipe/CustomPipes/impure-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputComponent,
    ChildOneComponent,
    ViewChildComponent,
    ChildComponent,
    ContentProjectionComponent,
    ContentChildComponent,
    ParentDirectiveComponent,
    InBuiltComponent,
    AttributeDirectiveDispalyComponent,
    StructuralDirectiveDisplayComponent,
    PipeComponent,
    InBuiltPipeComponent,
    MouseActionDirective,
    DltLoopDirective,
    MyColorDirective,
    DivisionPipe,
    ParentUIComponent,
    PurePipe,
    ImpurePipePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

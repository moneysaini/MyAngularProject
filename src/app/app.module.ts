import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstsampleComponent } from './firstsample/firstsample.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { MycustomDirective } from './custom/mycustom.directive';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';
import { MypipePipe } from './custom/mypipe.pipe';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PersonalComponent } from './pipe-sample/personal/personal.component';
import { EducationComponent } from './pipe-sample/education/education.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { ProjectionComponent } from './projection/projection.component';
import { ArticleComponent } from './projection/article/article.component';
import { ProductTemplateDrivenComponent } from './product/product-template-driven/product-template-driven.component';
import { ProductModelDrivenComponent } from './product/product-model-driven/product-model-driven.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstsampleComponent,
    DatabindingComponent,
    DirectiveSampleComponent,
    MycustomDirective,
    PipeSampleComponent,
    MypipePipe,
    MenuComponent,
    PersonalComponent,
    EducationComponent,
    CustomerAddComponent,
    CustomerListComponent,
    ProjectionComponent,
    ArticleComponent,
    ProductTemplateDrivenComponent,
    ProductModelDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

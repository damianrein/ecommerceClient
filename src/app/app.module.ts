import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavsComponent } from './components/navs/navs.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CardComponent } from './components/card/card.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavsComponent,
    SearchResultComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    DetailComponent,
    CardComponent,
    CardContainerComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

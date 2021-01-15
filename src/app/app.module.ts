import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuotesComponent } from './quotes/quotes.component';
import { SkillsComponent } from './skills/skills.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { VideosComponent } from './videos/videos.component';
import { TryComponent } from './try/try.component';
import { ShortBioComponent } from './short-bio/short-bio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    QuotesComponent,
    SkillsComponent,
    PortofolioComponent,
    WorkHistoryComponent,
    ContactComponent,
    FooterComponent,
    VideosComponent,
    TryComponent,
    ShortBioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

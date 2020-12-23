import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CurriculumComponent } from "./curriculum/curriculum.component";
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExperienceComponent } from './experience/experience.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "curriculum", component: CurriculumComponent },
      { path: "", redirectTo: "/curriculum", pathMatch: "full" },
      { path: "**", component: PageNotFoundComponent }
    ]),

    FormsModule
  ],
  declarations: [AppComponent, HelloComponent, CurriculumComponent, PageNotFoundComponent, ContactComponent, EducationComponent, SidebarComponent, ContentComponent, AboutmeComponent, ExperienceComponent, NavbarTopComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

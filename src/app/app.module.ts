import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { TreeViewModule } from "@progress/kendo-angular-treeview";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { DialogsModule } from "@progress/kendo-angular-dialog";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TreeViewModule,
    BrowserAnimationsModule,
    ButtonsModule,
    DialogsModule
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

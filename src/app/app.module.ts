import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { TreeViewModule } from "@progress/kendo-angular-treeview";

import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { DialogsModule, WindowModule } from "@progress/kendo-angular-dialog";
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { MultiSelectModule } from '@progress/kendo-angular-dropdowns';


import { ReactiveFormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { TgkLookupTreeComponent } from './tgk-lookup-tree/tgk-lookup-tree.component';
import { LookupModalComponent } from './tgk-lookup-tree/lookup-modal/lookup-modal.component';
import { LookupTreeComponent } from './tgk-lookup-tree/lookup-modal/lookup-tree/lookup-tree.component';
import { LookupSelectionAreaComponent } from './tgk-lookup-tree/lookup-modal/lookup-selection-area/lookup-selection-area.component';
import { LookupFieldComponent } from './tgk-lookup-tree/lookup-field/lookup-field.component';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';

import { ReactiveComponentModule } from '@ngrx/component';
import { MockTreeLookupService } from "./mock.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TreeViewModule,
    BrowserAnimationsModule,
    ButtonsModule,
    DialogsModule,
    LabelModule,
    InputsModule,
    MultiSelectModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    DropDownsModule,
    WindowModule,
    HttpClientModule
  ],
  declarations: [AppComponent, HelloComponent, TgkLookupTreeComponent, LookupModalComponent, LookupTreeComponent, LookupSelectionAreaComponent, LookupFieldComponent],
  bootstrap: [AppComponent],
  providers: [MockTreeLookupService]
})
export class AppModule { }

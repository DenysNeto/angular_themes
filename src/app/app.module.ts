import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider'
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { MatBadgeModule } from '@angular/material/badge'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { InputsComponent } from './inputs/inputs.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablesComponent } from './inputs/tables/tables.component';
import { MatTableModule } from '@angular/material/table';
import { TableExpandableRowsExample } from './inputs/collapsable-table/collapsable-table.component';
import { TableBasicExample } from './inputs/multiselection-table/multiselection-table.component';
@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    TablesComponent,
    TableExpandableRowsExample,
    TableBasicExample
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatBottomSheetModule,
    MatCardModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatStepperModule,
    MatToolbarModule,
    MatTooltipModule,
    MatGridListModule,
    MatTabsModule,
    MatAutocompleteModule,
    FormsModule, ReactiveFormsModule,
    MatTableModule






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

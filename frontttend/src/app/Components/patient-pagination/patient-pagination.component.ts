import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { Table, TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelect, MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { NgClass } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DrawerModule } from 'primeng/drawer';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-patient-pagination',
  imports: [ DropdownModule,ButtonModule, SelectButtonModule, RadioButtonModule, ListboxModule, FloatLabelModule, DatePickerModule, CheckboxModule, AvatarModule, CardModule, TableModule, AvatarGroupModule, MenuModule, ToastModule, InputTextModule, MultiSelectModule, FormsModule, SelectModule, TagModule,IconFieldModule, InputIconModule, DrawerModule],
  templateUrl: './patient-pagination.component.html',
  standalone: true,
  styleUrl: './patient-pagination.component.scss'
})
export class PatientPaginationComponent {
 patients: any[] = [
    { first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com', mobile_phone: '(123) 456-7890', Address: 'California', status: 'completed' },
    { first_name: 'Jane', last_name: 'Smith', email: 'jane.smith@example.com', mobile_phone: '(098) 765-4321', Address: 'Texas', status: 'pending' },
    { first_name: 'Alice', last_name: 'Johnson', email: 'alice.johnson@example.com', mobile_phone: '(112) 233-4455', Address: 'New York', status: 'rejected' },
    { first_name: 'Bob', last_name: 'Brown', email: 'bob.brown@example.com', mobile_phone: '(556) 677-8899', Address: 'Florida', status: 'completed' }
  ]
  
  
 
  constructor() {}
  selectedStatus: string | null = null;
  statusOptions = [
    { label: 'All', value: null },
    { label: 'Completed', value: 'completed' },
    { label: 'Rejected', value: 'rejected' },
    { label: 'Pending', value: 'pending' } // Ensure all values are lowercase
  ];
  
  
  
  ngOnInit(): void {}

  onGlobalSearch(event: Event, dt: Table) {const inputElement = event.target as HTMLInputElement; // Cast to HTMLInputElement
      dt.filterGlobal(inputElement.value, 'contains');}

      onStatusFilterChange(event: any, table: Table): void {
        console.log('Selected Status:', this.selectedStatus); // Debugging
        if (!this.selectedStatus) {
          table.filter('', 'status', 'equals'); // Reset filter to show all records
        } else {
          table.filter(this.selectedStatus.toLowerCase(), 'status', 'equals'); // Ensure lowercase matching
        }
      }
      


      getSeverity(status: string): "success" | "secondary" | "info" | "warn" | "danger" | "contrast" | undefined {
        switch (status.toLowerCase()) { // Ensure lowercase for consistency
          case 'completed':
            return 'success';
          case 'pending':
            return 'warn';  // Use 'warn' instead of 'warning' (PrimeNG uses 'warn')
          case 'rejected':
            return 'danger';
          default:
            return 'info';
        }
            
            
      }
      
      
      
}
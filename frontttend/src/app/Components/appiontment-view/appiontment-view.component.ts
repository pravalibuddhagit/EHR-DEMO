import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-appiontment-view',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    DropdownModule,
    TagModule,
    IconFieldModule,
    InputIconModule,
    CardModule
  ],
  templateUrl: './appiontment-view.component.html',
  styleUrls: ['./appiontment-view.component.scss']
})
export class AppiontmentViewComponent implements OnInit {
  appointments = [
    { id: 1, doctor: { name: "Dr. Smith" }, patient: { name: "Viraj Patel" }, date: "02-26-2003", timeSlot: "9:00 AM - 10:00 AM", reason: "Consultation", status: "completed" },
    { id: 2, doctor: { name: "Dr. Jones" }, patient: { name: "Sophia Jones" }, date: "03-15-2003", timeSlot: "10:00 AM - 11:00 AM", reason: "Treatment", status: "pending" },
    { id: 3, doctor: { name: "Dr. Wilson" }, patient: { name: "Parthiv Mehta" }, date: "04-08-2003", timeSlot: "11:00 AM - 12:00 PM", reason: "Diagnosis", status: "rejected" }
  ];
  

  selectedStatus: string | null = null;
  statusOptions = [
    { label: 'All', value: null },
    { label: 'Completed', value: 'completed' },
    { label: 'Rejected', value: 'rejected' },
    { label: 'Pending', value: 'pending' }
  ];

  constructor() {}

  ngOnInit(): void {}

  onGlobalSearch(event: Event, dt: Table): void {
    const inputElement = event.target as HTMLInputElement;
    const filterValue = inputElement.value.trim().toLowerCase();
  
    dt.filterGlobal(filterValue, 'contains'); // This will now only filter by doctor.name and patient.name
  }
  

  onStatusFilterChange(event: any, table: Table): void {
    if (!this.selectedStatus) {
      table.filter('', 'status', 'equals'); // Reset filter to show all records
    } else {
      table.filter(this.selectedStatus.toLowerCase(), 'status', 'equals');
    }
  }

  getSeverity(status: string): "success" | "secondary" | "info" | "warn" | "danger" | "contrast" | undefined {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'pending':
        return 'warn';
      case 'rejected':
        return 'danger';
      default:
        return 'info';
    }
  }
}
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
// PrimeNG Modules
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SelectModule } from 'primeng/select';


@Component({
  selector: 'app-appointment-form',
  standalone: true,  // This makes it a standalone component
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'],
  providers: [MessageService, ConfirmationService], // Required for p-toast & p-confirmdialog
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   // Required for PrimeNG animations
    CalendarModule,          // Required for <p-calendar>
    ConfirmDialogModule,     // Required for <p-confirmdialog>
    ToastModule,             // Required for <p-toast>
    DropdownModule,          // Required for dropdown <select>
    InputTextModule,         // Required for input fields
    ButtonModule ,
    RouterModule ,        // Required for buttons,
    SelectModule
  ]
})export class AppointmentFormComponent {
  
  selectedprovider: any; // or specify correct type
  selectedpatient: any;  // or specify correct type

  appointmentForm!: FormGroup;

  providers = [
    { name: "Dr. Smith", value: "dr_smith", speciality: "Cardiologist" },
    { name: "Dr. Jones", value: "dr_jones", speciality: "Dermatologist" },
    { name: "Dr. Wilson", value: "dr_wilson", speciality: "Neurologist" }
  ];

  patients = [
    { name: "Viraj Patel", value: "patient_001", email: "viraj.patel@example.com" },
    { name: "Sophia Jones", value: "patient_002", email: "sophia.jones@example.com" },
    { name: "Parthiv Mehta", value: "patient_003", email: "parthiv.mehta@example.com" },
    { name: "Aisha Khan", value: "patient_004", email: "aisha.khan@example.com" },
    { name: "Liam Scott", value: "patient_005", email: "liam.scott@example.com" }
  ];

  timeSlots = [
    { slot: '9AM - 10AM' },
    { slot: '10AM - 11AM' },
    { slot: '11AM - 12PM' },
    { slot: '12PM - 1PM' },
    { slot: '2PM - 3PM' },
    { slot: '3PM - 4PM' },
    { slot: '4PM - 5PM' },
    { slot: '5PM - 6PM' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      provider_name: [null, Validators.required], // Changed from doctor_name to provider_name
      patient_name: [null, Validators.required],
      reason: ['', [Validators.required, Validators.minLength(3)]],
      appointment_date: [null, Validators.required],
      appointment_time: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log('Form Submitted', this.appointmentForm.value);

      this.confirmationService.confirm({
        message: 'Please confirm to proceed',
        header: 'Confirm Registration',
        icon: 'pi pi-exclamation-circle',
        acceptButtonProps: { label: 'Confirm', severity: 'primary' },
        rejectButtonProps: { label: 'Cancel', severity: 'contrast', outlined: true },
        accept: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Appointment created successfully!',
            life: 2000
          });

          this.appointmentForm.reset();
        },
        reject: () => {
          this.messageService.add({
            severity: 'warn',
            summary: 'Cancelled',
            detail: 'Appointment Booking cancelled',
            life: 2000
          });
        }
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill in all required fields.'
      });
    }
  }
}

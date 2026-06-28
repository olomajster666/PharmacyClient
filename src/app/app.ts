import { Component, signal, OnInit } from '@angular/core';
import { PharmacyService, Medication } from './pharmacy-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App implements OnInit {

  protected readonly title = signal('Pharmacy');
  medications: Medication[] = [];

  constructor(private pharmacyService: PharmacyService) { }

  ngOnInit(): void {
    this.pharmacyService.getMedications().subscribe({
      next: (data) => {
        this.medications = data;
      },
      error: (err) => {
        console.error('Błąd podczas pobierania leków:', err);
      }
    });
  }
}

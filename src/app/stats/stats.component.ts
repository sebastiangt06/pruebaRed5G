import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, NotificationComponent, PaginationComponent],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export default class StatsComponent {

  data = [
    {
      fechaHora: "2024-03-09 10:30",
      numeroDesembolso: "ABC123",
      tipoDocumento: "DNI",
      numeroDocumento: "12345678",
      monto: "$1000"
    },
    {
      fechaHora: "2024-03-10 15:45",
      numeroDesembolso: "DEF456",
      tipoDocumento: "Carnet de Extranjería",
      numeroDocumento: "87654321",
      monto: "$1500"
    },
    {
      fechaHora: "2024-03-11 09:15",
      numeroDesembolso: "GHI789",
      tipoDocumento: "Pasaporte",
      numeroDocumento: "98765432",
      monto: "$2000"
    },
    {
      fechaHora: "2024-03-09 10:30",
      numeroDesembolso: "ABC123",
      tipoDocumento: "DNI",
      numeroDocumento: "12345678",
      monto: "$1000"
    },
    {
      fechaHora: "2024-03-10 15:45",
      numeroDesembolso: "DEF456",
      tipoDocumento: "Carnet de Extranjería",
      numeroDocumento: "87654321",
      monto: "$1500"
    },
    {
      fechaHora: "2024-03-11 09:15",
      numeroDesembolso: "GHI789",
      tipoDocumento: "Pasaporte",
      numeroDocumento: "98765432",
      monto: "$2000"
    },
    {
      fechaHora: "2024-03-09 10:30",
      numeroDesembolso: "ABC123",
      tipoDocumento: "DNI",
      numeroDocumento: "12345678",
      monto: "$1000"
    },
    {
      fechaHora: "2024-03-10 15:45",
      numeroDesembolso: "DEF456",
      tipoDocumento: "Carnet de Extranjería",
      numeroDocumento: "87654321",
      monto: "$1500"
    },
    {
      fechaHora: "2024-03-11 09:15",
      numeroDesembolso: "GHI789",
      tipoDocumento: "Pasaporte",
      numeroDocumento: "98765432",
      monto: "$2000"
    },
    {
      fechaHora: "2024-03-09 10:30",
      numeroDesembolso: "ABC123",
      tipoDocumento: "DNI",
      numeroDocumento: "12345678",
      monto: "$1000"
    },
    {
      fechaHora: "2024-03-10 15:45",
      numeroDesembolso: "DEF456",
      tipoDocumento: "Carnet de Extranjería",
      numeroDocumento: "87654321",
      monto: "$1500"
    },
    // Agrega más objetos según sea necesario
  ];
}

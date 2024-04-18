import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configUrl = 'assets/config.json'; // Ruta del archivo de configuración
  public language: string = ''; // Propiedad language

  constructor(private http: HttpClient) {
    this.loadConfig(); // Llama al método para cargar la configuración en el constructor
  }

  private loadConfig(): void {
    this.http.get<any>(this.configUrl).subscribe(config => {
      this.language = config.language; // Asigna la propiedad language desde el archivo de configuración
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-http-rest-api',
  standalone: false,
  
  templateUrl: './http-rest-api.component.html',
  styleUrl: './http-rest-api.component.css'
})
export class HttpRestApiComponent implements OnInit{

  constructor(private http: HttpClient) {  }

  private apiKey = '7caa63cce007ed045ec306b9b8fcc6d4'; 
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  city: string = "lucknow";
  

  url = `${this.apiUrl}?q=${this.city}&appid=${this.apiKey}&units=metric`;

  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.apiKey
  });

  ngOnInit(): void {
    this.http.get(this.url).subscribe((t) => {
      console.log(t);
    })
  }
}

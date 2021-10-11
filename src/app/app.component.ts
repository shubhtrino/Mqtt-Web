import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mqtt-web';

  constructor(private http: HttpClient) { }

  private apiServerUrl = environment.apiBaseUrl;

  publishMessage(event: String) {

    console.log("url=>" + this.apiServerUrl + "/topic/" + event);

    this.http.get(`${this.apiServerUrl}/topic/${event}`).subscribe(
      (response: any) => {
        console.log(response);
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });

  }
}

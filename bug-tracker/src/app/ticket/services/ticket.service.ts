import { Injectable } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket_model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProjectService } from 'src/app/services/project.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  ticketUrl: string = 'http://localhost:5000/api/ticket/';

  constructor(
    private http: HttpClient,
    private projectService: ProjectService
    ) { }

  getTickets(id: number): Observable<TicketModel[]> {
    console.log("getting tickets....")
    return this.http.get<TicketModel[]>(this.ticketUrl + "getticketsbyprojectid/" + id);
  }

  addTicket(id: number, ticket: TicketModel): Observable<TicketModel> {
    return this.http.post<TicketModel>(this.ticketUrl, ticket, this.httpOptions);
  }

  // getProjectId(): number {
  //   return this.projectService.projectId;
  // }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}

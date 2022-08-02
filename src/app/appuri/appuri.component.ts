import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable,throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Component({
  selector: 'appuri',
  templateUrl: './appuri.component.html',
  styleUrls: ['./appuri.component.css']
})
export class AppuriComponent implements OnInit {

  private readonly url = "http://localhost:8080/JAXRS/api/galeria/search";
  xd = { "id": 0 };
  xdany: any;
  searchj:any|undefined;
  errormsg='';
  condition=false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  
  }

  search(a: string) {
    this.xdany=parseInt(a)
    this.xd={"id":this.xdany};
    this.http.post(this.url, this.xd).toPromise().then(data => {
      console.log(data);
      this.searchj=data;
      this.condition=false;
     },  (error)=>{
      if(error.status==404){
        this.errormsg="El id buscado no existe";
        this.condition=true;
      }
    })
  }
}
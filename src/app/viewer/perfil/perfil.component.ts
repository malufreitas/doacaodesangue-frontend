import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styleUrls: ["./perfil.component.css"]
})
export class perfilComponent implements OnInit {
  constructor(private cookieService: CookieService) {}
  // moment = require("moment");
  // moment().format();

  nome: any;
  sobrenome: any;
  datadenascimento: any;
  email: any;
  cpf: any;

  ngOnInit() {
    this.nome = this.cookieService.get("nome");
    this.sobrenome = this.cookieService.get("sobrenome");
    // this.datadenascimento = this.moment("12/25/1995", "MM-DD-YYYY");
    this.cookieService.get("datanascimento");
    this.email = this.cookieService.get("email");
    this.cpf = this.cookieService.get("cpf");
    // this.moment.format();
  }
}

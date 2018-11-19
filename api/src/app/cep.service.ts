import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Cep } from "./cep";

@Injectable({
  providedIn: "root"
})
export class CepService {
  constructor(private http: Http) {}

  getLocation(cep: string) {
    return new Promise((resolve, reject) => {
      this.http.get(`http://viacep.com.br/ws/${cep}/json/`).subscribe(
        (result: any) => {
          resolve(this.retrieveData(result.json()));
        },
        error => {
          reject(error.json());
        }
      );
    });
  }

  retrieveData(resultCep): Cep {
    let cep = new Cep();

    cep.cep = resultCep.cep;
    cep.logradouro = resultCep.logradouro;
    cep.complemento = resultCep.complemento;
    cep.bairro = resultCep.bairro;
    cep.localidade = resultCep.localidade;
    cep.uf = resultCep.uf;

    return cep;
  }
}

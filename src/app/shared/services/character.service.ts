import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Character, CharacterApiResponse} from "../models/character.model";

@Injectable({providedIn: "root"})
export class CharacterService {
  constructor(private http: HttpClient) {
  }

  getCharacter(page: string = "0"): Observable<CharacterApiResponse> {
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;
    return this.http.get<CharacterApiResponse>(url);
  }

  getSingleCharacter(id: string): Observable<Character> {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    return this.http.get<Character>(url);
  }

}

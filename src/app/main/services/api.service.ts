import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ISearch {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMovies {
  Search: ISearch[];
  totalResults: string;
  Response: string;
}

export interface IMovieDetails {
  Plot: string;
  Poster: string;
  Actors: string;
  Released: string;
  imdbRating: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  FIND_MOVIE_DETAILS = 'https://www.omdbapi.com/?i=IMDBID&apikey=dc9ce8dd';
  findMovieDetails(imdbID: string): Observable<IMovieDetails> {
    const url = this.FIND_MOVIE_DETAILS.replace('IMDBID', imdbID);
    return this.http.get<IMovieDetails>(url);
  }

  getMovies(title: string, page: number): Observable<IMovies> {
    const url = `https://www.omdbapi.com/?s=${title}&page=${page}&apikey=dc9ce8dd`;
    return this.http.get<IMovies>(url);
  }
}

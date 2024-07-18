import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class JsonDataService {
  private data: any;
  private currentIndex: number = 0;

  constructor(private http: HttpClient) { }

  // Fetch JSON data from server
  fetchData(url: string) {
    this.http.get(url).subscribe(response => {
      this.data = response
    });
  }

  // Get the current data item
  getCurrentData(): any {
    if (!this.data || this.currentIndex >= this.data.length) {
      return null;
    }
    return this.data[this.currentIndex];
  }

  // Move to the next data item
  getNextData(id: number): any {
    if (this.data && this.currentIndex < this.data.length - 1) {
      this.currentIndex = id;
      //return this.getCurrentData();
    }
    //return null;
  }

  // Reset to the first data item
  reset(): void {
    this.currentIndex = 0;
  }
}

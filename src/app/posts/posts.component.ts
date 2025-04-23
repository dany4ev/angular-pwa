import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  posts: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getPosts().subscribe(data => {
      this.posts = data;
    });
    
    if ('caches' in window) {

      caches.open('ngsw:/:1:data:dynamic:mission-api:cache').then(cache => {
        
        if (cache) {
          cache.match(this.dataService.apiUrl).then(res => {
            
            if (res) {
              res.json().then(result => {
                console.log(result);
                this.posts = result;
              });
            }
          });
        }
      });
    }
  }
}

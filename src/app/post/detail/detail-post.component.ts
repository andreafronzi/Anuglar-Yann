import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {PostService} from '../../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-yyyy',
  imports: [MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardTitle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './detail-post.component.html',
  styleUrl: './detail-post.component.css'
})
export class DetailPostComponent implements OnInit {


  post: any;
  postsService = inject(PostService);
  router = inject(Router);

  ngOnInit(): void {
    const id = parseFloat(this.router.url.split('/')[2]);

    this.postsService.getPost(id).subscribe({
      next: (data) => {
        this.post = data;
      }, error: (error) => {
        console.log(error);
      }, complete: () => {
        console.log("completo");
      }
    })
  }


}

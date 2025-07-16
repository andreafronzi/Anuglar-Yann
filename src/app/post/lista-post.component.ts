import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {PostService} from '../services/post.service';
import {NgForOf} from '@angular/common';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {ButtonProvaComponent} from '../button-prova/button-prova.component';
import {Router} from '@angular/router';


@Component({
  selector: 'app-lista-post',
  imports: [NgForOf, MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle, ButtonProvaComponent],
  templateUrl: './lista-post.component.html',
  styleUrl: './lista-post.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaPostComponent implements OnInit {


  data = signal<any[]>([]);

  postsService = inject(PostService);
  router = inject(Router);

  ngOnInit(): void {
    console.log('Inizializzazione del componente ListaPost');
    this.postsService.getPosts().subscribe({
      next: (data) => {
        console.log('Dati ricevuti:', data);
        this.data.set(data);

      }, error: (error) => {
        console.error('Errore durante il recupero dei post:', error);
      }, complete: () => {
        console.log('Chiamata API completata');
      }
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/post', id]);
  }


}

import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css'
})

export class FaceSnapComponent implements OnInit {
  title!: string;
  imageUrl!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  buttonText! :string;

  @Input() faceSnap!: FaceSnap;

  ngOnInit() {
      this.buttonText = 'Favorite?!';  
  }

  onSnap() {
    if (this.buttonText === 'Favorite?!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Yep! I like this character!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Favorite?!';
    }
  }  
}


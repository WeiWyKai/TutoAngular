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
      this.buttonText = 'Oh Snap!';  
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }  
}


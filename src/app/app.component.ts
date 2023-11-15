import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  zhaoYun!: FaceSnap;
  guanYu!: FaceSnap;
  zhangFei!: FaceSnap;

  ngOnInit(): void{

    this.zhaoYun ={
    title: 'Zhao Yun',
    imageUrl:'https://scontent-cdg4-3.xx.fbcdn.net/v/t31.18172-8/27747368_1315071701931961_6830916227403663270_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=4dc865&_nc_ohc=HfJPOiAviSYAX_k9JlP&_nc_ht=scontent-cdg4-3.xx&oh=00_AfDIWBpmGrfhXQ2Zep5QH8EJNkP0vCbD45wATjq9Y3bmwA&oe=657AF0A0',
    description:'5 tigers',
    createdDate: new Date(),
    snaps: 0
    }

    this.guanYu ={
      title:'Guan Yu',
      imageUrl:'https://www.creativeuncut.com/gallery-29/art/dw8e-guan-yu.jpg',
      description:'5 tigers',
      createdDate:new Date(),
      snaps:0,
      location:'fan castle'
      }
      
      this.zhangFei ={
      title:'Guan Yu',
      imageUrl:'https://www.koeitecmoeurope.com/dw9/images/characters/shoku/zoom/chouhi.jpg',
      description:'5 tigers',
      createdDate:new Date(),
      snaps:0,
      location:'changban',
      }
  }
}
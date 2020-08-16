import { Component } from '@angular/core';

@Component({
  selector: 'our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css'],
})
export class OurTeamComponent {
  teamMembers = [
    {
      name: 'Lilan Udayanga',
      position: 'Director of Finance',
      avatar: 'assets/img/team/lilan.png',
    },
    {
      name: 'Mihindu Ranasinghe',
      position: 'Director of Software Development',
      avatar: 'assets/img/team/mihindu.png',
    },
    {
      name: 'Pankajan Satkunam',
      position: 'Director of Research and Development',
      avatar: 'assets/img/team/Pankajan.png',
    },
    {
      name: 'Zeena Youhan',
      position: 'Director of Public Relations',
      avatar: 'assets/img/team/zeena.png',
    },
    {
      name: 'Sanjula Karunarathne',
      position: 'Director of Marketing',
      avatar: 'assets/img/team/sanjula.png',
    },
  ];
}

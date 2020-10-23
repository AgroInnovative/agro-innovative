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
      position: 'Doctor of Finance',
      description:'Researcing on - The impact of new technologies on the sustainability development of Agribusinesses in Sri Lanka',
      avatar: 'assets/img/team/lilan.png',
    },
    {
      name: 'Mihindu Ranasinghe',
      position: 'Director of Technology & Innovations',
      description:'Researching on - Machine Learning solutions on predicting pest attacks in paddy cultivation',
      avatar: 'assets/img/team/mihindu.png',
    },
    {
      name: 'Pankajan Satkunam',
      position: 'Director of Research and Development',
      description:'Researching on - converting air-condition machines into a weather data gathering weather station',
      avatar: 'assets/img/team/Pankajan.png',
    },
    {
      name: 'Zeena Youhan',
      position: 'Director of Public Relations',
      description:'Researching on - Reviewing pros and cons of existing solutions on predicting pest attacks in paddy cultivation',
      avatar: 'assets/img/team/zeena.png',
    },
    {
      name: 'Sanjula Karunarathne',
      position: 'Director of Marketing',
      description:'Researching on - Machine Learning solutions on predicting pest attacks in paddy cultivation',
      avatar: 'assets/img/team/sanjula.png',
    },
  ];
}

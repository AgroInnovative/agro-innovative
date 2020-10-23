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
      description:'Currently researcing on - The impact of new technologies on the sustainability development of Agribusinesses in Sri Lanka',
      avatar: 'assets/img/team/lilan.png',
    },
    {
      name: 'Mihindu Ranasinghe',
      position: 'Director of Technology & Innovations',
      description:'Currently researching on - Machine Learning and AI solutions on predicting upcoming pest attacks in agriculture sector',
      avatar: 'assets/img/team/mihindu.png',
    },
    {
      name: 'Pankajan Satkunam',
      position: 'Director of Research and Development',
      description:'Currently researching on - Converting air-condition machines into weather data gathering weather stations',
      avatar: 'assets/img/team/Pankajan.png',
    },
    {
      name: 'Zeena Youhan',
      position: 'Director of Public Relations',
      description:'Currently researching on - Reviewing existing solutions for predicting upcoming pest attacks in agriculture',
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

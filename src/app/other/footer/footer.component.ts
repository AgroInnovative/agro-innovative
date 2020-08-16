import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  ourLogo = 'assets/img/elzian_agro.png';
  elzianSoftwareLogo = 'assets/img/elzian_software_PNG.png';

  constructor() {}

  ngOnInit(): void {}
}

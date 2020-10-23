import { Component } from '@angular/core';

@Component({
  selector: 'mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent  {

  teamMembers = [
    {
      name: 'Asanka Pallewatta',
      position: 'President, Sri Lankan Academy of Young Scientists (SLAYS), Senior Lecturer in Nanotechnology, Faculty of Computing and Technology, University of Kelaniya, PhD (Denmark), MEng (Japan), BEng (Japan), Dip. in Fashion Design (Sri Lanka)',
      description:'Dr.Asanka has completed his PhD at DTU, working as a PhD scientist in Risø National Laboratory for Sustainable Energy, in Denmark. His research work focused on nanotechnology, developing a green-chemistry based superconductor application for wind power turbines. During his Bachelors and Masters degree period in Japan, all of his research work was done at the National Institute of Advanced Industrial Science & Technology in Nagoya, in the scopes of nanotechnology mainly focusing on semiconductor based functional thin film fabrication using laser ablation techniques.',
      avatar: 'assets/img/mentors/Asanka_Pallewatta2.jpg',
    },
    {
      name: 'Samitha Patabendige',
      position: 'Data Scientist and Data Engineer , Specialist Data Engineer, Rio Tinto, Western Australia',
      description: 'BSc. Eng, Electrical and Information Engineering – University of Ruhuna',
      avatar: 'assets/img/mentors/Samitha Patabendige.jpg',
    },
    {
      name: 'Thamara Gunasekara',
      position: 'Doctor of Philosophy in Management',
      description:'Dr. Thamara Gunasekare currently works at University of Kelaniya as a Senior Lecturer, Sri Lanka. She holds PhD in Management from the University of Kelaniya, MBA from the University of Colombo and B.Sc. in Business Administration from the University of Sri Jayawardenepura. She has over 20 years of teaching experience in Management. She is a visiting lecturer in Management for many universities. She has authored many journal articles in number of indexed journals. Dr. Thamara does research in Qualitative Social Research, Mixed Method Research in the area of Management',
      avatar: 'assets/img/mentors/Thamara_Gunasekare.jpg',
    },
    {
      name: 'Sachini Nimansha',
      position: 'MSc in Organizational Management (University of Peradeniya) , BSc (Hons) Agricultural Resource Management and Technology (University of Ruhuna)',
      description:'Advanced National Diploma in Human Resource Management (National Institute of Business Management)',
      avatar: 'assets/img/mentors/Sachini_Nimansha.jpg',
    },
    {
      name: 'Damith Gangodawilage',
      position: 'Doctoral Candidate in Entrepreneurship and Compliance Management , MD/Chief Business Architect - Corporate Business Solutions Pvt. Ltd, Founder/Chief Compliance Officer – Taxperts Lanka Pvt. Ltd',
      description:'Damith Gangodawilage is an award-winning serial entrepreneur with over 20 year of experience in taxation and financial management. He is currently pursuing his Doctorate in Entrepreneurship and Tax Compliance at the University of Kelaniya, Sri Lanka. His research interests are entrepreneurs tax compliance behavior, entrepreneurial success and digital entrepreneurship',
      avatar: 'assets/img/mentors/Damith_Gangodawilage.jpg',
    },
  ];

}

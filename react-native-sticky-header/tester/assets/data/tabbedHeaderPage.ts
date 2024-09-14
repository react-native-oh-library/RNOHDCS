import type { SectionListData } from 'react-native';
import { photosPortraitMe,photosPortraitBrandon, photosPortraitEwa, photosPortraitJennifer } from '../images';
import { tabbedHeaderPageIDs } from './testIDs';

export interface ItemType {
  id: string;
  imageUrl: string;
  title: string;
  subtitle: string;
}

export interface SectionType {
  tabTestID: string;
  title: string;
}

const foodImagesUrl = 'https://foodish-api.herokuapp.com/images';

export const TABBED_SECTIONS: SectionListData<ItemType, SectionType>[] = [
  {
    data: [
      {
        id: '0',
        title: 'Pizza Prosciutto e Funghi',
        subtitle: 'tomato sauce, mozzarella, ham, mushrooms',
        imageUrl: foodImagesUrl + '/pizza/pizza1.jpg',
      },
      {
        id: '1',
        title: 'Pizza Margharita',
        subtitle: 'tomato sauce, mozzarella',
        imageUrl: foodImagesUrl + '/pizza/pizza2.jpg',
      }
    ],
    key: 'Popular',
    tabTestID: tabbedHeaderPageIDs.Popular,
    title: 'Popular',
  },
  {
    data: [
      {
        id: '1003',
        title: 'Burger Double Cheese',
        subtitle: 'beef, lettuce, red onion, tomato, pickles, onion rings, BBQ sauce',
        imageUrl: foodImagesUrl + '/burger/burger1.jpg',
      },
      {
        id: '1004',
        title: 'Burger Bacon',
        subtitle: 'beef, lettuce, tomato, cheddar, pickles, bacon, mustard sauce',
        imageUrl: foodImagesUrl + '/burger/burger2.jpg',
      }
    ],
    key: 'ProductDesign',
    tabTestID: tabbedHeaderPageIDs.ProductDesign,
    title: 'Product Design',
  },
  {
    data: [
      {
        id: '1011',
        title: 'Kebab 1',
        subtitle: 'meat, salad, mild sauce',
        imageUrl: foodImagesUrl + '/biryani/biryani1.jpg',
      },
      {
        id: '1012',
        title: 'Kebab 2',
        subtitle: 'meat, salad, mixed mild & hot sauce',
        imageUrl: foodImagesUrl + '/biryani/biryani2.jpg',
      }
    ],
    key: 'Develpoment',
    tabTestID: tabbedHeaderPageIDs.Develpoment,
    title: 'Develpoment',
  },
  {
    data: [
      {
        id: '1023',
        title: 'Fried chicken with pasta and vegetables',
        subtitle: 'chicken, pasta, vegetables',
        imageUrl: foodImagesUrl + '/rice/rice1.jpg',
      },
      {
        id: '1024',
        title: 'Spring rolls with vegetables',
        subtitle: 'spring rolls, vegetables',
        imageUrl: foodImagesUrl + '/rice/rice2.jpg',
      },
      {
        id: '1025',
        title: 'Breaded Chicken with rice and vegetables',
        subtitle: 'chicken, rice, vegetables',
        imageUrl: foodImagesUrl + '/rice/rice3.jpg',
      }
    ],
    key: 'Project',
    tabTestID: tabbedHeaderPageIDs.Project,
    title: 'Project',
  }
];
const Me: User = {
  cards:[
    {
      id:'m001',
      authorName:'Brandon',
      mainText:"Popular",
      labelText:"Popular",
      elements:10,
      imageSource:photosPortraitBrandon
    },
    {
      id:'m002',
      authorName:'Jennifer',
      mainText:"React Native 101",
      labelText:"Design System",
      elements:16,
      imageSource:photosPortraitJennifer
    },
    {
      id:'m003',
      authorName:'Ewa',
      mainText:"Agile Basics",
      labelText:"Design System",
      elements:31,
      imageSource:photosPortraitEwa
    }
  ],
  color: 'rgb(78,15,255)',
  labelColor: 'rgb(89,80,249)',
  image: photosPortraitBrandon,
  about: 'Coffee buff. Web enthusiast. Unapologetic student. Gamer. Avid organizer.',
};
const Brandon: User = {
  cards:[
    {
      id:'b001',
      authorName:'Brandon',
      mainText:"Project Design",
      labelText:"Project Design",
      elements:10,
      imageSource:photosPortraitBrandon
    },
    {
      id:'b002',
      authorName:'Brandon',
      mainText:"Project Design",
      labelText:"Project Design",
      elements:10,
      imageSource:photosPortraitBrandon
    },
    {
      id:'b003',
      authorName:'Brandon',
      mainText:"Design System",
      labelText:"Design System",
      elements:10,
      imageSource:photosPortraitBrandon
    }
  ]
};
const Jennifer: User = {
  cards:[
    {
      id:'j001',
      authorName:'Jennifer',
      mainText:"Development",
      labelText:"Development",
      elements:10,
      imageSource:photosPortraitJennifer
    },
    {
      id:'j002',
      authorName:'Jennifer',
      mainText:"Development",
      labelText:"Development",
      elements:31,
      imageSource:photosPortraitJennifer
    },
    {
      id:'j003',
      authorName:'Jennifer',
      mainText:"Development",
      labelText:"Development",
      elements:16,
      imageSource:photosPortraitJennifer
    }
  ]
};
const Ewa: User = {
  cards:[
    {
      id:'e001',
      authorName:'Ewa',
      mainText:"Project Design",
      labelText:"Project Design",
      elements:16,
      imageSource:photosPortraitEwa
    },
    {
      id:'e002',
      authorName:'Ewa',
      mainText:"Project Design",
      labelText:"Project Design",
      elements:31,
      imageSource:photosPortraitEwa,
    },
    {
      id:'e003',
      authorName:'Ewa',
      mainText:"Project Design",
      labelText:"Project Design",
      elements:10,
      imageSource:photosPortraitEwa,
    }
  ]
};

export { Me,Brandon, Jennifer,Ewa};

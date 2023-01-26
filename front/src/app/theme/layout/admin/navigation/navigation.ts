import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  // {
  //   id: 'dashboard',
  //   title: 'Dashboard',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'default',
  //       title: 'Default',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/default',
  //       icon: 'ti ti-dashboard',
  //       breadcrumbs: false
  //     }
  //   ]
  // },
  // {
  //   id: 'page',
  //   title: 'Pages',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'Authentication',
  //       title: 'Authentication',
  //       type: 'collapse',
  //       icon: 'ti ti-key',
  //       children: [
  //         {
  //           id: 'login',
  //           title: 'Login',
  //           type: 'item',
  //           url: '/guest/login',
  //           target: true,
  //           breadcrumbs: false
  //         },
  //         {
  //           id: 'register',
  //           title: 'Register',
  //           type: 'item',
  //           url: '/guest/register',
  //           target: true,
  //           breadcrumbs: false
  //         }
  //       ]
  //     }
  //   ]
  // },
  
  {
    id: 'client',
    title: 'Client',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'addCar',
        title: 'Nouvelle Voiture',
        type: 'item',
        classes: 'nav-item',
        url: '/addCar',
        icon: 'ti ti-typography'
      },
      {
        id: 'myCar',
        title: 'Mes Voitures',
        type: 'item',
        classes: 'nav-item',
        url: '/myCars',
        icon: 'ti ti-brush'
      }
    ]
  },
  {
    id: 'Atelier',
    title: 'Atelier',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'GetCars',
        title: 'Listes des voitures',
        type: 'item',
        classes: 'nav-item',
        url: '/GetCars',
        icon: 'ti ti-typography'
      },
      {
        id: 'BonDeSortie',
        title: 'Bon de Sorties',
        type: 'item',
        classes: 'nav-item',
        url: '/BonDeSortie',
        icon: 'ti ti-brush'
      }
    ]
  },
  {
    id: 'Finance',
    title: 'Finance',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'liste-paiement',
        title: 'liste paiement',
        type: 'item',
        classes: 'nav-item',
        url: '/liste-paiement',
        icon: 'ti ti-typography'
      },
      {
        id: 'stats',
        title: 'Statistiques',
        type: 'item',
        classes: 'nav-item',
        url: '/stats',
        icon: 'ti ti-brush'
      }
    ]
  },
  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: '/sample-page',
  //       classes: 'nav-item',
  //       icon: 'ti ti-brand-chrome'
  //     },
  //     {
  //       id: 'document',
  //       title: 'Document',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: 'https://codedthemes.gitbook.io/berry-angular/',
  //       icon: 'ti ti-vocabulary',
  //       target: true,
  //       external: true
  //     }
  //   ]
  // }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}

export interface IMenus {
  label: string;
  link: string;
  withIcon?: boolean;
  iconName?: string
}

export interface IChildrenMenus extends IMenus {}

export interface IParentMenus extends IMenus {
  childrens: IChildrenMenus[] | any[];
}

export const menus: IParentMenus[] = [
  {
    label: 'Dashboard',
    link: '/admin',
    childrens: [],
    withIcon: true,
    iconName: 'FaLayerGroup'
  },
  {
    label: 'Supplier',
    link: '/admin/suppliers',
    childrens: [],
    withIcon: true,
    iconName: 'FaUser'
  },
  {
    label: 'Customer',
    link: '/admin/customers',
    childrens: [],
    withIcon: true,
    iconName: 'FaUserTie'
  },
  {
    label: 'Order',
    link: '/admin/orders',
    childrens: [],
    withIcon: true,
    iconName: 'FaMoneyBill'
  }
]
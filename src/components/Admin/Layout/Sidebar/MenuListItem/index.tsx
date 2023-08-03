"use client";

import React from 'react';
import { IconType } from 'react-icons';
import { IChildrenMenus } from '../data';
import Link from 'next/link';
import iconMapping from '@/utils/react-icons';
import { usePathname } from 'next/navigation';

export interface IMenuItem {
  label: string;
  link: string;
  withIcon?: boolean;
  iconName?: string;
  childrens: IChildrenMenus[];
}

interface IProps {
  menus: IMenuItem[];
}

export default function MenuListItem (props: IProps) {
  const pathname = usePathname();
  const {
    menus
  } = props;

  const computeIcon = (data: IMenuItem) => {
    const iconStr = (typeof data.iconName !== 'undefined' ? data.iconName : '');
    const Icon: IconType | undefined = iconMapping[iconStr];

    return (
      <Icon size={24} />
    )
  }

  return (
    <ul className="nav flex-column mb-auto">
      {menus.map((data, index) => (
        <li key={index} className={`nav-item ${pathname === data.link ? 'active' : ''}`}>
          {data.childrens.length === 0 && (
            <Link
              href={data.link}
              className={`nav-link d-flex align-items-center gap-4 text-white`}
            >
              {data.withIcon && (computeIcon(data))}
              <span>
                {data.label}
              </span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
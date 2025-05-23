import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Bar, Icon, Item, Text } from './styles';

const tabs = [
  {
    path: '/',
    label: 'Главная',
    icon: '/icons/home.svg',
    iconActive: '/icons/home-active.svg',
  },
  {
    path: '/history',
    label: 'История',
    icon: '/icons/history.svg',
    iconActive: '/icons/history-active.svg',
  },
  {
    path: '/qr',
    label: 'QR-код',
    icon: '/icons/qr.svg',
    iconActive: '/icons/qr-active.svg',
  },
  {
    path: '/profile',
    label: 'Профиль',
    icon: '/icons/user.svg',
    iconActive: '/icons/user-active.svg',
  },
];

const TabBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Bar>
      {tabs.map(({ path, label, icon, iconActive }) => {
        const active = location.pathname === path;

        return (
          <Item key={path} active={active} onClick={() => navigate(path)}>
            <Icon src={active ? iconActive : icon} alt={label} active={active} />
            <Text active={active}>{label}</Text>
          </Item>
        );
      })}
    </Bar>
  );
};

export default TabBar;

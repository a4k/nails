import React from 'react';
import { useAppSelector } from '../../store/appStore';
import { MasterItem } from './MasterItem';

export function MasterComponent() {
  const { masters } = useAppSelector(state => state.master);
  return (
    <div>
      {masters.map(master => (
        <MasterItem key={master.id} master={master} />
      ))}
    </div>
  );
}

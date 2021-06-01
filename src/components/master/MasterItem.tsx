import React from 'react';
import { Master } from '../../domain/Master';

interface MasterItemProps {
  master: Master;
}
export function MasterItem({ master }: MasterItemProps) {
  return <>{master.name}</>;
}

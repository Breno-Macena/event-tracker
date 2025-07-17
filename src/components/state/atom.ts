import { atom } from "recoil";
import { IEvento } from "../../interfaces/IEvento";

export const listDeEventosState = atom<IEvento[]>({
  key: 'listDeEventosState',
  default: [],
});
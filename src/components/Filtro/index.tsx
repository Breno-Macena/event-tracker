import React, { useState } from 'react';
import style from './Filtro.module.scss';
import { filtroDeEventosState } from '../../state/atom';
import { useSetRecoilState } from 'recoil';
import { IFiltroDeEventos } from '../../interfaces/IFiltroDeEventos';

const Filtro: React.FC = () => {
  const [data, setData] = useState('')
  const [completo, setCompleto] = useState<'' | 'sim' | 'nao'>('');
  const setFiltroDeEvento = useSetRecoilState<IFiltroDeEventos>(filtroDeEventosState);

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const filtro: IFiltroDeEventos = { data: null, completo: null }
    if (data) {
      filtro.data = new Date(data)
    }
    if (completo !== '') {
      filtro.completo = completo === 'sim'
    }
    setFiltroDeEvento(filtro)
  }

  const handleCompletoChange = (value: string) => {
    setCompleto(value as '' | 'sim' | 'nao');
  }

  return (<form className={style.Filtro} onSubmit={submeterForm}>
    <h3 className={style.titulo}>Filtrar por data</h3>
    <input
      type="date"
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)}
      placeholder="Por data"
      value={data} />

    <select
      name="completo"
      className={style.input}
      onChange={evento => handleCompletoChange(evento.target.value)}
      value={completo}
    >
      <option value="">Todos</option>
      <option value="sim">Completos</option>
      <option value="nao">Incompletos</option>
    </select>

    <button className={style.botao} type="submit">
      Filtrar
    </button>

  </form>)
}

export default Filtro
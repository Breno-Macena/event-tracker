import React from 'react';
import { IEvento } from '../../interfaces/IEvento'
import style from './Evento.module.scss';
import EventoCheckbox from './EventoCheckbox';
import useExcluirEvento from '../../state/hooks/useExcluirEvento';

const Evento: React.FC<{ evento: IEvento }> = ({ evento }) => {
  const excluirEvento = useExcluirEvento();

  const deletarEvento = () => {
    if (evento.id === undefined) return;
    excluirEvento(evento.id);
  }

  const estilos = [
    style.Evento
  ]

  if (evento.completo) {
    estilos.push(style.completo)
  }

  return (
    <div className={estilos.join(' ')}>
      <EventoCheckbox evento={evento} />
      <div className="cards-info">
        <h3 className={style.descricao}>{evento.descricao} - {evento.inicio.toLocaleDateString()}</h3>
      </div>
      <i className="far fa-times-circle fa-2x" onClick={deletarEvento}></i>
    </div>
  )
}

export default Evento

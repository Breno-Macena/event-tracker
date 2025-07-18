
import React from 'react'
import style from './Calendario.module.scss';
import ptBR from './localizacao/ptBR.json'
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend'
import 'kalend/dist/styles/index.css';
import { IEvento } from '../../interfaces/IEvento';
import useAtualizarEvento from '../../state/hooks/useAtualizarEvento';
import useListaDeEventos from '../../state/hooks/useListaDeEventos';

const Calendario: React.FC = () => {
  const eventos = useListaDeEventos()

  const atualizarEvento = useAtualizarEvento()

  const eventosKalend = new Map<string, CalendarEvent[]>()

  eventos.forEach(evento => {
    const chave = evento.inicio.toISOString().slice(0, 10)
    if (!eventosKalend.has(chave)) {
      eventosKalend.set(chave, [])
    }
    eventosKalend.get(chave)?.push({
      id: evento.id,
      startAt: evento.inicio.toISOString(),
      endAt: evento.fim.toISOString(),
      summary: evento.descricao,
      color: 'blue'
    })
  })

  const onEventDragFinish: OnEventDragFinish = (
    prevEvent: CalendarEvent,
    updatedEvent: CalendarEvent
  ) => {
    const evento = eventos.find(e => e.descricao === prevEvent.summary);
    if (!evento) return;

    const eventoAtualizado: IEvento = { ...evento };
    eventoAtualizado.inicio = new Date(updatedEvent.startAt);
    eventoAtualizado.fim = new Date(updatedEvent.endAt);

    atualizarEvento(eventoAtualizado);
  };

  return (
    <div className={style.Container}>
      <Kalend
        events={Array.from(eventosKalend.values()).flat()}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'customLanguage'}
        customLanguage={ptBR}
        onEventDragFinish={onEventDragFinish}
      />
    </div>
  );
}

export default Calendario
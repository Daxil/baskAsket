import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import './../App.css';
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';

export default function TouchUIDemo() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState(null);

  const handleSave = () => {
    console.log('Данные сохранены:', selectedDate, time);
  };
  const handleDelete = () => {
    setSelectedDate(null);
    setTime(null);
  };

  // Функция для обновления состояния при выборе даты и времени
  const handleDateChange = (e) => {
    setSelectedDate(e.value);
    setTime(e.value);
  };

  return (
    <div className="card flex flex-wrap gap-3 p-fluid" style={{ border : 'none'}}>
      <label htmlFor="calendar-24h" className="font-bold block mb-2">
        Выберете время когда будет удобно прийти
      </label>
      <div class="row">
        <div class="col">
          <div className="flex-auto" >
            <Calendar
              value={selectedDate}
              onChange={handleDateChange}
              showTime
              selectionMode="single"
              readOnlyInput
            />
          </div>
        </div>
        <div class="col">
        <ButtonGroup>
          <Button label="Сохранить" icon="pi pi-check" onClick={handleSave} />
          <Button label="Удалить" icon="pi pi-trash" onClick={handleDelete} />
        </ButtonGroup>

        </div>
      </div>
    </div>
  );
}

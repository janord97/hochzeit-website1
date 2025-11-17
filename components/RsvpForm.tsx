import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { EventType } from '../App';

// WICHTIG: HIER DEINE GOOGLE APPS SCRIPT WEB-APP-URL EINFÜGEN.
// Du erhältst diese URL, nachdem du das Google Apps Script bereitgestellt hast.
// Sie muss auf "/exec" enden.
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzeHGMaCunA_S__PTy9t8FxKL1BHneWSj8AXX4rwO9Y-eDxn9-ZJQm6WAsKEvj4Zbgk/exec';

interface Guest {
  name: string;
  attendance_alm: 'yes' | 'no' | '';
  attendance_civil: 'yes' | 'no' | '';
  dietary: string;
  otherDietary: string;
}

interface RsvpFormProps {
  eventType: EventType;
}

const RsvpForm: React.FC<RsvpFormProps> = ({ eventType }) => {
  const [guestCount, setGuestCount] = useState('');
  const [guests, setGuests] = useState<Guest[]>([]);
  const [comments, setComments] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleGuestCountChange = (countStr: string) => {
    setGuestCount(countStr);
    const count = parseInt(countStr, 10);
    if (!isNaN(count) && count > 0 && count <= 10) {
      const newGuests: Guest[] = Array.from({ length: count }, (_, i) => {
        return guests[i] || { name: '', attendance_alm: '', attendance_civil: '', dietary: 'alles', otherDietary: '' };
      });
      setGuests(newGuests);
    } else {
      setGuests([]);
    }
  };

  const handleGuestChange = (index: number, field: keyof Guest, value: string) => {
    const newGuests = [...guests];
    const guestToUpdate = { ...newGuests[index], [field]: value };

    // Reset dietary preferences if guest is not attending any event
    if ((field === 'attendance_alm' && value === 'no' && guestToUpdate.attendance_civil !== 'yes') ||
        (field === 'attendance_civil' && value === 'no' && guestToUpdate.attendance_alm !== 'yes')) {
      guestToUpdate.dietary = 'alles';
      guestToUpdate.otherDietary = '';
    }

    if (field === 'dietary' && value !== 'other') {
      guestToUpdate.otherDietary = '';
    }

    newGuests[index] = guestToUpdate;
    setGuests(newGuests);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Fix: Removed an obsolete check for a placeholder SCRIPT_URL. The check was causing a
    // TypeScript error because it compared a constant string with a different literal,
    // which would always evaluate to false as the SCRIPT_URL has already been configured.
    if (guests.length === 0) {
        setError('Bitte gib an, für wie viele Personen du antwortest.');
        setStatus('error');
        return;
    }

    for (const guest of guests) {
        if (!guest.name.trim()) {
            setError('Bitte fülle für jeden Gast den Namen aus.');
            setStatus('error');
            return;
        }
        if ((eventType === 'alm' || eventType === 'all') && !guest.attendance_alm) {
            setError(`Bitte gib für jeden Gast an, ob er auf der Stöttlalm teilnimmt.`);
            setStatus('error');
            return;
        }
        if ((eventType === 'civil' || eventType === 'all') && !guest.attendance_civil) {
            setError(`Bitte gib für jeden Gast an, ob er bei der Feier nach dem Standesamt teilnimmt.`);
            setStatus('error');
            return;
        }
    }

    setStatus('submitting');
    setError('');

    const guestsToSubmit = guests.map(g => ({
      name: g.name,
      attendance_alm: g.attendance_alm,
      attendance_civil: g.attendance_civil,
      dietary: (g.attendance_alm === 'yes' || g.attendance_civil === 'yes')
        ? (g.dietary === 'other' ? g.otherDietary : g.dietary)
        : '',
    }));

    const body = new URLSearchParams();
    body.append('comments', comments);
    body.append('guestsJSON', JSON.stringify(guestsToSubmit));

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: body,
      });
      const resultText = await response.text();
      if (response.ok && resultText === 'success') {
        setStatus('submitted');
      } else {
        throw new Error(resultText || 'Ein unbekannter Fehler ist aufgetreten.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('Leider gab es ein Problem beim Senden. Bitte versucht es später erneut oder kontaktiert uns direkt.');
      setStatus('error');
    }
  };
  
  if (status === 'submitted') {
    return (
      <SectionWrapper id="rsvp" title="Danke!" className="bg-brand-green/10">
        <div className="text-center max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-brand-green font-serif mb-4">
            Vielen Dank für eure Rückmeldung!
          </h3>
          <p className="text-brand-dark/80">
            Wir haben eure Antwort erhalten. Danke für eure Rückmeldung. Wir freuen uns auf alle, die dabei sein können!
          </p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper
      id="rsvp"
      title="Rückmeldung"
      subtitle="Bitte gebt uns bis zum 15.02.2026 Bescheid."
      className="bg-brand-green/10"
    >
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Fehler: </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          
          <div>
            <label htmlFor="guestCount" className="block text-sm font-medium text-brand-dark">Für wie viele Personen möchtest du antworten?</label>
            <div className="relative mt-1">
              <select
                id="guestCount"
                value={guestCount}
                onChange={(e) => handleGuestCountChange(e.target.value)}
                required
                className="appearance-none block w-full pl-3 pr-10 py-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green text-brand-dark"
              >
                <option value="" disabled>Bitte wählen...</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} Person{i > 0 ? 'en' : ''}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-dark">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {guests.length > 0 && (
            <div className="space-y-6 pt-4 border-t border-gray-200">
              <h3 className="text-lg font-medium text-brand-dark">Details zu den Gästen</h3>
              {guests.map((guest, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-md space-y-4">
                  <h4 className="font-semibold text-brand-dark">Gast {index + 1}</h4>
                  <div>
                    <label htmlFor={`guest_name_${index}`} className="block text-sm font-medium text-brand-dark">Name des Gastes</label>
                    <input type="text" id={`guest_name_${index}`} value={guest.name} onChange={(e) => handleGuestChange(index, 'name', e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green text-brand-dark" />
                  </div>
                  
                  {(eventType === 'alm' || eventType === 'all') && (
                    <fieldset>
                      <legend className="text-sm font-medium text-brand-dark">Teilnahme an der Feier auf der Stöttlalm?</legend>
                      <div className="mt-2 space-x-4 flex">
                        <div className="flex items-center">
                          <input id={`attend_alm_yes_${index}`} name={`attendance_alm_${index}`} type="radio" value="yes" checked={guest.attendance_alm === 'yes'} onChange={(e) => handleGuestChange(index, 'attendance_alm', e.target.value)} required className="h-4 w-4 text-brand-green border-gray-300 focus:ring-brand-green" />
                          <label htmlFor={`attend_alm_yes_${index}`} className="ml-2 block text-sm text-brand-dark">Ja</label>
                        </div>
                        <div className="flex items-center">
                          <input id={`attend_alm_no_${index}`} name={`attendance_alm_${index}`} type="radio" value="no" checked={guest.attendance_alm === 'no'} onChange={(e) => handleGuestChange(index, 'attendance_alm', e.target.value)} className="h-4 w-4 text-brand-green border-gray-300 focus:ring-brand-green" />
                          <label htmlFor={`attend_alm_no_${index}`} className="ml-2 block text-sm text-brand-dark">Nein</label>
                        </div>
                      </div>
                    </fieldset>
                  )}

                  {(eventType === 'civil' || eventType === 'all') && (
                    <fieldset>
                      <legend className="text-sm font-medium text-brand-dark">Teilnahme an der Feier nach dem Standesamt?</legend>
                      <div className="mt-2 space-x-4 flex">
                        <div className="flex items-center">
                          <input id={`attend_civil_yes_${index}`} name={`attendance_civil_${index}`} type="radio" value="yes" checked={guest.attendance_civil === 'yes'} onChange={(e) => handleGuestChange(index, 'attendance_civil', e.target.value)} required className="h-4 w-4 text-brand-green border-gray-300 focus:ring-brand-green" />
                          <label htmlFor={`attend_civil_yes_${index}`} className="ml-2 block text-sm text-brand-dark">Ja</label>
                        </div>
                        <div className="flex items-center">
                          <input id={`attend_civil_no_${index}`} name={`attendance_civil_${index}`} type="radio" value="no" checked={guest.attendance_civil === 'no'} onChange={(e) => handleGuestChange(index, 'attendance_civil', e.target.value)} className="h-4 w-4 text-brand-green border-gray-300 focus:ring-brand-green" />
                          <label htmlFor={`attend_civil_no_${index}`} className="ml-2 block text-sm text-brand-dark">Nein</label>
                        </div>
                      </div>
                    </fieldset>
                  )}

                  {(guest.attendance_alm === 'yes' || guest.attendance_civil === 'yes') && (
                     <fieldset className="pt-2">
                        <legend className="text-sm font-medium text-brand-dark">Ernährungsgewohnheiten</legend>
                        <div className="mt-2 space-y-2">
                           {['Alles', 'Vegetarisch', 'Vegan'].map(option => (
                            <div key={option} className="flex items-center">
                              <input id={`diet_${option.toLowerCase()}_${index}`} name={`dietaryOption_${index}`} type="radio" value={option.toLowerCase()} checked={guest.dietary === option.toLowerCase()} onChange={(e) => handleGuestChange(index, 'dietary', e.target.value)} className="h-4 w-4 text-brand-green border-gray-300 focus:ring-brand-green" />
                              <label htmlFor={`diet_${option.toLowerCase()}_${index}`} className="ml-3 block text-sm text-brand-dark">{option === 'Alles' ? 'Ich esse alles' : option}</label>
                            </div>
                          ))}
                          <div className="flex items-center">
                            <input id={`diet_other_${index}`} name={`dietaryOption_${index}`} type="radio" value="other" checked={guest.dietary === 'other'} onChange={(e) => handleGuestChange(index, 'dietary', e.target.value)} className="h-4 w-4 text-brand-green border-gray-300 focus:ring-brand-green" />
                            <label htmlFor={`diet_other_${index}`} className="ml-3 block text-sm text-brand-dark">Sonstiges</label>
                          </div>
                          {guest.dietary === 'other' && (
                            <input type="text" value={guest.otherDietary} onChange={(e) => handleGuestChange(index, 'otherDietary', e.target.value)} placeholder="z.B. Allergien, Unverträglichkeiten" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green text-brand-dark" />
                          )}
                        </div>
                    </fieldset>
                  )}
                </div>
              ))}
            </div>
          )}

          <div>
            <label htmlFor="comments" className="block text-sm font-medium text-brand-dark">Möchtet ihr uns noch etwas mitteilen?</label>
            <textarea id="comments" value={comments} onChange={(e) => setComments(e.target.value)} rows={3} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green text-brand-dark"></textarea>
          </div>
          <div>
            <button type="submit" disabled={guests.length === 0 || status === 'submitting'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-green hover:bg-brand-green/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green disabled:bg-gray-400 disabled:cursor-not-allowed">
              {status === 'submitting' ? 'Wird gesendet...' : 'Antwort senden'}
            </button>
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default RsvpForm;
<h4>Oppgaver</h4>
   Disse oppgavene er ment å løses med kun funksjoner, variabler, operatorer, if-setninger og MVC. Man trenger ikke bruke løkker eller lister.
      <ol>
         <li>
            Studer spillet her: <a href="https://www.mathsisfun.com/games/towerofhanoi.html">mathsisfun.com/games/towerofhanoi.html</a>
            og sørg for at dere forstår reglene. 
         </li>
         <li>
            Sørg for at <tt>updateView()</tt> tegner opp diskene ut fra innholdet av variablene i modellen.
            Merk at pga <tt>display: flex</tt> og <tt>flex-direction: column-reverse</tt> må dere legge til 
            diskene i motsatt rekkefølge av ellers. Den siste taggen inne i hvert tårn kommer øverst
         </li>
         <li>
            Implementer aller enkleste versjon av controller-funksjonene, nemlig å flytte hver disk uten å sjekke om det er lov
            eller ikke. Sjekk at det virker før dere går videre. 
         </li>
         <li>
           Implementer så reglene. Du kan ikke flytte en disk til et tårn om det alt ligger en disk der som er mindre.                
         </li>
         <li>
            Skjul alltid knappene som flytter en disk dit den allerede er. Skjul også knappene som er ulovlige å utføre.
         </li>
         <li>
            Vis en melding på skjermen hvis spillet er løst, det vil si at alle diskene er på høyre tårn. Vis i det
            tilfellet en knapp for å starte spillet på nytt. 
         </li>
      </ol>
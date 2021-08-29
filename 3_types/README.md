### Zad. 1 ###

- Stwórz konfigurację projektu przy pomocy komendy `npm init`
- Stwórz konfigurację projektu przy pomocy komendy `npx tsc --init`


### Zad. 2 ###

- Zdefiniuj obiekt `Person` z kluczami `name`, `latName`, `age`, `sex`, `proffession`, `skills`
- klucze `name`, `latName` - to stringi tylko do odczytu, `age` – liczba, `sex` – tuple, `proffession` – string, `skills` – tablica
- otypuj zgodnie ze schematem
- dodaj do tablicy `skills` nową umiejętność (uzyj metody Array.push)
- spróbuj zmienić wartości `name` i `lastName`

### Zad. 3 ### 

- Stwórz funkcję która przyjmuje tablicę liczb i zwraca ich średnią (użyj obiektu Math i metody round)
- otypuj parametry funkcji i zwracaną wartość

### Zad. 4 ###

- Stwórz ankietę przy pomocy biblioteki prompts
Pytania:

1. Podaj imię 
2. Podaj nazwisko
3. Wiek
4. Podaj płec – do wybory kobieta | mężczyzna. Użyj typu `multiselect` w prompts
5. Zainteresowania – do wyboru programowanie | moda | muzyka
6. Wybierz swojego idola – do wyboru: jeśli użytkownik wskazał jako zainteresowanie programowanie do wybory ma: Rasmus Lerdorf, Linus Torvalds | Beandon Eich, jeśli modę Gucci, Versace, Lagerfeld, jeśli muzykę Sting | Doda | Bono
7. Wyświetl uzytkownikowi podsumowanie jego wyborów

- Otypuj wszystkie odpowiedzi

### Zad. 5 ###

- stwórz obiekt `skills`
- obiekt powinien zawierać dwa wymagane klucze `frontend` i `backend` zawierające tablicę ze stringami, do których wpisz swoje umiejętności. Dodatkowo obiekt może zawierać dowolne klucze, do których może wpisać swoje umiejętności. Pamiętaj aby można było w nieograniczony sposób dodawać nowe skille.

### Zad. 6 ### 

- wykonaj zapytanie asynchroniczne do api
```
(async () => {
    try {
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const json = await res.json()
    return json
    } catch(error) {
        console.error(error)
    }
})()
```
- otypuj funkcję
- jest to zapytanie asynchroniczne tzw. Promise | użyj więc typu Promise\<zwracanedane\>
- do otypowania zwracanej wartości możesz użyć narzędzia QuickType
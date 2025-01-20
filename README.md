# GymBuddy

GymBuddy to aplikacja internetowa stworzona z myślą o osobach, które chcą zarządzać swoimi planami treningowymi, ustawiać cele i monitorować postępy. Aplikacja umożliwia również wybór karnetu oraz zarządzanie danymi płatności.

## Funkcjonalności

- **Rejestracja użytkownika**: Tworzenie konta z podstawowymi danymi (imię, nazwisko, e-mail, hasło).
- **Logowanie**: Automatyczne ustawianie aktualnego użytkownika w kontekście.
- **Dodawanie planów treningowych**: Tworzenie spersonalizowanych planów treningowych.
- **Wyświetlanie planów treningowych**: Podgląd dostępnych planów treningowych i możliwość ich usuwania.
- **Ustawianie celów**: Dodawanie celów treningowych z opisem i terminem realizacji.
- **System płatności**: Obsługa danych karty płatniczej przy zakupie karnetu.
- **Firebase**: Zapisywanie i pobieranie danych użytkownika, planów treningowych oraz celów z bazy danych Firebase.

## Technologie

- **Frontend**: React, TypeScript, TailwindCSS
- **Backend**: Express.js, Firebase Firestore
- **Zarządzanie stanem**: React Context API
- **Formularze**: React Hook Form
- **Styling**: TailwindCSS

## Instalacja

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/m4gler/PAI-projekt.git
   ```

2. Przejdź do katalogu projektu:
   ```bash
   cd PAI-projekt
   ```

3. Zainstaluj zależności:
   ```bash
   npm install
   ```

4. Uruchom projekt:
   ```bash
   npm run dev
   ```

5. Otwórz przeglądarkę i przejdź do http://localhost:5173.

## Konfiguracja Firebase

1. Utwórz projekt na platformie Firebase.
2. Skopiuj konfigurację projektu Firebase do pliku `firebaseConfig.ts`:
   ```typescript
   
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


```const firebaseConfig = {
  apiKey: "AIzaSyCBXcXTM2nEtod7BpikHdBW4mTjnlPey6I",
  authDomain: "pai-app-d32a5.firebaseapp.com",
  projectId: "pai-app-d32a5",
  storageBucket: "pai-app-d32a5.appspot.com", 
  messagingSenderId: "930265139531",
  appId: "1:930265139531:web:81a9a5a232a86fe47ac0ce",
  measurementId: "G-F4LVTM6ZTY"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 

   ```

3. Upewnij się, że bazy danych Firestore są poprawnie skonfigurowane.

## Struktura Projektu

```
📂 src
├── 📂 components         # Komponenty UI
├── 📂 context            # Konteksty aplikacji (użytkownik, plany treningowe itp.)
├── 📂 pages              # Główne strony aplikacji
├── 📂 utils              # Narzędzia i funkcje pomocnicze
└── firebaseConfig.ts     # Konfiguracja Firebase
```

## Obsługa

1. **Rejestracja i 
   - Przejdź na stronę rejestracji i wprowadź dane użytkownika.
   - Po rejestracji następuje przekierowanie na stronę płatności.

2. **Dodawanie planów treningowych**:
   - Po zalogowaniu przejdź na stronę `Add Workout`, aby dodać nowy plan treningowy.

3. **Zarządzanie celami**:
   - Ustaw nowe cele na stronie `Set Goals`, a następnie przeglądaj je na stronie `Show Goals`.

## Autorzy

Projekt został stworzony przez Maksymilian Rożek, WIktoria Gałkowska, Antoni Barczak w celach edukacyjnych.

## Licencja

Ten projekt jest objęty licencją MIT.


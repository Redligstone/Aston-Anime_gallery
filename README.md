### Веб-сайт, где собрана информация о популярных аниме: здесь можно найти подробности о вашем любимом японском анимационном фильме или сериале.

На базе [**Anime DB API**](https://rapidapi.com/brian.rofiq/api/anime-db/details) от BrianRofiq

Реализовано: Марениным Г.А.

## Учтенные требования к проекту

-   Для хранения учетных записей пользователей, их избранного и истории поиска, используем LocalStorage ☑️ [**LocalStorage**](https://github.com/Redligstone/Aston-Anime_gallery/blob/7993efa457dcedd1be6b84fc95ab6af20b6a55b3/src/utils/local-storage.ts#L5)

### React

-   Проект написан с использованием функциональных компонентов в приоритете над классовыми ☑️
-   Есть разделение на умные и глупые компоненты ☑️ Пример [**глупого**]() и [**умного**]() компонента
-   Есть рендеринг списков ☑️ [**Пример**](https://github.com/Redligstone/Aston-Anime_gallery/blob/7993efa457dcedd1be6b84fc95ab6af20b6a55b3/src/components/card-list/card-list.tsx#L17), [**Пример с UUID**](https://github.com/Redligstone/Aston-Anime_gallery/blob/7993efa457dcedd1be6b84fc95ab6af20b6a55b3/src/pages/history/history.tsx#L49C21-L49C21)
-   Реализована хотя бы одна форма ☑️ [**Форма авторизации**](https://github.com/Redligstone/Aston-Anime_gallery/blob/7993efa457dcedd1be6b84fc95ab6af20b6a55b3/src/pages/log-in/log-in.tsx#L46)
-   Есть применение Контекст API ☑️ [**Контекст**](https://github.com/Redligstone/Aston-Anime_gallery/blob/7993efa457dcedd1be6b84fc95ab6af20b6a55b3/src/services/theme/theme-provider.tsx#L7)
-   Есть применение предохранителя ☑️ [**Использование предохранителя**]()
-   Есть хотя бы один кастомный хук ☑️ [**Хук**](https://github.com/Redligstone/Aston-Anime_gallery/blob/7993efa457dcedd1be6b84fc95ab6af20b6a55b3/src/hooks/use-data-fetching.ts#L22)
-   Хотя бы несколько компонентов используют PropTypes ☑️ [**Пример использования**]()
-   Есть применение lazy + Suspense ☑️ [**Lazy**](https://github.com/Redligstone/Aston-Anime_gallery/blob/7993efa457dcedd1be6b84fc95ab6af20b6a55b3/src/routing/lazy.tsx#L7) [**Suspense**](https://github.com/Redligstone/Aston-Anime_gallery/blob/7993efa457dcedd1be6b84fc95ab6af20b6a55b3/src/pages/main/main.tsx#L28)

### Redux

-   Используется Modern Redux with Redux Toolkit ☑️
-   Используются слайсы ☑️ [**Auth**](https://github.com/Redligstone/Aston-Anime_gallery/blob/7993efa457dcedd1be6b84fc95ab6af20b6a55b3/src/redux/slices/auth-slice.ts#L15), [**Favorites**](https://github.com/Redligstone/Aston-Anime_gallery/blob/7993efa457dcedd1be6b84fc95ab6af20b6a55b3/src/redux/slices/favorites-slice.ts#L14), [**History**](https://github.com/Redligstone/Aston-Anime_gallery/blob/7993efa457dcedd1be6b84fc95ab6af20b6a55b3/src/redux/slices/history-slice.ts#L13)
-   Есть кастомная мидлвара ☑️ [**Мидлвара**](https://github.com/Redligstone/Aston-Anime_gallery/blob/7993efa457dcedd1be6b84fc95ab6af20b6a55b3/src/redux/middleware/users-state-sync-middleware.ts#L10)
-   Используется RTK Query ☑️ [**RTK Query**](https://github.com/Redligstone/Aston-Anime_gallery/blob/7993efa457dcedd1be6b84fc95ab6af20b6a55b3/src/api/cards-api.ts#L32)
-   Используется Transforming Responses ☑️ [**Transforming Responses**](https://github.com/Redligstone/Aston-Anime_gallery/blob/7993efa457dcedd1be6b84fc95ab6af20b6a55b3/src/api/cards-api.ts#L45)

### Дополнительно

-   Используется TypeScript

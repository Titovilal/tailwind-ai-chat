# Tailwind AI Chat

Bienvenido al repositorio de **Tailwind AI Chat**. Este proyecto se compone de un frontend, un backend y una base de datos, organizados en tres carpetas principales.

## Contenido

- [Ejecución del Proyecto](#ejecución-del-proyecto)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Base de Datos](#base-de-datos)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Desarrolladores](#desarrolladores)

## Ejecución del Proyecto

### Frontend

Para ejecutar el frontend, navega a la carpeta `frontend` y utiliza el siguiente comando:

```bash
pnpm run dev
```

### Backend

Para ejecutar el backend, navega a la carpeta `backend` y utiliza el siguiente comando:

```bash
python main.py
```

### Base de Datos

Para iniciar la base de datos, asegúrate de tener Docker Engine encendido y utiliza el siguiente comando en la raíz del proyecto:

```bash
supabase start
```

Si necesitas repoblar la base de datos, utiliza el siguiente comando:

```bash
supabase db reset
```

## Tecnologías Utilizadas

### Frontend

- **Next.js**: Framework de React para aplicaciones web.
- **Tailwind CSS**: Framework CSS para un diseño rápido y responsivo.
- **shadcn**: Componentes UI para Tailwind CSS.

### Backend

- **FastAPI**: Framework web moderno y rápido para construir APIs con Python.

### Base de Datos

- **Supabase**: Plataforma de base de datos que proporciona un backend como servicio.

## Estructura del Proyecto

La estructura del proyecto está organizada en las siguientes carpetas:

```
.
├── frontend
│   ├── components
│   ├── pages
│   ├── styles
│   └── ...
├── backend
│   ├── app
│   ├── main.py
│   └── ...
└── ai
    ├── models
    ├── scripts
    └── ...
```

- **frontend**: Contiene todo el código relacionado con la interfaz de usuario.
- **backend**: Contiene el código del servidor y la API.
- **ai**: Contiene los modelos y scripts relacionados con la inteligencia artificial del chat.
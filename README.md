<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# Clonar y Configurar el Proyecto

Sigue estos pasos para clonar este proyecto de Laravel 11 con Inertia.js, Vue.js y SQLite.

## 1. Clonar el Repositorio

Primero, clona el repositorio utilizando Git:

```bash
git clone <URL del repositorio>
```

## 2. Instalar Dependencias

Accede a la carpeta del proyecto y luego instala las dependencias de PHP utilizando Composer:

```bash
cd nombre-del-proyecto
composer install
```

Instala las dependencias de JavaScript utilizando NPM:

```bash
npm install
```

## 3. Configurar el Archivo `.env`

Copia el archivo `.env.example` y renómbralo como `.env`:

```bash
cp .env.example .env
```

## 4. Configurar SQLite

Asegúrate de que el archivo de base de datos de SQLite esté ubicado en la carpeta `/database` del proyecto. Si no tienes el archivo, puedes crearlo con el siguiente comando:

```bash
touch database/database.sqlite
```

Luego, configura la ruta en tu archivo `.env` de la siguiente manera:

```dotenv
DB_CONNECTION=sqlite
DB_DATABASE=./database/database.sqlite
```

## 5. Generar la Clave de la Aplicación

Genera una nueva clave para la aplicación:

```bash
php artisan key:generate
```

## 6. Ejecutar Migraciones (si es necesario)

Si el proyecto requiere migraciones para configurar la base de datos, ejecútalas con el siguiente comando:

```bash
php artisan migrate
```

## 7. Servir la Aplicación

Finalmente, puedes servir la aplicación localmente con el siguiente comando:

```bash
php artisan serve
```

La aplicación estará disponible en `http://localhost:8000`.

## 8. Compilar los Assets de Vue.js

Si es necesario, puedes compilar los assets de Vue.js utilizando uno de estos comandos:

```bash
npm run dev
# o si usas Yarn:
yarn dev
```

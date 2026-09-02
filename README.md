# Catálogo de Productos - TypeScript

Pequeño proyecto en TypeScript que modela un catálogo de productos (inventario) y expone funciones para filtrar por categoría, calcular el valor total del inventario disponible y generar un resumen legible de los productos.

## Dominio del proyecto

El dominio elegido es la **gestión de inventario/catálogo de una tienda**. Cada producto tiene un identificador, nombre, categoría (`Electrónica`, `Accesorios` o `Componentes`), precio y estado de disponibilidad. Sobre ese catálogo se aplican operaciones típicas de un sistema de inventario: filtrado por categoría, cálculo del valor total de las existencias disponibles y generación de un resumen en texto para mostrar al usuario.

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior
- npm (incluido con Node.js)

## Instalación

```bash
git clone https://github.com/Maynorpoz/TypeScript.git
cd TypeScript
npm install
```

## Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run typecheck` | Verifica los tipos del proyecto con `tsc --noEmit`, sin generar archivos de salida. |
| `npm run build` | Compila el código TypeScript de `src/` a JavaScript en `dist/`. |
| `npm run start` | Ejecuta el proyecto ya compilado (`node dist/index.js`). Requiere haber corrido `npm run build` antes. |

## Estructura del proyecto

```
TypeScript/
├── src/
│   ├── models.ts     # Tipos e interfaces del dominio (Producto, CategoriaProducto)
│   ├── catalog.ts     # Catálogo inicial de productos y funciones (filtrar, calcular, resumir)
│   └── index.ts        # Punto de entrada: ejecuta y muestra los resultados por consola
├── dist/               # Salida compilada (generada por `npm run build`)
├── package.json        # Dependencias y scripts del proyecto
├── tsconfig.json       # Configuración del compilador de TypeScript
└── README.md
```

## Ejemplo de uso

```bash
npm run build
npm run start
```

Esto imprime en consola el resumen del catálogo completo, los productos filtrados por la categoría "Accesorios" y el valor total del inventario disponible.
